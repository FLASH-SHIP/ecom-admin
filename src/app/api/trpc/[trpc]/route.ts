import { env } from "@admin/env";
import { getAdminSessionCookieName } from "@admin/lib/auth";
import { decodeToken, signAccessToken } from "@flash-ship/ecom-lib/jwt";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

async function resolveAuthorizationHeader(req: Request): Promise<string | null> {
  try {
    const cookieName = getAdminSessionCookieName(env.NODE_ENV === "production");

    const nextAuthToken = await getToken({
      req: req as unknown as NextRequest,
      secret: env.AUTH_SECRET,
      cookieName,
    });

    let jwtToken = nextAuthToken?.accessToken as string | undefined;

    if (jwtToken) {
      try {
        const decoded = decodeToken(jwtToken);
        if (!decoded?.exp || decoded.exp * 1000 <= Date.now() + 10000) {
          jwtToken = undefined;
        }
      } catch {
        jwtToken = undefined;
      }
    }

    if (!jwtToken && nextAuthToken?.id) {
      jwtToken = signAccessToken({
        userId: String(nextAuthToken.id),
        tokenVersion: (nextAuthToken.tokenVersion as number) || 1,
      });
    }

    return jwtToken ? `Bearer ${jwtToken}` : null;
  } catch (e) {
    console.warn("[tRPC Proxy] Failed to extract NextAuth session token:", e);
    return null;
  }
}

const handler = async (req: Request) => {
  const url = new URL(req.url);
  const backendUrl = `${env.NEXT_PUBLIC_API_URL}/api/trpc${url.pathname.replace("/api/trpc", "")}${url.search}`;

  const headers = new Headers(req.headers);
  headers.set("host", new URL(env.NEXT_PUBLIC_API_URL).host);

  // Forward client IP and User-Agent for audit logs & rate limiters
  const clientIp = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip");
  if (clientIp) headers.set("x-forwarded-for", clientIp);

  // SEC-01: Delete any client-supplied authorization header to prevent spoofing
  headers.delete("authorization");

  const authHeader = await resolveAuthorizationHeader(req);
  if (authHeader) {
    headers.set("authorization", authHeader);
  }

  // SEC-02: Delete raw browser cookies before forwarding to backend
  headers.delete("cookie");

  try {
    const res = await fetch(backendUrl, {
      method: req.method,
      headers,
      body: req.method !== "GET" && req.method !== "HEAD" ? await req.text() : undefined,
    });

    const responseHeaders = new Headers(res.headers);
    responseHeaders.delete("content-encoding");
    responseHeaders.delete("content-length");

    return new Response(res.body, {
      status: res.status,
      headers: responseHeaders,
    });
  } catch (error) {
    console.warn("[tRPC Proxy] Backend API unavailable or starting up:", (error as Error).message);
    return Response.json(
      [{ error: { json: { message: "Backend API unavailable or warming up", code: -32603 } } }],
      { status: 503 },
    );
  }
};

export { handler as GET, handler as POST };

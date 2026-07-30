import { env } from "@admin/env";
import type { AdminAuthResponse } from "@flash-ship/ecom-types";
import type { NextAuthResult } from "next-auth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const AUTH_KEYS = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
} as const;

export async function resolveUserPermissions(_userId: string): Promise<string[]> {
  return [];
}

export function getAdminSessionCookieName(useSecureCookies: boolean): string {
  return useSecureCookies ? "__Secure-ecom-admin.session-token" : "ecom-admin.session-token";
}

const nextAuth: NextAuthResult = NextAuth({
  secret: env.AUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  cookies: {
    sessionToken: {
      name: getAdminSessionCookieName(env.NODE_ENV === "production"),
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: env.NODE_ENV === "production",
      },
    },
  },
  debug: env.NODE_ENV === "development",
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const apiUrl = env.NEXT_PUBLIC_API_URL;

          const res = await fetch(`${apiUrl}/api/v1/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          if (!res.ok) return null;
          const json: AdminAuthResponse = await res.json();
          const user = json?.data?.user;
          const accessToken = json?.data?.accessToken;
          if (!user) return null;

          // biome-ignore lint/suspicious/noExplicitAny: user payload
          const rawUser = user as any;
          const roles = rawUser.roles?.map((r: { name?: string } | string) =>
            typeof r === "string" ? r : r.name,
          ) ?? ["admin"];
          const isSuperAdmin = roles.includes("admin") || roles.includes("super-admin");
          // Super Admin gets ["*"] for instant 0ms permission checks;
          // Normal users get [] in Cookie to keep Cookie size ultra-lightweight (< 400 bytes).
          // Granular permissions for normal users are resolved dynamically via tRPC viewer.auth.me.
          const permissions = isSuperAdmin ? ["*"] : [];

          return {
            id: String(user.id),
            email: user.email,
            name: user.name,
            roles,
            permissions,
            accessToken,
            tokenVersion: user.tokenVersion ?? 1,
          };
        } catch (error) {
          console.error("NextAuth admin authorize error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const u = user as {
          accessToken?: string;
          tokenVersion?: number;
          roles?: string[];
          permissions?: string[];
        };
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.roles = u.roles ?? ["admin"];
        token.permissions = u.permissions ?? ["*"];
        token.accessToken = u.accessToken;
        token.tokenVersion = u.tokenVersion ?? 1;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id as string;
        session.db = {
          id: token.id as string,
          displayName: (token.name as string) || "Admin",
          email: (token.email as string) || undefined,
          role: (token.roles as string[]) || ["admin"],
          permissions: (token.permissions as string[]) || ["*"],
        };
      }
      return session;
    },
  },
});

export const handlers = nextAuth.handlers;
export const auth = nextAuth.auth;
export const signIn = nextAuth.signIn;
export const signOut = nextAuth.signOut;
export default nextAuth;

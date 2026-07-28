import { env } from "@admin/env";

export async function POST(req: Request) {
  const backendUrl = `${env.NEXT_PUBLIC_API_URL}/api/v1/media/upload`;

  const headers = new Headers(req.headers);
  headers.set("host", new URL(env.NEXT_PUBLIC_API_URL).host);

  const res = await fetch(backendUrl, {
    method: "POST",
    headers,
    body: await req.blob(),
  });

  return new Response(res.body, {
    status: res.status,
    headers: res.headers,
  });
}

import { callCloud, toClientResponse } from "@/lib/cloudApi";

export async function POST(request: Request) {
  const data = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!data) return Response.json({ message: "Invalid request." }, { status: 400 });

  const payload = {
    username: typeof data.username === "string" ? data.username : "",
    password: typeof data.password === "string" ? data.password : "",
  };

  return toClientResponse(await callCloud("signin", payload, request));
}

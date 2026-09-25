import { callCloud, toClientResponse } from "@/lib/cloudApi";

const fields = [
  "business_name",
  "owner_name",
  "email",
  "phone",
  "country",
  "city",
  "username",
  "password",
  "password_confirmation",
  "plan",
] as const;

export async function POST(request: Request) {
  const data = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!data) return Response.json({ message: "Invalid request." }, { status: 400 });

  // Forward only the known sign-up fields.
  const payload = Object.fromEntries(fields.map((f) => [f, typeof data[f] === "string" ? data[f] : ""]));

  return toClientResponse(await callCloud("signup", payload, request));
}

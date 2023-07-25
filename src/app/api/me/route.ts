import { authOptions } from "@/lib/auth";
import { getUserByUserName } from "@/service/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  return getUserByUserName(user.username).then((data) =>
    NextResponse.json(data)
  );
}

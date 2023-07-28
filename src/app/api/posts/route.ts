import { authOptions } from "@/lib/auth";
import { getFollowingPostOf } from "@/service/posts";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  return getFollowingPostOf(user.username).then((data) =>
    NextResponse.json(data)
  );
}

import { createPost, getFollowingPostOf, updatePost } from "@/service/posts";
import { withSessionUser } from "@/utils/session";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return withSessionUser(async (user) => {
    return getFollowingPostOf(user.username).then((data) =>
      NextResponse.json(data)
    );
  });
}

export async function POST(req: NextRequest) {
  return withSessionUser(async (user) => {
    const form = await req.formData();
    const text = form.get("text")?.toString();
    const file = form.get("file") as Blob;

    if (!text || !file === undefined) {
      return new Response("Bad Request", { status: 400 });
    }

    return createPost(user.id, text, file).then((data) =>
      NextResponse.json(data)
    );
  });
}

export async function PUT(req: NextRequest) {
  return withSessionUser(async (user) => {
    const form = await req.formData();
    const postId = form.get("postId")?.toString();
    const newText = form.get("newText")?.toString();
    const newFile = form.get("newFile") as Blob;

    if (!postId || !newText || newFile === undefined) {
      return new Response("Bad Request", { status: 400 });
    }

    try {
      await updatePost(user.id, postId, newText, newFile);
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error(error);
      return new Response("Internal Server Error", { status: 500 });
    }
  });
}

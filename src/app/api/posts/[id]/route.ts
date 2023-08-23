import { deletePost, getPost } from "@/service/posts";
import { withSessionUser } from "@/utils/session";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: { id: string };
};

export async function GET(_: NextRequest, context: Context) {
  return withSessionUser(async () => {
    return getPost(context.params.id).then((data) => NextResponse.json(data));
  });
}

export async function DELETE(_: NextRequest, context: Context) {
  return withSessionUser(async (user) => {
    const postId = context.params.id;

    if (!postId) {
      return new Response("Bad Request", { status: 400 });
    }

    try {
      await deletePost(postId);
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error(error);
      return new Response("Internal Server Error", { status: 500 });
    }
  });
}

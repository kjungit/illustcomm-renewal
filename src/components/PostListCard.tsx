import { SimplePost } from "@/model/post";
import React from "react";
import Avatar from "./Avatar";
import Image from "next/image";

import { useSession } from "next-auth/react";
import CommentForm from "./CommentForm";
import CardInfoBar from "./CardInfoBar";
type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <article className="border border-gray-200 rounded-lg shadow-md">
      <div className="flex items-center p-2">
        <Avatar image={userImage} size="medium" highlight />
        <span className="ml-2 font-bold">{username}</span>
      </div>
      <Image
        className="object-cover w-full"
        src={image}
        alt={`photo by ${username}`}
        width={400}
        height={500}
        priority={priority}
      />
      <CardInfoBar
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
        myProfile={user?.image}
      />
      <CommentForm />
    </article>
  );
}

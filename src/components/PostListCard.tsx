"use client";

import { SimplePost } from "@/model/post";
import React, { useState } from "react";
import Avatar from "./Avatar";
import Image from "next/image";

import { useSession } from "next-auth/react";
import CommentForm from "./CommentForm";
import CardInfoBar from "./CardInfoBar";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./ui/PostModal";
import PostDetail from "./PostDetail";
import PostUserAvatar from "./PostUserAvatar";
type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  const [openModal, setOpenModal] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <article className="border border-gray-200 rounded-lg shadow-md">
      <PostUserAvatar username={username} image={userImage} />
      <Image
        className="object-cover w-full"
        src={image}
        alt={`photo by ${username}`}
        width={400}
        height={500}
        priority={priority}
        onClick={() => setOpenModal(true)}
      />
      <CardInfoBar post={post} myProfile={user?.image} />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
}

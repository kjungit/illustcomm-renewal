"use client";

import { Comment, SimplePost } from "@/model/post";
import React, { useState } from "react";
import Image from "next/image";
import CardInfoBar from "./CardInfoBar";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./ui/PostModal";
import PostDetail from "./PostDetail";
import PostUserAvatar from "./PostUserAvatar";
import usePosts from "@/hooks/usePosts";
type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, comments, text } = post;
  const [openModal, setOpenModal] = useState(false);
  const { postComment } = usePosts();
  const handlePostComment = (comment: Comment) => {
    postComment(post, comment);
  };

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
      <CardInfoBar post={post} onComment={handlePostComment}>
        <div className="flex text-sm">
          <span className="font-bold">{username}</span>
          <p className="ml-2">{text}</p>
        </div>
        {comments > 1 && (
          <button
            className="text-sm "
            onClick={() => setOpenModal(true)}
          >{`댓글 ${comments}개 모두 보기`}</button>
        )}
      </CardInfoBar>
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

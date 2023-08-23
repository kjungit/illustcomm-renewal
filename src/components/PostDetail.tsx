import { SimplePost } from "@/model/post";
import Image from "next/image";
import React from "react";
import PostUserAvatar from "./PostUserAvatar";
import CardInfoBar from "./CardInfoBar";
import Avatar from "./Avatar";
import usePost from "@/hooks/usePost";
import MoreModal from "./ui/MoreModal";
import useMe from "@/hooks/useMe";

type Props = {
  post: SimplePost;
};

export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image } = post;
  const { user } = useMe();
  const { post: data, postComment } = usePost(id);
  const comments = data?.comments;

  return (
    <section className="flex flex-col w-full h-full overflow-auto overflow-y-auto md:flex md:flex-row">
      <div className="relative basis-1/2 min-h-[400px]">
        <Image
          className="object-contain min-w-[240px] "
          src={image}
          alt={`photo by ${username}`}
          priority
          fill
          sizes="650px"
        />
      </div>
      <div className="flex flex-col w-full basis-1/2 ">
        <div className="flex items-center justify-between">
          <PostUserAvatar username={username} image={userImage} />
          {user?.username === data?.username && (
            <div className="mr-2">
              <MoreModal postId={data?.id} />
            </div>
          )}
        </div>
        <ul className="h-full p-4 m-1 overflow-y-auto border-t border-gray-200">
          {comments &&
            comments.map(
              ({ image, username: commentUsername, comment }, index) => (
                <li key={index} className="flex items-center mb-1">
                  <Avatar
                    image={image}
                    size="small"
                    highlight={commentUsername === username}
                  />
                  <div className="ml-2 text-sm">
                    <span className="mr-2 font-bold ">{commentUsername}</span>
                    <span>{comment}</span>
                  </div>
                </li>
              )
            )}
        </ul>
        <CardInfoBar post={post} onComment={postComment} />
      </div>
    </section>
  );
}

import React from "react";
import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import Avatar from "./Avatar";
import { parseDate } from "@/utils/date";
import CommentForm from "./CommentForm";

type Props = {
  likes: string[];
  username: string;
  text?: string;
  createdAt: string;
  myProfile?: string | undefined;
};

export default function CardInfoBar({
  likes,
  username,
  createdAt,
  myProfile,
  text,
}: Props) {
  return (
    <>
      <div className="flex justify-between p-3">
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div className="px-4 pb-4">
        <p className="font-bold">{`${likes?.length ?? 0} ${
          likes?.length > 1 ? "likes" : "like"
        }`}</p>
        {text && (
          <div className="flex text-sm">
            <span className="font-bold">{username}</span>
            <p className="ml-2">{text}</p>
          </div>
        )}
        <p className="my-2 text-xs font-medium">{parseDate(createdAt)}</p>
        {myProfile && <CommentForm image={myProfile} />}
      </div>
    </>
  );
}

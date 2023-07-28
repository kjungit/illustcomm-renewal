import React from "react";
import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import Avatar from "./Avatar";
import { parseDate } from "@/utils/date";

type Props = {
  likes: string[];
  username: string;
  text: string;
  createdAt: string;
  myProfile: string | undefined;
};

export default function CardInfoBar({
  likes,
  username,
  text,
  createdAt,
  myProfile,
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
        <div className="flex text-sm">
          <span className="font-bold">{username}</span>
          <p className="ml-2">{text}</p>
        </div>
        <p className="my-2 text-xs font-medium">{parseDate(createdAt)}</p>
        <div className="flex mt-2">
          <Avatar image={myProfile} size="xsmall" highlight />
          <p className="ml-2 text-sm font-bold ">댓글 달기...</p>
        </div>
      </div>
    </>
  );
}

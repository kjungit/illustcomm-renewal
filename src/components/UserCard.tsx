import { SearchUser } from "@/model/user";
import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";
type Props = {
  user: SearchUser;
};

export default function UserCard({
  user: { name, username, image, followers, following },
}: Props) {
  return (
    <Link href={`/user/${username}`} className="flex items-center w-full gap-4">
      <Avatar image={image} highlight />
      <div>
        <p className="font-bold">{username}</p>
        <p>{`${followers} followers | ${following} following`}</p>
      </div>
    </Link>
  );
}

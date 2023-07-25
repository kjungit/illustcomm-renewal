import { User } from "@/model/user";
import React from "react";
import Avatar from "./Avatar";

type Props = {
  user: User;
};

export default function SideBar({
  user: { name, username, email, image },
}: Props) {
  return (
    <>
      <div className="flex items-center">
        {image && <Avatar image={image} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-lg leading-4 text-gray-500 mx">{name}</p>
        </div>
      </div>
      <p className="mt-8 text-sm text-neutral-500">About</p>
      <p className="mt-8 text-sm font-bold text-neutral-500">
        Copyright ⓒ 2023 ILLUSTCOMM from KJUN
      </p>
    </>
  );
}

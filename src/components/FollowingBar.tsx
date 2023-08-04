"use client";

import Link from "next/link";
import React from "react";
import { SyncLoader } from "react-spinners";
import Avatar from "./Avatar";
import ScrollableBar from "./ui/ScrollableBar";
import useMe from "@/hooks/useMe";

export default function FollowingBar() {
  const { user, isLoading, error } = useMe();

  const users = user?.following;

  return (
    <section className="flex items-center justify-center w-full  p-4 mb-4 rounded-lg shadow-sm overflow-x-auto shadow-neutral-300 min-h-[120px] relative z-0">
      {isLoading ? (
        <SyncLoader size={8} color="gray" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ username, image }) => (
            <Link
              key={username}
              href={`/user/${username}`}
              className="flex flex-col items-center w-20 "
            >
              <Avatar image={image} highlight />
              <p className="w-full overflow-hidden text-sm text-center text-ellipsis">
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}

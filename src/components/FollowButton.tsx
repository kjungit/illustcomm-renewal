"use client";
import { ProfileUser } from "@/model/user";
import React from "react";
import Button from "./ui/Button";
import useMe from "@/hooks/useMe";

type Props = {
  user: ProfileUser;
};

export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { user: loggedInUser } = useMe();

  const showButton = loggedInUser && loggedInUser.username !== username;
  const isFollowing =
    loggedInUser &&
    loggedInUser.following.find((item) => item.username === username);

  const text = isFollowing ? "unFollow" : "Follow";

  const onClick = () => {
    console.log("click");
  };

  return <>{showButton && <Button text={text} onClick={onClick} />}</>;
}

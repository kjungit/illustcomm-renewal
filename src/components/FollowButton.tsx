"use client";
import { HomeUser, ProfileUser } from "@/model/user";
import React from "react";
import useSWR from "swr";
import Button from "./ui/Button";

type Props = {
  user: ProfileUser;
};

export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { data: loggedInUser } = useSWR<HomeUser>("/api/me");

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
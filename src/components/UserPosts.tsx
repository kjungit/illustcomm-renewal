"use client";
import { ProfileUser } from "@/model/user";
import React, { useState } from "react";
import PostIcon from "./ui/icons/PostIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import PostGrid from "./PostGrid";
import { CacheKeysContext } from "@/context/CacheKeysContext";
type Props = {
  user: ProfileUser;
};

const tabs = [
  { type: "posts", title: "User posts", icon: <PostIcon /> },
  {
    type: "saved",
    title: "Saved posts",
    icon: <BookmarkIcon className="w-3 h-3" />,
  },
  {
    type: "liked",
    title: "Liked posts",
    icon: <HeartIcon className="w-3 h-3" />,
  },
];

export default function UserPosts({ user: { username } }: Props) {
  const [query, setQuery] = useState(tabs[0].type);

  return (
    <section>
      <ul className="flex justify-center uppercase">
        {tabs.map(({ type, icon, title }) => (
          <li
            className={`p-4 mx-12 cursor-pointer border-black dark:border-white ${
              type === query && "font-bold border-t-2"
            }`}
            key={type}
            onClick={() => setQuery(type)}
          >
            <button className="mr-2 scale-150 md:scale-120" aria-label={title}>
              {icon}
            </button>
            <span className="hidden md:inline">{type}</span>
          </li>
        ))}
      </ul>
      <CacheKeysContext.Provider
        value={{ postsKey: `/api/users/${username}/${query}` }}
      >
        <PostGrid />
      </CacheKeysContext.Provider>
    </section>
  );
}

"use client";

import { SearchUser } from "@/model/user";
import { FormEvent, useState } from "react";
import { BeatLoader } from "react-spinners";
import useSWR from "swr";
import UserCard from "./UserCard";
import useDebounce from "@/hooks/useDebounce";
export default function UserSearch() {
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword);
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${debouncedKeyword}`);

  const onsubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="flex flex-col items-center justify-center w-full px-4">
      <form onSubmit={onsubmit} className="w-full max-w-2xl my-4">
        <input
          className="w-full p-3 text-xl rounded-md outline-none bg-neutral-100 dark:bg-neutral-900"
          type="text"
          autoFocus
          placeholder="검색"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>에러남</p>}
      {isLoading && <BeatLoader />}
      {!isLoading && !error && users?.length === 0 && <p>사용자가 없습니다.</p>}
      <ul className="flex flex-col items-center w-full max-w-2xl gap-4 p-4">
        {users &&
          users.map((user) => (
            <li key={user.username} className="w-full">
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
}

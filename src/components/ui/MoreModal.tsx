"use client";
import React, { useEffect, useRef, useState } from "react";
import MoreIcon from "./icons/MoreIcon";
import Link from "next/link";
import useMe from "@/hooks/useMe";
import usePosts from "@/hooks/usePosts";
const BUTTON_STYLE =
  "py-2 hover:bg-black hover:text-white hover:rounded-md dark:hover:bg-white dark:hover:text-black";

export default function MoreModal({ postId }: { postId?: string }) {
  const [isClick, setIsClick] = useState(false);
  const outerRef = useRef(null);
  const { user, setBookmark } = useMe();
  const { deletePostCallback } = usePosts();

  const handleClickModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsClick(!isClick);
  };

  const handleClickDocument = (e: MouseEvent) => {
    setIsClick(false);
  };

  useEffect(() => {
    if (isClick) {
      document.addEventListener("click", handleClickDocument);
      return () => {
        document.removeEventListener("click", handleClickDocument);
      };
    }
  }, [isClick]);

  if (!postId) return null;
  const bookmarked = user?.bookmarks.includes(postId) ?? false;

  const handleDelete = async () => {
    if (bookmarked) {
      setBookmark(postId, !bookmarked);
    }
    deletePostCallback(postId);
  };

  return (
    <div className="relative cursor-pointer">
      <div onClick={handleClickModal}>
        <MoreIcon />
      </div>
      {isClick && (
        <div
          ref={outerRef}
          className="w-[100px] text-center absolute right-0 h-auto   shadow-md rounded-md bg-white dark:bg-black text-black dark:text-white dark:border dark:border-white"
        >
          <Link href={`edit/${postId}`}>
            <li className={`border-b dark:border-white ${BUTTON_STYLE}`}>
              수정
            </li>
          </Link>
          <li onClick={handleDelete} className={`${BUTTON_STYLE}`}>
            삭제
          </li>
        </div>
      )}
    </div>
  );
}

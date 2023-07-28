"use client";
import { SimplePost } from "@/model/post";
import React from "react";
import useSWR from "swr";
import PostListCard from "./PostListCard";
import Masonry from "react-masonry-css";
import BeatSpinner from "./ui/BeatSpinner";

const breakpointBlogPostColumnsObj = {
  default: 2,
  1200: 1,
};

export default function PostList() {
  const { data: posts, isLoading } = useSWR<SimplePost[]>("/api/posts");
  return (
    <section>
      {isLoading && (
        <div className="mt-8 text-center">
          <BeatSpinner />
        </div>
      )}
      {posts && (
        <Masonry
          breakpointCols={breakpointBlogPostColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid-column"
        >
          {posts.map((post, index) => (
            <li key={post.id}>
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </Masonry>
      )}
    </section>
  );
}

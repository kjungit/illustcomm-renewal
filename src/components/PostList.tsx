"use client";

import React from "react";
import PostListCard from "./PostListCard";
import Masonry from "react-masonry-css";
import BeatSpinner from "./ui/BeatSpinner";
import usePosts from "@/hooks/usePost";

const breakpointBlogPostColumnsObj = {
  default: 2,
  1200: 1,
};

export default function PostList() {
  const { posts, isLoading } = usePosts();
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

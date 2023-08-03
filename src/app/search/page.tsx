import UserSearch from "@/components/UserSearch";
import { Metadata } from "next";
import React from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "유저 검색",
  description: "유저를 검색해보세요.",
};

export default function SearchPage() {
  return (
    <div>
      <UserSearch />
    </div>
  );
}

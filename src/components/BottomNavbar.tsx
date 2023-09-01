"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import HomeIcon from "./ui/icons/HomeIcon";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import { usePathname } from "next/navigation";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
    title: "Home",
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
    title: "Search users",
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
    title: "New Post",
  },
];

export default function BottomNavbar() {
  const [isMounted, setIsMounted] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    if (isMounted) return;
    setIsMounted(true);
  }, []);

  return (
    <>
      <nav className="fixed md:hidden left-0 bottom-0 border-t-2  flex items-center h-[60px]  px-6 bg-white right-0 dark:bg-black dark:text-white">
        <ul className="flex items-center justify-between w-full gap-4 p-4">
          {menu.map((item) => (
            <li key={item.href} aria-label={item.title}>
              <Link href={item.href}>
                {pathName === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

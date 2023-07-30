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
import ColorButton from "./ui/ColorButton";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "./Avatar";
import useDarkMode from "@/hooks/useDarkMode";
import DarkModeIcon from "./ui/icons/DarkModeIcon";
import LightModeIcon from "./ui/icons/LightModeIcon";
import BlockLogo from "./ui/BlackLogo";
import WhiteLogo from "./ui/WhiteLogo";

const menu = [
  { href: "/", icon: <HomeIcon />, clickedIcon: <HomeFillIcon /> },
  { href: "/search", icon: <SearchIcon />, clickedIcon: <SearchFillIcon /> },
  { href: "/new", icon: <NewIcon />, clickedIcon: <NewFillIcon /> },
];

export default function Navbar() {
  const [theme, setTheme] = useDarkMode();
  const darkModeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.body.setAttribute("data-theme", "light");
    }
  };
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="flex items-center justify-between px-6 dark:bg-black dark:text-white">
      <Link href="/">{theme === "dark" ? <WhiteLogo /> : <BlockLogo />}</Link>
      <nav>
        <ul className="flex items-center gap-4 p-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathName === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Avatar image={user.image} size="small" highlight />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <ColorButton text="Sign out" onClick={() => signOut()} />
            ) : (
              <ColorButton text="Sign in" onClick={() => signIn()} />
            )}
          </li>
          <button onClick={darkModeHandler}>
            {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </button>
        </ul>
      </nav>
    </div>
  );
}

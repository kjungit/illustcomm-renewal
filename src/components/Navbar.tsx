"use client";
import Link from "next/link";
import React from "react";
import HomeIcon from "./ui/icons/HomeIcon";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import { usePathname } from "next/navigation";
import ColorButton from "./ui/ColorButton";
import Image from "next/image";

const menu = [
  { href: "/", icon: <HomeIcon />, clickedIcon: <HomeFillIcon /> },
  { href: "/search", icon: <SearchIcon />, clickedIcon: <SearchFillIcon /> },
  { href: "/new", icon: <NewIcon />, clickedIcon: <NewFillIcon /> },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="flex items-center justify-between px-6">
      <Link href="/">
        <Image
          src="/assets/illust-logo-black.png"
          alt="logo"
          width={200}
          height={50}
        />
      </Link>
      <nav>
        <ul className="flex items-center gap-4 p-4">
          {menu.map((item) => (
            <li key={item.href}>
              {" "}
              <Link href={item.href}>
                {pathName === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          <li>
            <ColorButton text="Sign in" onClick={() => {}} />
          </li>
        </ul>
      </nav>
    </div>
  );
}
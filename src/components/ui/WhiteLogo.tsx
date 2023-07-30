import Image from "next/image";
import React from "react";

export default function WhiteLogo() {
  return (
    <Image
      src="/assets/illust-logo-white.png"
      alt="logo"
      width={200}
      height={50}
      priority={true}
    />
  );
}

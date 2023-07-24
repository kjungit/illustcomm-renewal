import Image from "next/image";
import React from "react";

type Props = { image?: string | null };

export default function Avatar({ image }: Props) {
  return (
    <div className="w-10 h-10 ">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-10 h-10 rounded-full"
        src={image ?? undefined}
        alt="profile"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

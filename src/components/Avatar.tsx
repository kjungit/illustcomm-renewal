import React from "react";

type Props = {
  image?: string | null;
  size?: "small" | "normal";
  highlight?: boolean;
};

export default function Avatar({
  image,
  size = "normal",
  highlight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`w-10 h-10 object-cover rounded-full p-[0.15rem] bg-white ${getImageSizeStyle(
          size
        )}`}
        src={image ?? undefined}
        alt="profile"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function getContainerStyle(size: string, highlight: boolean): string {
  const baseStryle = "rounded-full flex justify-center items-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-gray-600 via-gray-300 to-gray-100"
    : "";
  const sizeStyle = size === "small" ? "w-10 h-10" : "w-[68px] h-[68px]";

  return `${baseStryle} ${highlightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: string): string {
  return size === "small"
    ? "w-[34px] h-[34px] p-[0.1rem]"
    : "w-16 h-16 p-[0.2rem]";
}

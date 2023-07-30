import React from "react";
type AvatorSize = "xsmall" | "small" | "medium" | "large";
type Props = {
  image?: string | null;
  size?: AvatorSize;
  highlight?: boolean;
};

export default function Avatar({
  image,
  size = "large",
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

function getContainerStyle(size: AvatorSize, highlight: boolean): string {
  const baseStryle = "rounded-full flex justify-center items-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-gray-600 via-gray-300 to-gray-100 dark:from-gray-100 dark:via-gray-300 dark:to-gray-600"
    : "";
  const sizeStyle = getContainerSize(size);

  return `${baseStryle} ${highlightStyle} ${sizeStyle}`;
}

function getContainerSize(size: AvatorSize): string {
  switch (size) {
    case "xsmall":
      return "w-6 h-6";
    case "small":
      return "w-10 h-10";
    case "medium":
      return "w-11 h-11";
    case "large":
      return "w-[68px] h-[68px]";
  }
}
function getImageSizeStyle(size: AvatorSize): string {
  switch (size) {
    case "xsmall":
      return "w-6 h-6 p-[0.5rem]";
    case "small":
      return "w-[34px] h-[34px] p-[0.1rem]";
    case "medium":
      return "w-[42px] h-[42x] p-[0.1rem]";
    case "large":
      return "w-16 h-16 p-[0.2rem]";
  }
}

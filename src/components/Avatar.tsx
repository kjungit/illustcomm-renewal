import React from "react";
type AvatorSize = "xsmall" | "small" | "medium" | "large" | "xlarge";
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
        className={`w-10 h-10 object-cover rounded-full p-[0.15rem] bg-white 
        ${getImageSizeStyle(size).image}`}
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
  const { container } = getImageSizeStyle(size);

  return `${baseStryle} ${highlightStyle} ${container}`;
}

type ImageSizeStyle = {
  container: string;
  image: string;
};

function getImageSizeStyle(size: AvatorSize): ImageSizeStyle {
  switch (size) {
    case "xsmall":
      return {
        container: "w-7 h-7",
        image: "w-[24px] h-[24px] p-[0.1rem]",
      };
    case "small":
      return {
        container: "w-9 h-9",
        image: "w-[34px] h-[34px] p-[0.1rem]",
      };
    case "medium":
      return {
        container: "w-11 h-11",
        image: "w-[42px] h-[42x] p-[0.1rem]",
      };
    case "large":
      return {
        container: "w-[68px] h-[68px]",
        image: "w-16 h-16 p-[0.2rem] p-[0.2rem]",
      };
    case "xlarge":
      return {
        container: "w-[132px] h-[132px]",
        image: "w-[128px] h-[128px] p-[0.3rem]",
      };
    default:
      throw new Error(`Unsupported type sizeL ${size}`);
  }
}

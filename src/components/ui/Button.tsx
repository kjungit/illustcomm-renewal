import React from "react";

type Props = {
  text: string;
  onClick: () => void;
  color?: boolean;
  disabled?: boolean;
};

export default function Button({
  text,
  onClick,
  color,
  disabled = false,
}: Props) {
  return (
    <button
      className={`${
        color ? "bg-blue-600" : "bg-black dark:text-black dark:bg-white"
      } p-2 font-bold leading-4 text-white  border-none rounded-md w-full h-full ${
        disabled && "opacity-60"
      }`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

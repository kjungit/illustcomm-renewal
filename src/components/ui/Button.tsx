import React from "react";

type Props = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: Props) {
  return (
    <button
      className="p-2 font-bold leading-4 text-white bg-black border-none rounded-md dark:text-black dark:bg-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

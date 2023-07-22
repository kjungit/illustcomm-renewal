import React from "react";

type Props = {
  text: string;
  onClick: () => void;
};

export default function ColorButton({ text, onClick }: Props) {
  return (
    <div className="p-[0.15rem] rounded-md bg-gradient-to-bl from-gray-600 via-gray-300 to-gray-100 ">
      <button
        className="p-1 font-medium transition-opacity bg-white rounded-md hover:opacity-80"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

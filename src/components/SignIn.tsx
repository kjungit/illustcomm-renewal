"use client";
import { ClientSafeProvider, signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

const BACKGROUND = [
  { bg: "bg-[#fff]", border: "border-gray-600", text: "text-gray-800" },
  { bg: "bg-[#FCDC3F]", border: "border-[#FCDC3F]", text: "text-gray-800" },
  { bg: "bg-[#02C73A]", border: "border-[#02C73A]", text: "text-white" },
];

export default function SignIn({ providers, callbackUrl }: Props) {
  console.log(providers);
  return (
    <ul className="flex flex-col gap-4">
      {Object.values(providers).map(({ id, name }, index) => {
        return (
          <li
            key={name}
            className={`${BACKGROUND[index].bg} ${BACKGROUND[index].border} ${BACKGROUND[index].text} border w-[400px] h-[60px]  `}
          >
            <button
              onClick={() => signIn(id, { callbackUrl })}
              className="flex items-center w-full h-full "
            >
              <Image
                className="mx-4"
                src={`/assets/${id}.png`}
                alt={id}
                width={40}
                height={40}
              />
              <div className="flex justify-center w-full ml-[-60px]">
                <p className="font-bold">{name}로 시작하기</p>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

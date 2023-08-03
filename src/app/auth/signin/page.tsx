import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../../lib/auth";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import SignIn from "@/components/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인",
  description: "소셜 로그인을 해주세요.",
};

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-[10%] flex-col w-full items-center">
      <h2 className="mb-8 text-2xl font-bold">Sign In</h2>
      <SignIn providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}

import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../../lib/auth";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import SignIn from "@/components/SignIn";

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
    <section className="flex justify-center mt-[20%]">
      <SignIn providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}

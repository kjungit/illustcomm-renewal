import FollowingBar from "@/components/FollowingBar";
import PostList from "@/components/PostList";
import SideBar from "@/components/SideBar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    redirect("/auth/signin");
  }
  return (
    <section className="flex flex-col w-full max-w-full p-4 md:flex-row">
      <div className="w-3/4">
        <FollowingBar />
        <PostList />
      </div>
      <div className="w-1/4 ml-8">
        <SideBar user={user} />
      </div>
    </section>
  );
}

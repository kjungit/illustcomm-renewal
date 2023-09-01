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
    <section className="flex flex-col w-full max-w-full p-4 ">
      <div>
        <FollowingBar />
        <PostList />
      </div>
      <div>
        <SideBar user={user} />
      </div>
    </section>
  );
}

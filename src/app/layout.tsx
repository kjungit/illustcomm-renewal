import "./globals.css";
import { Open_Sans } from "next/font/google";
import AuthContext from "@/context/AuthContext";
import SWRConfigContext from "@/context/SWRConfigContext";
import { Metadata } from "next";
import TopNavbar from "@/components/TopNavbar";
import BottomNavbar from "@/components/BottomNavbar";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "illustcomm",
    template: "illustcomm | %s",
  },
  description: "일러스트 작가들을 위한 SNS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="w-full overflow-auto dark:bg-black dark:text-white ">
        <AuthContext>
          <header className="sticky top-0 z-10 bg-white border-b dark:bg-black">
            <div className="max-w-screen-xl mx-auto">
              <TopNavbar />
            </div>
          </header>
          <main className="w-full max-w-screen-xl mx-auto">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
          <div className="max-w-screen-xl mx-auto">
            <BottomNavbar />
          </div>
        </AuthContext>
        <div id="portal" />
      </body>
    </html>
  );
}

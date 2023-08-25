import Navbar from "@/app/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import dynamic from "next/dynamic";
import Contact from "@/app/contact/page";
import Resume from "@/app/resume/page";
const Project = dynamic(() => import("@/app/projects/page"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: "Federico's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${inter.className}`}>
        <Navbar />
        {children}
        <Resume />
        <Project />
        <Contact />
      </body>
    </html>
  );
}

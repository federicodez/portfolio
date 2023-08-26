import Navbar from "@/app/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

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
      </body>
    </html>
  );
}

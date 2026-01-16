import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Sidebar from "@/components/common/sidebar/sidebar";
import Footer from "@/components/common/footer";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Palu Developer Day 2026",
  description: "PDD2026 by HammerCode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/ic_pdd26.svg" sizes="any" />
      </head>
      <body className={sora.className}>
        <Navbar />
        <Sidebar />
        <div className="relative">
          <div className="relative z-10 mt-14 text-white md:mt-28">
            {children}
          </div>
          <ShootingStars />
          <StarsBackground />
        </div>
        <Footer />
      </body>
    </html>
  );
}

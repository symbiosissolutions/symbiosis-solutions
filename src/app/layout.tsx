import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Symbiosis Solutions",
  description:
    "Transforming Education Through Human-Centered Solutions. We Empower Educators and Learners with Personalized, Responsible AI Technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-80YQL7DVN6" />
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

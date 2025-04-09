import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

import { NavBar } from "./componets/storefront/NavBar";
import { Footer } from "./componets/storefront/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vangard Translations",
  description: "Professional translation and localization services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f4f4f4]`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <div className="fixed top-0 left-0 w-full z-50 bg-[#f4f4f4] shadow transition-all duration-300">
          <NavBar />
        </div>
        <main className="pt-24 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

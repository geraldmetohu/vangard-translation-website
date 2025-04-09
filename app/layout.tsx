import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { NavBar } from "./componets/NavBar";
import { Footer } from "./componets/Footer";

// Load custom fonts
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
        {/* Navigation Bar */}
        <div className="fixed top-0 left-0 w-full z-50 bg-[#f4f4f4] shadow transition-all duration-300">
          <NavBar />
        </div>

        {/* Main Content */}
        <main className="pt-24">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavbarLinks } from "./NavBarLinks";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#000957] text-[#F4CE14] shadow-md z-50">
      <div className="px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Logo & Title */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition">
          <div className="w-[110px] h-[110px] relative -my-4">
            <Image
              src="/logo_v.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-extrabold text-xl lg:text-3xl tracking-tight text-[#f3f3f1]">
            Vangard Translations
          </span>
        </Link>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#F4CE14]">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          <NavbarLinks />
          <Button asChild className="bg-[#F4CE14] text-[#000957] hover:bg-[#FFF455] rounded-xl font-semibold">
            <Link href="/quote">Request a Quote</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-6">
          <NavbarLinks isMobile onNavigate={() => setMenuOpen(false)} />
          <Button asChild className="w-full mt-4 bg-[#F4CE14] text-[#000957] hover:bg-[#FFF455] rounded-xl font-semibold">
            <Link href="/quote">Request a Quote</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}

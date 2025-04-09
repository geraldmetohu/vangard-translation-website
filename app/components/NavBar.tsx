'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarLinks } from "./NavBarLinks";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0D47A1] text-[#e7d240] shadow-md z-50">
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-extrabold text-xl lg:text-3xl tracking-tight text-[#e7d240] hover:text-[#ffd738]"
        >
          Vangard<span className="text-white">Translation</span>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#e7d240]">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <NavbarLinks />
          <Button asChild className="bg-[#e7d240] text-[#0D47A1] hover:bg-[#ffd738] rounded-xl font-semibold">
            <Link href="/quote">Request a Quote</Link>
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-6">
          <NavbarLinks isMobile />
          <Button asChild className="w-full mt-4 bg-[#e7d240] text-[#0D47A1] hover:bg-[#ffd738] rounded-xl font-semibold">
            <Link href="/quote">Request a Quote</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}

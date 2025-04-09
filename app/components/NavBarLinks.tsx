"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

const baseLinkStyle =
  "group px-3 py-2 font-medium text-sm rounded-md transition text-[#e7d240] hover:text-[#ffd738] hover:bg-[#29186b]/70";

export function NavbarLinks() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const servicesTimeout = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeout = useRef<NodeJS.Timeout | null>(null);

  return (
    <div className="hidden md:flex justify-center items-center gap-x-4 ml-8 relative">
      {/* Static Links */}
      {[
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
      ].map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            pathname === link.href
              ? "bg-[#29186b] text-[#ffd738]"
              : "hover:bg-[#29186b]/70",
            baseLinkStyle
          )}
        >
          {link.name}
        </Link>
      ))}

      {/* Services Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => {
          if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
          setServicesOpen(true);
          setIndustriesOpen(false);
        }}
        onMouseLeave={() => {
          servicesTimeout.current = setTimeout(() => setServicesOpen(false), 1000);
        }}
      >
        <button
          className={cn(
            pathname.startsWith("/services")
              ? "bg-[#29186b] text-[#ffd738]"
              : "",
            baseLinkStyle,
            "flex items-center gap-1"
          )}
        >
          Services <ChevronDown className="w-4 h-4" />
        </button>
        {servicesOpen && (
          <div className="absolute top-full left-0 mt-2 w-52 bg-[#0D47A1] shadow-lg border border-[#e7d240]/20 rounded-md z-20">
            {[
              { name: "Translating", href: "/services/translating" },
              { name: "Interpreting", href: "/services/interpreting" },
              { name: "Proofreading", href: "/services/proofreading" },
              { name: "Transcription", href: "/services/transcription" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm text-[#e7d240] hover:text-[#ffd738] hover:bg-[#29186b]/60 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Industries Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => {
          if (industriesTimeout.current) clearTimeout(industriesTimeout.current);
          setIndustriesOpen(true);
          setServicesOpen(false);
        }}
        onMouseLeave={() => {
          industriesTimeout.current = setTimeout(() => setIndustriesOpen(false), 1000);
        }}
      >
        <button
          className={cn(
            pathname.startsWith("/industries")
              ? "bg-[#29186b] text-[#ffd738]"
              : "",
            baseLinkStyle,
            "flex items-center gap-1"
          )}
        >
          Industries <ChevronDown className="w-4 h-4" />
        </button>
        {industriesOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-[#0D47A1] shadow-lg border border-[#e7d240]/20 rounded-md z-20">
            {[
              { name: "Medical", href: "/industries/medical" },
              { name: "Law", href: "/industries/law" },
              { name: "Financial", href: "/industries/financial" },
              { name: "Manufacturing & Engineering", href: "/industries/manufacturing" },
              { name: "Retail", href: "/industries/retail" },
              { name: "Media", href: "/industries/media" },
              { name: "Travel & Tourism", href: "/industries/travel" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm text-[#e7d240] hover:text-[#ffd738] hover:bg-[#29186b]/60 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

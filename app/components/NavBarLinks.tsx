"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function NavbarLinks({
  isMobile = false,
  onNavigate,
}: {
  isMobile?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const handleClick = (callback?: () => void) => {
    if (onNavigate) onNavigate();
    if (callback) callback();
  };

  const linkStyle = isMobile
    ? "block py-2 text-[#F4CE14] hover:text-[#FFF455]"
    : "group px-3 py-2 font-medium text-sm rounded-md transition text-[#F4CE14] hover:text-[#FFF455] hover:bg-[#024CAA]/70";

  const dropdownContainerStyle = isMobile
    ? "pl-4 space-y-2"
    : "absolute bg-[#000957] mt-2 p-2 rounded shadow space-y-2 z-50";

  return (
    <div className={`${isMobile ? "space-y-2" : "hidden md:flex items-center gap-x-4 ml-8"}`}>
      {[
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
      ].map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => handleClick()}
          className={`${linkStyle} ${pathname === link.href ? "bg-[#024CAA] text-[#FFF455]" : ""}`}
        >
          {link.name}
        </Link>
      ))}

      {/* Services */}
      <div className="relative">
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className={`${linkStyle} flex items-center gap-1 w-full`}
        >
          Services {servicesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {servicesOpen && (
          <div className={dropdownContainerStyle}>
            {[
              { name: "Translating", href: "/services/translating" },
              { name: "Interpreting", href: "/services/interpreting" },
              { name: "Proofreading", href: "/services/proofreading" },
              { name: "Transcription", href: "/services/transcription" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleClick(() => setServicesOpen(false))}
                className={linkStyle}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Industries */}
      <div className="relative">
        <button
          onClick={() => setIndustriesOpen(!industriesOpen)}
          className={`${linkStyle} flex items-center gap-1 w-full`}
        >
          Industries {industriesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {industriesOpen && (
          <div className={dropdownContainerStyle}>
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
                onClick={() => handleClick(() => setIndustriesOpen(false))}
                className={linkStyle}
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

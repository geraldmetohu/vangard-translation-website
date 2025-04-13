'use client';

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
    : "group px-3 py-2 font-medium text-sm rounded-md transition text-[#F4CE14] hover:text-[#FFF455] hover:bg-[#024CAA]/60";

  const dropdownBaseStyle = isMobile
    ? "pl-4 flex flex-col space-y-2"
    : "absolute mt-2 bg-[#000957] p-3 rounded shadow z-40 flex flex-col space-y-2";

  return (
    <div className={`${isMobile ? "space-y-2" : "hidden md:flex items-center gap-x-4 ml-8"}`}>
      {/* Top-Level Links */}
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
      <div
        className="relative"
        onMouseEnter={() => {
          if (!isMobile) {
            setServicesOpen(true);
            setIndustriesOpen(false);
          }
        }}
        onMouseLeave={() => {
          if (!isMobile) setServicesOpen(false);
        }}
      >
        <button
          onClick={() => isMobile && setServicesOpen(!servicesOpen)}
          className={`${linkStyle} flex items-center gap-1 w-full`}
        >
          Services {servicesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        <div
          className={`${servicesOpen ? "block" : "hidden"} ${dropdownBaseStyle}`}
          onMouseEnter={() => !isMobile && setServicesOpen(true)}
          onMouseLeave={() => !isMobile && setServicesOpen(false)}
        >
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
      </div>

      {/* Industries */}
      <div
        className="relative"
        onMouseEnter={() => {
          if (!isMobile) {
            setIndustriesOpen(true);
            setServicesOpen(false);
          }
        }}
        onMouseLeave={() => {
          if (!isMobile) setIndustriesOpen(false);
        }}
      >
        <button
          onClick={() => isMobile && setIndustriesOpen(!industriesOpen)}
          className={`${linkStyle} flex items-center gap-1 w-full`}
        >
          Industries {industriesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        <div
          className={`${industriesOpen ? "block" : "hidden"} ${dropdownBaseStyle}`}
          onMouseEnter={() => !isMobile && setIndustriesOpen(true)}
          onMouseLeave={() => !isMobile && setIndustriesOpen(false)}
        >
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
      </div>
    </div>
  );
}

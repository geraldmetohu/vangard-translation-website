import Link from "next/link";
import { NavbarLinks } from "./NavBarLinks";
import { Button } from "@/components/ui/button";

export async function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0D47A1] text-[#e7d240] shadow-md z-50">
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between w-full">
        {/* Logo & Links */}
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className="font-extrabold text-xl lg:text-3xl tracking-tight text-[#e7d240] hover:text-[#ffd738] transition"
          >
            Vangard<span className="text-white">Translation</span>
          </Link>
          <NavbarLinks />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
        <Button asChild className="bg-[#e7d240] text-[#0D47A1] hover:bg-[#ffd738] rounded-xl px-5 py-2 font-semibold transition">
          <Link href="/quote">Request a Quote</Link>
        </Button>

        </div>
      </div>
    </nav>
  );
}

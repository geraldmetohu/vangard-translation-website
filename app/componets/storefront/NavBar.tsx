import Link from "next/link";
import { NavbarLinks } from "./NavBarLinks";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBagIcon } from "lucide-react";
import { UserDropdown } from "./UserDropdown";
import { Button } from "@/components/ui/button";
import { redis } from "@/app/lib/redis";
import { Cart } from "@/app/lib/interfaces";

export async function NavBar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const cart: Cart | null = await redis.get(`cart-${user?.id}`);
  const total = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

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
          {user ? (
            <>
              <Link
                href="/bag"
                className="group relative flex items-center p-2 rounded hover:bg-[#29186b]/60 transition"
              >
                <ShoppingBagIcon className="h-6 w-6 text-[#e7d240] group-hover:text-[#ffd738] transition" />
                <span className="ml-1 text-sm font-medium text-[#e7d240] group-hover:text-[#ffd738] transition">
                  {total}
                </span>
              </Link>
              <UserDropdown
                email={user.email as string}
                name={user.given_name as string}
                userImage={user.picture ?? `https://avatar.vercel.sh/${user.given_name}`}
              />
            </>
          ) : (
            <Button asChild className="bg-[#e7d240] text-[#0D47A1] hover:bg-[#ffd738] rounded-xl px-5 py-2 font-semibold transition">
              <Link href="/quote">Request a Quote</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}

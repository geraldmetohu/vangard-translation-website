import { type ReactNode } from "react";
import { NavBar } from "../componets/storefront/NavBar";
import { Footer } from "../componets/storefront/Footer";

export default function StoreFrontLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="bg-[#f4f4f4]">

            <div className="fixed top-0 left-0 w-full z-50 bg-[#f4f4f4] shadow transition-all duration-300">
                <NavBar />
            </div>
            <main className="">
                {children}
            </main>
            <Footer />
            </div>
        </>
    );
}

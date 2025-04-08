import Image from "next/image";
import Link from "next/link";
import men from "@/public/men.png";
import women from "@/public/women.png";
import all from "@/public/all.png";


export function CategorySelection() {
    return(
        <div className="py-24 sm:py-32 ">
            <div className="flex justify-between items-enter">
                <h2 className="text-2xl font-extrabold tracking-tight">
                    Shop by Category
                </h2>
                <Link className="text-sm font-semibold text-primary hover:text-primary/70" href="/products/all"> 
                    Browse all Products &rarr;
                </Link>
            </div>
            
            
            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-4 lg:gap-6 ">
                <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2">
                    <Image src={all} alt="All Products Image" className="object-cover object-center"/>
                    <div className="bg-gradient-to-b from-transparent to-black opacity-50" />
                    <div className="p-6 flex items-end">
                        <Link href="/products/all">
                            <h3 className="text-white font-semibold">All Products</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
            
                <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:h-full sm:aspect-none">
                    <Image src={men} alt="Men Products Image" className="object-bottom object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"/>
                    <div className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                        <Link href="/products/men">
                            <h3 className="text-white font-semibold">Products for Men</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>

                <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:h-full sm:aspect-none">
                    <Image src={women} alt="Women Products Image" className="object-center object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"/>
                    <div className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                        <Link href="/products/woman">
                            <h3 className="text-white font-semibold">Products for Women</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>           
            </div>
        </div>
    );
}
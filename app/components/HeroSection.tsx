'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative w-full h-[950px] md:h-[650px] overflow-hidden"
    >
      <Image
        src="/Background.jpg"
        alt="Translation Background"
        fill
        className="absolute inset-0 z-0 object-cover object-center md:object-[50%_center]"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-left">
        <div className="max-w-full sm:max-w-xl  mt-[-40px] md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FDF6E3] leading-tight">
            Accurate. Reliable. Global.
          </h1>
          <p className="mt-8 text-lg md:text-xl lg:text-2xl font-normal text-[#f2e9d0] leading-relaxed">
            Vangard Translation delivers expert multilingual communication services tailored to meet the needs of your global audience.
          </p>
          <div className="mt-10">
            <a
              href="/quote"
              className="inline-block bg-[#000957] text-[#F4CE14] px-6 py-3 rounded-xl text-md font-semibold hover:bg-[#024CAA] hover:text-[#FFF455] transition"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

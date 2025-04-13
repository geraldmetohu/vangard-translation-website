'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldHalf, Globe, Zap, Languages } from "lucide-react";
import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("@/app/components/HeroSection"), {
  ssr: false,
});


export default function IndexPage() {
  return (
    <div className="space-y-24 w-full bg-[#f4f4f4]">
      <HeroSection />
      {/* Divider */}
      <div className="w-full h-16 bg-gradient-to-r from-[#000957] via-[#F4CE14] to-[#000957] opacity-20" />

      {/* Highlight Section (Image Right, Text Left) */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 grid md:grid-cols-2 items-center gap-12"
      >
        <div>
          <h2 className="text-4xl font-bold text-[#000957] mb-4">
            Bridging Cultures, One Word at a Time
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're targeting new markets or ensuring legal compliance, our services are crafted to help your voice be heard—clearly and accurately.
          </p>
          <div className="mt-6">
            <a
              href="/about"
              className="inline-block bg-[#000957] text-[#F4CE14] px-6 py-3 rounded-xl text-md font-semibold hover:bg-[#024CAA] hover:text-[#FFF455] transition"
            >
              Learn More About Us
            </a>
          </div>
        </div>
        <div className="w-full h-[300px] sm:h-[400px] relative rounded-xl overflow-hidden shadow-md">
          <Image
            src="/VS1.jpeg"
            alt="About Section"
            fill
            className="object-cover"
          />
        </div>
      </motion.section>

      {/* Divider */}
      <div className="w-full h-16 bg-gradient-to-r from-[#F4CE14] via-[#000957] to-[#F4CE14] opacity-20" />
      

      <div className="px-4 sm:px-6 lg:px-12">
        {/* Services Overview */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ once: true }}
          className="w-full py-12 bg-[#f4f4f4] rounded-xl max-w-7xl mx-auto"
        >
          <h2 className="text-5xl font-semibold text-center mb-24 text-[#000957]">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            {["Translation", "Interpreting", "Proofreading", "Transcription"].map((title, i) => {
              const img = `/${title.toLowerCase()}_serv.jpg`;
              const desc = {
                Translation: "Document and website translation in 100+ languages.",
                Interpreting: "Remote and in-person interpreting services.",
                Proofreading: "Ensure your content is accurate and clear.",
                Transcription: "Audio/video transcription services with precision.",
              }[title];

              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="group p-10 h-[450px] bg-white hover:bg-[#ece9e9] border border-[#d3d3d3] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <Image
                    src={img}
                    alt={title}
                    width={160}
                    height={160}
                    className="mb-6 rounded-lg object-cover"
                  />
                  <h3 className="text-2xl font-semibold mb-3 group-hover:font-bold text-[#000957] transition-all">
                    {title}
                  </h3>
                  <p className="text-gray-700 text-base group-hover:font-medium transition-all px-4">
                    {desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-16 flex justify-center">
            <a
              href="/services"
              className="inline-block bg-[#000957] text-[#F4CE14] px-6 py-3 rounded-xl text-md font-semibold hover:bg-[#024CAA] hover:text-[#FFF455] transition"
            >
              Discover All Services
            </a>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="w-full h-16 bg-gradient-to-r from-[#F4CE14] via-[#000957] to-[#F4CE14] opacity-20" />

        {/* Why Choose Us */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ once: true }}
          className="bg-[#f4f4f4] w-full px-6 py-12 rounded-xl"
        >
          <h2 className="text-4xl font-semibold text-center mb-16 text-[#000957]">
            Why Choose Vangard?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto text-center">
            {[
              {
                title: "Expert Linguists",
                desc: "Certified native translators with industry-specific expertise.",
                icon: <Languages size={56} className="mx-auto text-[#000957] group-hover:text-[#F4CE14] transition" />,
              },
              {
                title: "Fast Turnaround",
                desc: "We meet tight deadlines without compromising on quality.",
                icon: <Zap size={56} className="mx-auto text-[#000957] group-hover:text-[#F4CE14] transition" />,
              },
              {
                title: "Confidential & Secure",
                desc: "We treat your documents with strict confidentiality and care.",
                icon: <ShieldHalf size={56} className="mx-auto text-[#000957] group-hover:text-[#F4CE14] transition" />,
              },
              {
                title: "Global Industry Coverage",
                desc: "From law to medical to tech, we understand your sector.",
                icon: <Globe size={56} className="mx-auto text-[#000957] group-hover:text-[#F4CE14] transition" />,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group p-8 bg-white hover:bg-[#ece9e9] border border-[#d3d3d3] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-5">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-[#000957] group-hover:text-[#F4CE14] transition">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-base group-hover:font-medium transition">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <a
              href="/contact"
              className="inline-block bg-[#000957] text-[#F4CE14] px-6 py-3 rounded-xl text-md font-semibold hover:bg-[#024CAA] hover:text-[#FFF455] transition-all shadow-xl duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.section>

        {/* Final Divider */}
        <div className="w-full h-16 bg-gradient-to-r from-[#F4CE14] via-[#000957] to-[#F4CE14] opacity-20 mt-12" />
      </div>
    </div>
  );
}

'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldHalf, Globe, Zap, Languages } from "lucide-react";

export default function IndexPage() {
  return (
    <div className="space-y-24 w-full bg-[#f4f4f4]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full px-0 py-40 md:py-56 overflow-hidden min-h-[600px]"
      >
        <Image
          src="/translation.jpg"
          alt="Translation Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 text-center max-w-3xl mx-auto px-6">
          <h1
            className="text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-900"
            style={{
              WebkitTextStroke: "2px #ebbe08",
              WebkitTextFillColor: "#2a097e",
            }}
          >
            Accurate. Reliable. Global.
          </h1>

          <p
            className="mt-6 text-xl lg:text-2xl leading-relaxed font-medium"
            style={{
              WebkitTextStroke: "0.3px #fde9e9",
              WebkitTextFillColor: "#ebbe08",
            }}
          >
            Vangard Translation delivers expert multilingual communication services tailored to meet the needs of your global audience.
          </p>

          <div className="mt-12 flex justify-center gap-4">
            <a
              href="/quote"
              className="inline-block bg-[#0D47A1] text-[#e7d240] px-6 py-3 rounded-xl text-md font-semibold hover:bg-[#29186b] hover:text-[#ffd738] transition"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="w-full h-16 bg-gradient-to-r from-[#0D47A1] via-[#e7d240] to-[#0D47A1] opacity-20" />

      {/* Services Overview */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true }}
        className="w-full  py-12 bg-[#f4f4f4] rounded-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-5xl font-semibold text-center mb-24 text-[#0D47A1]">
          Our Core Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          {["Translation", "Interpreting", "Proofreading", "Transcription"].map(
            (title, i) => {
              const img = `/` + title.toLowerCase() + `_serv.jpg`;
              const desc = {
                Translation:
                  "Document and website translation in 100+ languages.",
                Interpreting: "Remote and in-person interpreting services.",
                Proofreading: "Ensure your content is accurate and clear.",
                Transcription:
                  "Audio/video transcription services with precision.",
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
                  <h3 className="text-2xl font-semibold mb-3 group-hover:font-bold text-[#0D47A1] transition-all">
                    {title}
                  </h3>
                  <p className="text-gray-700 text-base group-hover:font-medium transition-all px-4">
                    {desc}
                  </p>
                </motion.div>
              );
            }
          )}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/services"
            className="inline-block bg-[#0D47A1] text-[#e7d240] px-6 py-3 rounded-xl text-md font-semibold hover:bg-[#29186b] hover:text-[#ffd738] transition"
          >
            Discover All Services
          </a>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="w-full h-16 bg-gradient-to-r from-[#e7d240] via-[#0D47A1] to-[#e7d240] opacity-20" />

      {/* Why Choose Us */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true }}
        className="bg-[#f4f4f4] w-full px-6 py-12 rounded-xl"
      >
        <h2 className="text-4xl font-semibold text-center mb-16 text-[#0d47a1]">
          Why Choose Vangard?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto text-center ">
          {[
            {
              title: "Expert Linguists",
              desc:
                "Certified native translators with industry-specific expertise.",
              icon: <Languages size={56} className="mx-auto text-[#0D47A1] group-hover:text-[#e7d240] transition" />,
            },
            {
              title: "Fast Turnaround",
              desc: "We meet tight deadlines without compromising on quality.",
              icon: <Zap size={56} className="mx-auto text-[#0D47A1] group-hover:text-[#e7d240] transition" />,
            },
            {
              title: "Confidential & Secure",
              desc:
                "We treat your documents with strict confidentiality and care.",
              icon: <ShieldHalf size={56} className="mx-auto text-[#0D47A1] group-hover:text-[#e7d240] transition" />,
            },
            {
              title: "Global Industry Coverage",
              desc:
                "From law to medical to tech, we understand your sector.",
              icon: <Globe size={56} className="mx-auto text-[#0D47A1] group-hover:text-[#e7d240] transition" />,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group p-8  bg-white hover:bg-[#ece9e9] border border-[#d3d3d3] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-5 transition ">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2 text-[#0D47A1] group-hover:text-[#e7d240] transition">
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
            className="inline-block bg-[#0D47A1] text-[#e7d240] px-6 py-3 rounded-xl text-md font-semibold hover:bg-[#29186b] hover:text-[#ffd738] transition-all shadow-xl duration-300"
          >
            Contact Us
          </a>
        </div>
      </motion.section>

       {/* Divider */}
       <div className="w-full h-16 bg-gradient-to-r from-[#e7d240] via-[#0D47A1] to-[#e7d240] opacity-20" />

    </div>
  );
}
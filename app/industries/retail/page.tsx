'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function RetailIndustryPage() {
  const steps = [
    "Send us your retail documents or website content",
    "A project manager is assigned to your account",
    "Files are reviewed for format, branding, and context",
    "You receive a quote and turnaround estimate",
    "Translation is completed by retail-sector linguists",
    "Final quality check and proofreading",
    "Translated materials are delivered ready to publish",
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#f4f4f4] text-[#000957] flex flex-col lg:flex-row-reverse">
      {/* Desktop Fixed Image Window */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden lg:block w-1/2 relative pr-4"
      >
        <div className="sticky top-32 h-[500px] px-6 w-full sm:w-[85%] rounded-xl overflow-hidden shadow-lg border border-[#e7e7e7]">
          <Image
            src="/retail.jpg"
            alt="Retail Translation Visual"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Scrollable Content */}
      <div className="w-full lg:w-1/2 px-16 py-24 space-y-16 max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-extrabold mb-4 py-12">Retail Translation Services</h1>
          <p className="text-lg leading-relaxed">
            At <strong>Vangard Translations</strong>, we help brands and retail businesses localize their communications for global success. From packaging to catalogues and digital platforms, our retail translation services ensure your message resonates with consumers everywhere.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-2">Key Retail Translation Services</h2>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>Global Branding & Marketing Materials</li>
            <li>Product Packaging & Labelling</li>
            <li>Website & eCommerce Content</li>
            <li>Catalogues, Brochures & Manuals</li>
            <li>User Instructions & Store Signage</li>
            <li>Human Resources & Internal Documents</li>
          </ul>
        </motion.div>

        {/* Mobile Image */}
        <div className="lg:hidden w-full h-[220px] relative mb-4">
          <Image
            src="/retail.jpg"
            alt="Retail Translation Visual Mobile"
            fill
            className="object-cover object-center rounded-b-xl"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
          <div className="relative pl-6 border-l-4 border-[#F4CE14] space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-[#F4CE14] border-2 border-white shadow" />
                <p className="text-base lg:text-lg">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-10">
          <a
            href="/quote"
            className="inline-block bg-[#000957] text-[#F4CE14] px-6 py-3 rounded-xl font-semibold hover:bg-[#024CAA] hover:text-[#FFF455] transition"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}

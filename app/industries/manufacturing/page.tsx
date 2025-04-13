'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ManufacturingIndustryPage() {
  const steps = [
    "You send us your manufacturing/engineering documents",
    "A dedicated project manager is assigned",
    "Documents reviewed by technical translation experts",
    "You receive a tailored quote and timeline",
    "Documents translated by industry-specific linguists",
    "Proofreading and formatting review completed",
    "Final certified translation is delivered to you",
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#f4f4f4] text-[#000957] flex flex-col lg:flex-row-reverse">
      {/* Desktop Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden lg:block w-1/2 relative pr-4"
      >
        <div className="sticky top-32 h-[500px] px-6 w-full sm:w-[85%] rounded-xl overflow-hidden shadow-lg border border-[#e7e7e7]">
          <Image
            src="/engineer.jpg"
            alt="Manufacturing Translation Visual"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 px-16 lg:px-16 py-24 space-y-16 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-extrabold mb-4 py-12">Manufacturing & Engineering Translation Services</h1>
          <p className="text-lg leading-relaxed">
            At <strong>Vangard Translations</strong>, we help you expand across global markets by delivering highly accurate and technical manufacturing and engineering translations. From manuals to safety documentation, our specialized linguists understand the precision your industry demands.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-2">Key Document Types</h2>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>Service Manuals</li>
            <li>Machine Labels & Safety Decals</li>
            <li>Product Catalogs & Brochures</li>
            <li>Training Materials</li>
            <li>Engineering Specifications</li>
            <li>Technical Datasheets</li>
          </ul>
        </motion.div>

        {/* Mobile Image */}
        <div className="lg:hidden w-full h-[220px] relative mb-4">
          <Image
            src="/engineer.jpg"
            alt="Manufacturing Visual Mobile"
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
          <h2 className="text-2xl font-semibold mb-6">Custom Solutions for Your Industry</h2>
          <p className="text-base leading-relaxed mb-6">
            We provide not just translations, but localization tailored to your production environment. Whether it's for on-site instructions, regulatory compliance, or global marketing, Vangard’s linguists have the sector knowledge to deliver precision every time.
          </p>
          <p className="text-base leading-relaxed">
            From technical brochures to interpreting at industry events, our solutions scale with your international goals — across over 170 languages, with support from a network of over 11,000 vetted linguists.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProofreadingClient() {
  const steps = [
    "You upload or email your documents",
    "A project manager is assigned",
    "Files are reviewed by our expert linguist team",
    "Quote and timeline are provided",
    "Document assigned to industry-specific proofreader",
    "Proofreading and quality control completed",
    "Final, polished file is delivered",
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#f4f4f4] text-[#000957] flex flex-col lg:flex-row">
      
      {/* Desktop Fixed Image Window */}
      <div className="hidden lg:block w-1/2 relative pl-4">
        <div className="sticky top-32 h-[500px] px-6 w-full sm:w-[85%] rounded-xl overflow-hidden shadow-lg border border-[#e7e7e7]">
          <Image
            src="/proofreading.png"
            alt="Proofreading Visual"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="w-full lg:w-1/2 px-6 py-24 space-y-16 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-extrabold mb-4 py-12">Expert Proofreading Services</h1>
          <p className="text-lg leading-relaxed">
            At <strong>Vangard Translations</strong>, our proofreading services ensure your translated documents are polished, accurate, and ready for any audience. Our experienced proofreaders verify grammar, spelling, consistency, and message clarity, while maintaining the tone and intent of the original content.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-2">What Makes Our Proofreading Special</h2>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>Accurate grammar, spelling, and punctuation checks</li>
            <li>Mother-tongue linguists with sector-specific knowledge</li>
            <li>Thorough style and consistency review</li>
            <li>Confidentiality guaranteed through signed NDAs</li>
          </ul>
        </motion.div>

        {/* Mobile Image */}
        <div className="lg:hidden w-full h-[250px] relative">
          <Image
            src="/proofreading.png"
            alt="Proofreading Visual Mobile"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <a
            href="/quote"
            className="inline-block bg-[#000957] text-[#F4CE14] px-6 py-3 rounded-xl font-semibold hover:bg-[#024CAA] hover:text-[#FFF455] transition"
          >
            Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}

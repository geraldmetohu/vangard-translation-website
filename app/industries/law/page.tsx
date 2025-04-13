'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LegalIndustryPage() {
  const steps = [
    "You send us your legal documents",
    "We assign a legal-specialized project manager",
    "Documents are reviewed and confidentiality protocols applied",
    "You receive a quote and timeline",
    "Translation is done by legal language experts",
    "Proofreading and compliance checks performed",
    "Final certified translation delivered securely",
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
            src="/law.jpg"
            alt="Legal Translation Visual"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Scrollable Content */}
      <div className="w-full lg:w-1/2 px-16 md:px-16 py-24 space-y-16 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-extrabold mb-4 py-12">Legal Translation Services</h1>
          <p className="text-lg leading-relaxed">
            <strong>Vangard Translations</strong> is trusted by law firms, courts, government bodies and solicitors across the UK for highly accurate, confidential legal translation and interpreting services in over 200 languages.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            From criminal and commercial law to immigration, employment, and family law—our certified translators and legal linguists ensure your documents maintain their legal integrity across borders.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">Documents We Handle</h2>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>Witness Statements</li>
            <li>Police Interviews & Reports</li>
            <li>Solicitor Letters</li>
            <li>Forensic Reports</li>
            <li>Immigration Documents</li>
            <li>Case Summaries & General Correspondence</li>
            <li>Contracts & Legal Briefs</li>
          </ul>
        </motion.div>

        {/* Mobile Image */}
        <div className="lg:hidden w-full h-[220px] relative mb-4">
          <Image
            src="/law.jpg"
            alt="Legal Translation Mobile"
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
          <h2 className="text-2xl font-semibold mb-6">Why Legal Professionals Trust Us</h2>
          <p className="text-base leading-relaxed mb-6">
            Our translators are not only certified by authorities like NRPSI and CIOL but also possess deep domain expertise in legal contexts. Every legal document is reviewed with compliance, accuracy, and confidentiality in mind. We also support certified and sworn translations for court use and immigration purposes.
          </p>
          <p className="text-base leading-relaxed">
            Whether it's court interpreting, multilingual litigation documents, or police statement translations, Vangard ensures clarity and legal precision in every language.
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

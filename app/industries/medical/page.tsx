
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MedicalIndustryPage() {
  const steps = [
    "You send us your medical or healthcare documents",
    "A project manager is assigned with medical translation expertise",
    "Documents reviewed by healthcare linguists",
    "You receive a compliant quote and timeline",
    "Translation done by certified medical experts",
    "Proofreading, confidentiality check and formatting completed",
    "Final translation delivered with optional certification",
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
            src="/medical.png"
            alt="Medical Translation Visual"
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
          <h1 className="text-4xl font-extrabold mb-4 py-12">Medical Translation Services</h1>
          <p className="text-lg leading-relaxed">
            At <strong>Vangard Translations</strong>, we work with specialist medical translators and interpreters in over 200 languages. From patient-facing materials to clinical documentation, our work supports hospitals, pharmaceutical companies, and NHS trusts with accurate and confidential communication.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-2">Core Medical Content We Translate</h2>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>Scientific Research Documents</li>
            <li>Clinical Reports & Patient Records</li>
            <li>Patient Consent Forms</li>
            <li>Leaflets, FAQs & Informational Notices</li>
            <li>Pharmaceutical Documents</li>
            <li>Medical Correspondence & Letters</li>
          </ul>
        </motion.div>

        {/* Mobile Image */}
        <div className="lg:hidden w-full h-[220px] relative mb-4">
          <Image
            src="/medical.png"
            alt="Medical Visual Mobile"
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
          <h2 className="text-2xl font-semibold mb-6">NHS Translation Expertise</h2>
          <p className="text-base leading-relaxed mb-6">
            We support NHS organizations in translating forms, leaflets, patient communications, and subtitles for video content. With an easy-to-use digital platform and 24/7 interpreter access, we help the NHS improve accessibility and inclusion across the UK.
          </p>
          <p className="text-base leading-relaxed">
            Our interpreters follow strict confidentiality protocols and are available for on-site or remote video sessions. From registration forms to medical notes, we’ve got you covered.
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

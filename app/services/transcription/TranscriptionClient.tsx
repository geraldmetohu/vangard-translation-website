'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TranscriptionClient() {
  const steps = [
    "You upload or email your audio or video files",
    "A project manager is assigned to your request",
    "Files are reviewed and prepared by our transcription team",
    "You receive an estimate and timeline",
    "The content is transcribed by a specialist in your industry",
    "Proofreading and quality control are performed",
    "Final transcript is delivered with optional translation or certification",
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#f4f4f4] text-[#000957] flex flex-col lg:flex-row">
      {/* Desktop Fixed Image Window */}
      <div className="hidden lg:block w-1/2 relative pl-4">
        <div className="sticky top-32 h-[500px] px-6 w-full sm:w-[85%] rounded-xl overflow-hidden shadow-lg border border-[#e7e7e7]">
          <Image
            src="/transcription.png"
            alt="Transcription Visual"
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
          <h1 className="text-4xl font-extrabold mb-4 py-12">Professional Transcription Services</h1>
          <p className="text-lg leading-relaxed">
            <strong>Vangard Translations</strong> offers high-accuracy transcription services for audio and video materials in any language. We can transcribe from a source language and translate it into your chosen target language—efficiently and confidentially.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-2">Core Features</h2>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>Audio Transcription</li>
            <li>Video Transcription</li>
            <li>Political, Event & Meeting Transcription</li>
            <li>Conference Call Transcription</li>
            <li>Multilingual and industry-specific accuracy</li>
          </ul>
        </motion.div>

        {/* Mobile Image */}
        <div className="lg:hidden w-full h-[250px] relative">
          <Image
            src="/transcription.png"
            alt="Transcription Visual Mobile"
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
          <h2 className="text-2xl font-semibold mb-6">Why Vangard?</h2>
          <p className="text-base leading-relaxed mb-6">
            We're not just fast—we're precise. Whether you’re overwhelmed by volume or short on time, our transcription services provide a human touch that automated tools simply can’t match. We also guarantee complete confidentiality and industry-level expertise across all sectors including legal, financial, media, medical, and more.
          </p>
          <p className="text-base leading-relaxed">
            Every transcription is handled by professionals with subject-matter experience, ensuring top-tier results delivered promptly and affordably. Trust Vangard Translations to bring clarity to your content.
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

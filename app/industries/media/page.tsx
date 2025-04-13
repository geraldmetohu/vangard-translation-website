'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MediaIndustryPage() {
  const steps = [
    "You share your multimedia or content files",
    "We assign a dedicated project manager",
    "Files are reviewed for language and format",
    "You receive a quote and turnaround estimate",
    "Project assigned to a specialist in media translation",
    "Translation and localization applied (voice, subtitle, etc.)",
    "Final version is delivered with quality checks",
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
            src="/media.jpg"
            alt="Media Translation Visual"
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
          <h1 className="text-4xl font-extrabold mb-4 py-12">Media & Entertainment Translation</h1>
          <p className="text-lg leading-relaxed">
            <strong>Vangard Translations</strong> specializes in global communication for the entertainment and media industries. From film subtitles to website content, we ensure that your media speaks clearly and authentically across cultures.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-2">Our Media Capabilities</h2>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>Social Media & Influencer Campaigns</li>
            <li>Subtitling for Films and Documentaries</li>
            <li>Web-based Multimedia</li>
            <li>User-Generated & Streaming Content</li>
            <li>Advertising & Commercial Translation</li>
            <li>Podcast Transcriptions and Dubbing Scripts</li>
          </ul>
        </motion.div>

        {/* Mobile Image */}
        <div className="lg:hidden w-full h-[220px] relative mb-4">
          <Image
            src="/media.jpg"
            alt="Media Translation Visual"
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

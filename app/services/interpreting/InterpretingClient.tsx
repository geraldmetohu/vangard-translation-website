'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function InterpretingClient() {
  const steps = [
    "Client uploads or emails interpretation request details",
    "Dedicated project manager is assigned",
    "Requirements are reviewed and type of interpreting is selected",
    "Qualified interpreter with subject expertise is matched",
    "Interpreter is briefed and prepared for context and terminology",
    "Interpreting service is delivered remotely or on-site",
    "Follow-up and feedback process completed post-assignment",
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#f4f4f4] text-[#000957] flex flex-col lg:flex-row">
      {/* Desktop Fixed Image Window */}
      <div className="hidden lg:block w-1/2 relative pl-4">
        <div className="sticky top-32 h-[500px] px-6 w-full sm:w-[85%] rounded-xl overflow-hidden shadow-lg border border-[#e7e7e7]">
          <Image
            src="/interpreting.jpg"
            alt="Interpretation Visual"
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
          <h1 className="text-4xl font-extrabold mb-4 py-12">Professional Interpreting Services</h1>
          <p className="text-lg leading-relaxed">
            At <strong>Vangard Translations</strong>, we provide a wide range of professional interpreting services,
            tailored to your exact requirements. Whether it’s for medical, legal, business, or public sector use—
            our certified interpreters are ready to assist in person, by phone, or through remote video solutions.
          </p>
        </motion.div>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        >
        <h2 className="text-2xl font-semibold mb-6">Types of Interpreting We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
            "Simultaneous Interpreting",
            "Consecutive Interpreting",
            "Remote Video Interpreting",
            "Phone Interpreting",
            "Conference Interpreting",
            "Court & Legal Interpreting",
            "NHS Medical Interpreting",
            "Police Interpreting",
            ].map((type, i) => (
            <div key={i} className="p-4 bg-white rounded-xl shadow hover:shadow-md border border-gray-200">
                <p className="font-medium">{type}</p>
            </div>
            ))}
        </div>
        </motion.div>


        {/* Mobile Image */}
        <div className="lg:hidden w-full h-[250px] relative">
          <Image
            src="/interpreting.jpg"
            alt="Interpretation Visual Mobile"
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

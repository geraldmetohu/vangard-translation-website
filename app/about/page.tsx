import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="w-full text-[#000957] bg-[#f9f9f9]">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] lg:h-[80vh] flex items-center justify-center text-center bg-[#000957] text-[#F4CE14] overflow-hidden pt-24">
        <Image
          src="/about-banner.jpg"
          alt="About Us Banner"
          fill
          className="absolute inset-0 object-cover opacity-60"
        />
        <div className="relative z-10 px-4">
          <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight">
            About Us
          </h1>
          <p className="mt-4 text-lg lg:text-xl font-medium text-[#FFF455]">
            Language Interpretation Services for Every Industry
          </p>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Intro */}
        <section className="text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#000957]">
            Vangard Translations — Our Story & Mission
          </h2>
          <p className="mt-6 max-w-3xl mx-auto leading-loose italic text-justify">
            “At <span className="font-bold">Vangard Translations</span>, we collaborate with a carefully selected network of expert linguists across the globe. As our team grows, our commitment to professional excellence and client satisfaction never wavers. We pride ourselves on delivering precise, customized language solutions that reflect each client’s unique vision. Every word we translate is a reflection of our values—accuracy, clarity, and cultural fluency. Our mission is to empower global communication through language that connects, resonates, and inspires.”
          </p>
          <p className="mt-4 max-w-3xl mx-auto leading-relaxed">
            Every translator on our team brings deep industry insight, ensuring that your message is not only understood—but also respected and trusted by your audience. Whether you need legal documents, medical records, or technical manuals translated, we have certified professionals ready to help.
          </p>
          <p className="mt-4 max-w-3xl mx-auto leading-relaxed">
            Reach out today to discover how our tailored services can elevate your international communications.
          </p>
        </section>

        {/* Core Values */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Accuracy & Precision",
              desc: "We deliver reliable translations backed by technical expertise and subject knowledge.",
            },
            {
              title: "Client Commitment",
              desc: "Each project receives our full attention—from first word to final delivery.",
            },
            {
              title: "Global Expertise",
              desc: "We match clients with translators who understand their industry, language, and culture.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white shadow-md rounded-xl text-center border border-[#F4CE14]"
            >
              <h3 className="text-xl font-bold text-[#000957]">{item.title}</h3>
              <p className="mt-3 text-gray-700">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Quality Commitment */}
        <section className="mt-20 text-center">
          <h2 className="text-2xl lg:text-4xl font-semibold text-[#000957]">
            Our Quality Commitment
          </h2>
          <p className="mt-6 max-w-3xl mx-auto leading-relaxed text-gray-800">
            We are committed to providing a consistent standard of excellence in every engagement. With transparent processes, experienced project managers, and careful attention to detail, we ensure that every message we deliver for you is done so with clarity, professionalism, and impact.
          </p>
        </section>

        {/* Services Snapshot */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Certified Translations",
              desc: "Officially notarised documents for legal, academic, and government use—fast, secure, and compliant.",
            },
            {
              title: "Multilingual Transcriptions",
              desc: "Accurate transcripts in over 100 languages—perfect for media, research, and corporate use.",
            },
            {
              title: "Globalisation Consulting",
              desc: "Ready to go global? Let us support your international expansion with localized strategies.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white shadow-md rounded-xl border border-[#d3d3d3]"
            >
              <h3 className="text-xl font-bold text-[#000957]">{item.title}</h3>
              <p className="mt-3 text-gray-700">{item.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

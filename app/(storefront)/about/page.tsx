import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-6 py-12 text-[#0D47A1]">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] lg:h-[80vh] flex items-center justify-center text-center bg-[#0c1f3b] text-[#e7d240] rounded-xl overflow-hidden">
        <Image
          src="/about-banner.jpg"
          alt="About Us Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-60"
        />
        <div className="relative z-10">
          <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight">About Us</h1>
          <p className="py-25 mt-4 text-lg lg:text-xl font-medium">Language Interpretation Services for Every Industry</p>
        </div>
      </div>

      {/* Company Introduction */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl lg:text-4xl font-semibold text-[#0D47A1]">Vangard Translations — Our Story & Mission</h2>
        <p className="mt-6 text-[#0D47A1] max-w-3xl mx-auto leading-loose italic text-justify">
            “At <span className="font-bold">Vangard Translations</span>, we collaborate with a carefully selected network of expert linguists across the globe. As our team grows, our commitment to professional excellence and client satisfaction never wavers. We pride ourselves on delivering precise, customized language solutions that reflect each client’s unique vision. Every word we translate is a reflection of our values—accuracy, clarity, and cultural fluency. Our mission is to empower global communication through language that connects, resonates, and inspires.”
        </p>

        <p className="mt-4 text-[#0D47A1] max-w-3xl mx-auto leading-relaxed">
          Every translator on our team brings deep industry insight, ensuring that your message is not only understood—but also respected and trusted by your audience. Whether you need legal documents, medical records, or technical manuals translated, we have certified professionals ready to help.
        </p>
        <p className="mt-4 text-[#0D47A1] max-w-3xl mx-auto leading-relaxed">
          Reach out today to discover how our tailored services can elevate your international communications.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-md rounded-xl text-center border border-[#e7d240]">
          <h3 className="text-xl font-bold text-[#0D47A1]">Accuracy & Precision</h3>
          <p className="text-[#0D47A1] mt-3">We deliver reliable translations backed by technical expertise and subject knowledge.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl text-center border border-[#e7d240]">
          <h3 className="text-xl font-bold text-[#0D47A1]">Client Commitment</h3>
          <p className="text-[#0D47A1] mt-3">Each project receives our full attention—from first word to final delivery.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl text-center border border-[#e7d240]">
          <h3 className="text-xl font-bold text-[#0D47A1]">Global Expertise</h3>
          <p className="text-[#0D47A1] mt-3">We match clients with translators who understand their industry, language, and culture.</p>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl lg:text-4xl font-semibold text-[#0D47A1]">Our Quality Commitment</h2>
        <p className="mt-6 max-w-3xl mx-auto text-[#0D47A1] leading-relaxed">
          We are committed to providing a consistent standard of excellence in every engagement. With transparent processes, experienced project managers, and careful attention to detail, we ensure that every message we deliver for you is done so with clarity, professionalism, and impact.
        </p>
      </section>

      {/* Services Snapshot */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white shadow-md rounded-xl border border-[#d3d3d3]">
          <h3 className="text-xl font-bold text-[#0D47A1]">Certified Translations</h3>
          <p className="text-[#0D47A1] mt-3">Officially notarised documents for legal, academic, and government use—fast, secure, and compliant.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl border border-[#d3d3d3]">
          <h3 className="text-xl font-bold text-[#0D47A1]">Multilingual Transcriptions</h3>
          <p className="text-[#0D47A1] mt-3">Accurate transcripts in over 100 languages—perfect for media, research, and corporate use.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl border border-[#d3d3d3]">
          <h3 className="text-xl font-bold text-[#0D47A1]">Globalisation Consulting</h3>
          <p className="text-[#0D47A1] mt-3">Ready to go global? Let us support your international expansion with localized strategies.</p>
        </div>
      </section>

      {/* Team Section - Temporarily Hidden */}
      {/*
      <section className="mt-20 text-center">
        <h2 className="text-2xl lg:text-4xl font-semibold text-[#e7d240]">Meet Our Team</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-xl text-center border border-[#d3d3d3]">
            <Image src="/team1.jpg" alt="Team Member" width={150} height={150} className="rounded-full mx-auto" />
            <h3 className="mt-4 text-lg font-semibold text-[#0D47A1]">Sophia Evans</h3>
            <p className="text-[#0D47A1]">Founder & Head of Strategy</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl text-center border border-[#d3d3d3]">
            <Image src="/team2.jpg" alt="Team Member" width={150} height={150} className="rounded-full mx-auto" />
            <h3 className="mt-4 text-lg font-semibold text-[#0D47A1]">Leo Martinez</h3>
            <p className="text-[#0D47A1]">Senior Translation Consultant</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl text-center border border-[#d3d3d3]">
            <Image src="/team3.jpg" alt="Team Member" width={150} height={150} className="rounded-full mx-auto" />
            <h3 className="mt-4 text-lg font-semibold text-[#0D47A1]">Amelia Clark</h3>
            <p className="text-[#0D47A1]">Project Manager</p>
          </div>
        </div>
      </section>
      */}
    </div>
  );
}
"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ContactMap = dynamic(() => import("@/components/ContactMap"), { ssr: false });

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
  
    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      if (data.success) {
        setFormData({ name: "", email: "", phone: "", message: "" }); // ✅ Clear fields
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-24 px-6 text-[#000957] mt-24"
    >
      <h1 className="text-4xl font-bold text-center mb-6 text-[#F4CE14]">Contact Us</h1>
      <p className="text-center max-w-2xl mx-auto mb-12">
        Have questions, a project to discuss, or just want to say hello? Fill out the form and our team will be in touch shortly.
      </p>

      <motion.form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 bg-white p-8 rounded-xl shadow-md border border-[#F4CE14]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#000957]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#000957]"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            type="text"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#000957]"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#000957]"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#000957] text-[#F4CE14] py-2 rounded-lg font-semibold hover:bg-[#024CAA] hover:text-[#FFF455] transition"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-green-600">Message sent successfully! ✅</p>
        )}
        {status === "error" && (
          <p className="text-red-600">Something went wrong. Please try again.</p>
        )}
      </motion.form>

      <motion.div
        className="mt-16 grid gap-6 text-center md:grid-cols-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center">
          <Mail className="mb-2 text-[#000957]" />
          <p className="font-medium">info@vangardtranslations.com</p>
        </div>
        <div className="flex flex-col items-center">
          <Phone className="mb-2 text-[#000957]" />
          <p className="font-medium">+44 7777 277 507</p>
        </div>
        <div className="flex flex-col items-center">
          <MapPin className="mb-2 text-[#000957]" />
          <p className="font-medium">Oakleigh Rd S, North London Business Park, N11 1GN</p>
        </div>
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ContactMap />
      </motion.div>

      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-[#000957] mb-4">See Our Socials</h2>
        <div className="flex justify-center gap-6">
          {[
            { icon: Facebook, href: "https://facebook.com" },
            { icon: Twitter, href: "https://twitter.com" },
            { icon: Instagram, href: "https://instagram.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4CE14] transition text-[#000957]"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

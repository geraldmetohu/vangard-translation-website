import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import React from "react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-16">
            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Company Info */}
                <div>
                    <h2 className="text-xl font-semibold">Vangard Translation</h2>
                    <p className="mt-2 text-gray-400">
                        Professional translation and localization services across industries and languages.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                        <li><a href="/services/translating" className="text-gray-400 hover:text-white transition">Services</a></li>
                        <li><a href="/industries" className="text-gray-400 hover:text-white transition">Industries</a></li>
                        <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
                        <li><a href="/quote" className="text-gray-400 hover:text-white transition">Request a Quote</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <p className="mt-2 text-gray-400">Email: support@vangardtranslation.com</p>
                    <p className="text-gray-400">Phone: +44 7400 123 456</p>
                    <p className="text-gray-400">Location: Leeds, UK</p>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex justify-center space-x-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <Facebook size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <Twitter size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <Linkedin size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <Instagram size={24} />
                </a>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Vangard Translation. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

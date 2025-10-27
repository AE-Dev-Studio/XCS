"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will call you back soon.");
    setFormData({ name: "", phone: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer className="bg-[#111111] text-white">
      {/* Top Section with Logo and Phone Numbers */}
      <div className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <Image
              src="/assets/logoWithoutbg.png"
              alt="Logo"
              width={130}
              height={130}
            />

            {/* Phone Numbers */}
            <div className="flex flex-wrap gap-8 text-lg">
              <a
                href="tel:+44 7803 553793"
                className="flex items-center gap-2 hover:text-[#a89447] transition"
              >
                <Phone className="w-5 h-5 text-[#a89447]" />
                <span>+44 7803 553793</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Our Fleet */}
          <div>
            <h3 className="text-[13px] font-semibold mb-6">Our Fleet</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Range Rover Vogue
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Mercedes V-Class
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Mercedes E-Class
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Mercedes S-Class
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Rolls Royce Ghost
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Rolls Royce Phantom
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[13px] font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Airport Chauffeur Manchester
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Corporate Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Event Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Close Protection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Wedding Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Luxury Car Rent
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-[13px] font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Our Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Fleet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a89447] transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-[13px] font-semibold mb-6">Contact Details</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a
                  href="tel:+44 7803 553793"
                  className="flex items-center gap-2 hover:text-[#a89447] transition"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+44 7803 553793</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:Riz.elite@yahoo.com"
                  className="flex items-center gap-2 hover:text-[#a89447] transition"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="break-all">Riz.elite@yahoo.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-1" />
                  <span>CCS Chauffeur Services, United Kingdom</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#242424] p-6 rounded-lg lg:col-span-2 xl:col-span-2">
            <h3 className="text-[13px] font-semibold mb-4">
              Request a Callback
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              Provide your name and phone number to get a call back from us.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* inputs – stack on mobile, row on laptops (≥1024px) */}
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  required
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded
                   focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone No.*"
                  required
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded
                   focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#a89447] cursor-pointer text-white font-semibold
                 py-3 rounded-full transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+447803553793"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300 flex items-center gap-2 z-50"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="font-semibold">WhatsApp</span>
      </a>

      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-[13px] text-gray-400">
              © 2025 | CCS Chauffeur | All Right Reserved
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 bg-black rounded-full transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-gray-400 bg-black rounded-2xl transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <div className="flex gap-6 text-[13px]">
              <a
                href="#"
                className="text-gray-400 hover:text-[#a89447] transition"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#a89447] transition"
              >
                Term & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { NAVIGATION_LINKS, CLINIC_CONTACT } from "@/data/website-data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        isScrolled ? "shadow-sm border-b border-[#E5EAF2]" : "border-b border-[#F0F4FA]"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] lg:h-[80px]">
          {/* Left: SmileCare Logo uploaded in public/smilecarelogo.png */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-11 w-44 sm:h-12 sm:w-48">
              <Image
                src="/smilecarelogo.png"
                alt="SmileCare Medical Center"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-[13px] font-medium text-[#465368]">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[#0861A8] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0861A8] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right: Phone & Book CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href={`tel:${CLINIC_CONTACT.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-[13px] font-semibold text-[#111C35] hover:text-[#0861A8] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[#EFF4FF] flex items-center justify-center text-[#0861A8]">
                <Phone className="w-4 h-4" />
              </div>
              <span>{CLINIC_CONTACT.phone}</span>
            </a>

            <a
              href="#appointment"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[13px] font-semibold text-white bg-[#FF751C] hover:bg-[#E8640E] shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#appointment"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#FF751C]"
            >
              Book
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-[#111C35] hover:bg-[#EFF4FF]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5EAF2] bg-white px-5 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium text-[#111C35] hover:text-[#0861A8] py-2 border-b border-gray-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </Link>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${CLINIC_CONTACT.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#EFF4FF] text-[#0861A8] font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{CLINIC_CONTACT.phone}</span>
            </a>
            <a
              href="#appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center py-3 rounded-xl bg-[#FF751C] text-white font-semibold text-sm text-center shadow"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

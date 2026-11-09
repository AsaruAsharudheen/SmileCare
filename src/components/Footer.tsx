"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUp } from "lucide-react";
import { CLINIC_CONTACT } from "@/data/website-data";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-white border-t border-[#E5EAF2] pt-14 pb-8 text-[#596579]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#EDF2F8]">
          {/* Column 1: Clinic Brand & Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative h-12 w-52">
              <Image
                src="/smilecare-footer-blue.png"
                alt="SmileCare Medical Center"
                fill
                priority
                className="object-contain object-left"
              />
            </div>

            <p className="text-[13px] leading-relaxed text-[#596579]">
              Specialist dental clinic located on the Al Buhaira Corniche in Sharjah, delivering cutting-edge dental restorations, implantology, and cosmetic transformations.
            </p>

            <div className="pt-2 text-[12px] space-y-2">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0861A8] shrink-0 mt-0.5" />
                <span>{CLINIC_CONTACT.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0861A8] shrink-0" />
                <span>{CLINIC_CONTACT.phone}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0861A8] shrink-0" />
                <span>{CLINIC_CONTACT.email}</span>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[14px] font-bold text-[#111C35] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              {["About Smilecare", "Our Specialists", "Patient Education", "Smile Gallery", "Book Appointment", "Emergency Dental"].map(
                (item) => (
                  <li key={item}>
                    <a href="#procedures" className="hover:text-[#0861A8] transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Dental Procedures (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[14px] font-bold text-[#111C35] uppercase tracking-wider mb-4">
              Dental Procedures
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              {[
                "Cosmetic Veneers & Makeovers",
                "Dental Implants & Zirconia",
                "Root Canal Treatment",
                "Damon Orthodontics & Clear Aligners",
                "Zoom Laser Teeth Whitening",
                "Pediatric & Family Dentistry",
              ].map((item) => (
                <li key={item}>
                  <a href="#procedures" className="hover:text-[#0861A8] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Hours & Location (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[14px] font-bold text-[#111C35] uppercase tracking-wider mb-4">
              Visiting Hours
            </h4>
            <div className="space-y-2 text-[13px] mb-4">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0861A8]" />
                <span className="font-semibold text-[#111C35]">Saturday – Thursday:</span>
              </p>
              <p className="text-[12px] pl-6 text-[#596579]">09:00 AM – 09:00 PM</p>
              <p className="flex items-center gap-2 pt-1">
                <span className="w-2 h-2 rounded-full bg-red-400 ml-1 mr-1" />
                <span className="font-semibold text-[#111C35]">Friday:</span>
                <span className="text-red-500 text-[12px]">Emergency On Call Only</span>
              </p>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl border border-[#D5E1F0] hover:border-[#0861A8] bg-[#EFF4FF] text-[#0861A8] text-xs font-bold transition-all"
            >
              View Google Maps Location
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#7A889B] gap-4">
          <p>© 2026 Smilecare Medical Center LLC. All Rights Reserved. MOH Approval #2026/D7881.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#0861A8]">Privacy Policy</a>
            <a href="#" className="hover:text-[#0861A8]">Terms of Service</a>
            <a href="#" className="hover:text-[#0861A8]">Patient Rights</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${CLINIC_CONTACT.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Smilecare,%20I%20would%20like%20to%20inquire%20about%20an%20appointment`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageSquare className="w-7 h-7 fill-white text-[#25D366]" />
      </a>

      {/* Back to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-7 z-40 w-10 h-10 rounded-full bg-white border border-[#D6E0EE] text-[#111C35] hover:text-[#0861A8] hover:shadow-md flex items-center justify-center shadow transition-all duration-200"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
}

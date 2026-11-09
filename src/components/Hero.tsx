"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-4 pb-4 sm:pt-6 sm:pb-6">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner container matching reference design */}
        <div className="relative rounded-2xl md:rounded-[24px] overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex items-center shadow-lg">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="Smilecare Modern Dental Clinic Sharjah"
              fill
              priority
              className="object-cover object-[center_right] md:object-center"
              sizes="(max-width: 1360px) 100vw, 1360px"
            />
            {/* Left-side dark gradient overlay for crystal clear contrast like the screenshot */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/90 via-[#0E1D38]/75 to-transparent md:w-[65%] w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/70 via-transparent to-transparent md:hidden" />
          </div>

          {/* Left-side Hero Content */}
          <div className="relative z-10 max-w-[620px] p-6 sm:p-10 lg:p-14 text-white">
            {/* Clean Pill Tag without heavy border */}
     

            {/* Main Hero Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.12] text-white mb-4">
              Healthy, beautiful <br className="hidden sm:inline" />
              smiles for everyone
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#D2DEED] font-normal mb-8 max-w-[530px]">
              Comprehensive dental implants, cosmetic transformations, and advanced restorative dentistry tailored with personalized care in the heart of Al Majaz, Sharjah.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[13px] sm:text-sm font-semibold text-white bg-[#FF751C] hover:bg-[#E8640E] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] gap-2"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#procedures"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[13px] sm:text-sm font-semibold text-[#111C35] bg-white hover:bg-[#F3F6FA] shadow-sm transition-all duration-200"
              >
                All Categories
              </a>
            </div>

            {/* Mini Trust Pill */}
            <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-4 text-xs text-[#CBD8E9]">
              <div className="flex items-center gap-1 text-[#FFB703]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[12px] font-medium">Rated 4.9/5 by 1,800+ patients in UAE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

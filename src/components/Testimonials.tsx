"use client";

import React from "react";
import Image from "next/image";
import { Star, ShieldCheck, Heart, ArrowRight } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-[#EFF4FF]/60">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Patient Testimonial Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl md:rounded-[24px] p-6 sm:p-10 border border-[#E3ECF7] shadow-sm flex flex-col justify-between">
            <div>
              {/* Rating header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-[#111C35]">4.9</span>
                  <div className="flex items-center gap-1 text-[#FF751C]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#EBF7EE] text-[#16A36A] text-[11px] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Google Patient</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#23314B] font-medium italic mb-6">
                “Dr. Riyaz and the Smilecare clinical team transformed not only my dental aesthetics, but completely removed my dental anxiety. The Damon aligners and ceramic veneer artistry exceeded every expectation I had. Painless, meticulous, and world-class care right here in Sharjah.”
              </p>
            </div>

            {/* Patient Footer */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#F0F4FA]">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0861A8]">
                <Image
                  src="/images/avatar-sara.jpg"
                  alt="Sara Al Mansoori - Smilecare Patient"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[#111C35]">Sara Al Mansoori</h4>
                <p className="text-[12px] text-[#596579]">Veneer & Cosmetic Alignment Patient</p>
              </div>
            </div>
          </div>

          {/* Right: Community Wellness Promo Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0861A8] to-[#0A4B82] rounded-2xl md:rounded-[24px] p-6 sm:p-10 text-white flex flex-col justify-between shadow-md relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#FF751C]/15 blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase mb-5 text-[#FF751C]">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span className="text-blue-100">Community Health Initiative</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug mb-3">
                Smile Day for Kids &amp; Community Wellness
              </h3>

              <p className="text-[13px] sm:text-[14px] text-blue-100 leading-relaxed font-normal mb-6">
                Special dental screenings, free oral health education, and preventative community dental programs across Sharjah schools and family centers.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[13px] font-semibold text-[#0861A8] bg-white hover:bg-gray-100 shadow transition-all gap-2"
              >
                <span>Read Our Community Impact</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

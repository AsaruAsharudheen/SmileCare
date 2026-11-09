"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { TREATMENTS } from "@/data/website-data";

export default function Treatments() {
  return (
    <section id="procedures" className="py-12 sm:py-16 bg-white border-y border-[#EDF2F9]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, description and buttons */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0861A8] uppercase tracking-wider mb-2.5">
              <span>OUR PROCEDURES</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#111C35] tracking-tight leading-[1.18] mb-4">
              Personalized <span className="text-[#0861A8]">Dental Treatments</span> Crafted for You.
            </h2>

            <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#596579] font-normal mb-8 max-w-[480px]">
              Through cutting-edge clinical precision and gentle aesthetic artistry, we design custom care plans tailored to restore and protect your smile for a lifetime.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[13px] font-semibold text-white bg-[#FF751C] hover:bg-[#E8640E] shadow-sm hover:shadow-md transition-all duration-200 gap-2"
              >
                <span>Explore All Procedures</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#technology"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-[13px] font-semibold text-[#111C35] bg-[#F1F5FA] hover:bg-[#E5ECF6] transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column: 3 Vertical Treatment Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {TREATMENTS.map((treatment) => (
              <div
                key={treatment.id}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4.2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-5 bg-[#0B1528] cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1324] via-[#0A1324]/60 to-transparent" />

                {/* Content */}
                <div className="relative z-10 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#FF9E54] tracking-wider uppercase">
                      {treatment.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#FF751C] flex items-center justify-center text-white transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-[17px] font-bold text-white group-hover:text-[#9EC5FE] transition-colors leading-snug">
                    {treatment.title}
                  </h3>

                  <p className="text-[11px] text-gray-300 line-clamp-2 leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

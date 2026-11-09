"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { WHY_CHOOSE_ITEMS } from "@/data/website-data";

export default function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-20 bg-[#EFF4FF]/70">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-bold text-[#0861A8] uppercase tracking-wider">
            THE SMILECARE STANDARD
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#111C35] tracking-tight mt-1 mb-3">
            Why Choose Smilecare
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#596579]">
            Meticulous clinical standards merged with boutique-level hospitality.
          </p>
        </div>

        {/* 3 Equal Width Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E2EAF5] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image with Tag */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-[#111C35]/75 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md">
                  {item.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[17px] font-bold text-[#111C35] mb-2 leading-snug group-hover:text-[#0861A8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#596579] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer link + round blue arrow */}
                <div className="pt-5 mt-4 border-t border-[#F0F4FA] flex items-center justify-between">
                  <span className="text-[12px] font-bold text-[#0861A8] group-hover:text-[#111C35] transition-colors">
                    Learn about protocol
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#0861A8] text-white flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

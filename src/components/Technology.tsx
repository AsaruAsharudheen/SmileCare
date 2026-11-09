"use client";

import React from "react";
import { Scan, Radio, Sparkles, Sun, Cpu, Smile } from "lucide-react";
import { TECHNOLOGY_ITEMS } from "@/data/website-data";

export default function Technology() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Scan":
        return <Scan className="w-5 h-5 text-[#0861A8]" />;
      case "Radio":
        return <Radio className="w-5 h-5 text-[#0861A8]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#0861A8]" />;
      case "Sun":
        return <Sun className="w-5 h-5 text-[#0861A8]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[#0861A8]" />;
      case "Smile":
        return <Smile className="w-5 h-5 text-[#0861A8]" />;
      default:
        return <Scan className="w-5 h-5 text-[#0861A8]" />;
    }
  };

  return (
    <section id="technology" className="py-14 sm:py-20 bg-[#EFF4FF]/70">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-bold text-[#0861A8] uppercase tracking-wider">
            PRECISION DIAGNOSTICS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#111C35] tracking-tight mt-1 mb-3">
            Advanced Dental Technology
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#596579]">
            Minimized discomfort, painless diagnostics, and accuracy results for modern patient care.
          </p>
        </div>

        {/* 3 columns x 2 rows grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNOLOGY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-[#E3ECF7] shadow-sm hover:shadow-md hover:border-[#BFD5F2] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EFF4FF] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {getIcon(item.icon)}
              </div>

              <h3 className="text-[17px] font-bold text-[#111C35] mb-2 group-hover:text-[#0861A8] transition-colors">
                {item.title}
              </h3>

              <p className="text-[13px] text-[#596579] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Check, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/website-data";

export default function SmileGallery() {
  const [activeTab, setActiveTab] = useState<"all" | "veneers" | "before-after" | "restorative">("veneers");

  const filteredItems = activeTab === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const currentItem = filteredItems[0] || GALLERY_ITEMS[0];

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
          <div>
            <span className="text-[11px] font-bold text-[#0861A8] uppercase tracking-wider">
              REAL SMILES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#111C35] tracking-tight mt-1 mb-2">
              Smile Gallery
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#596579]">
              Real patients, transformative results completed at Smilecare Sharjah.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mt-4 md:mt-0 p-1 bg-[#EFF4FF] rounded-full self-start md:self-auto border border-[#E0ECFC]">
            {[
              { id: "veneers", label: "Cosmetic Veneers" },
              { id: "before-after", label: "Before & After" },
              { id: "restorative", label: "Restorative Care" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#0861A8] text-white shadow-sm"
                    : "text-[#596579] hover:text-[#111C35]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Gallery Showcase Card */}
        <div className="bg-[#F8FAFD] rounded-[24px] border border-[#E5EAF2] p-5 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Before and After Image Comparison */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Before Card */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/5 border border-gray-200">
                <Image
                  src={currentItem.imageBefore}
                  alt={`${currentItem.title} - Before`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute top-3 left-3 bg-[#111C35]/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider">
                  BEFORE TREATMENT
                </div>
              </div>

              {/* After Card */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/5 border border-gray-200">
                <Image
                  src={currentItem.imageAfter}
                  alt={`${currentItem.title} - After`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute top-3 left-3 bg-[#16A36A]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  AFTER SMILE DESIGN
                </div>
              </div>
            </div>

            {/* Case Details */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-5">
              <div>
                <span className="text-[10px] font-bold text-[#0861A8] uppercase tracking-wider bg-[#EFF4FF] px-2.5 py-1 rounded-md border border-[#D8E6FC]">
                  {currentItem.treatment}
                </span>

                <h3 className="text-xl font-bold text-[#111C35] mt-3 mb-2 leading-snug">
                  {currentItem.title}
                </h3>

                <p className="text-[13px] text-[#596579] leading-relaxed mb-4">
                  {currentItem.description}
                </p>

                <div className="space-y-2 border-t border-b border-[#E7EDF5] py-3 text-[12px]">
                  <div className="flex justify-between text-[#596579]">
                    <span>Case Lead:</span>
                    <span className="font-semibold text-[#111C35]">{currentItem.dentist}</span>
                  </div>
                  <div className="flex justify-between text-[#596579]">
                    <span>Treatment Timeline:</span>
                    <span className="font-semibold text-[#111C35]">{currentItem.duration}</span>
                  </div>
                </div>
              </div>

              <a
                href="#appointment"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-[13px] font-semibold text-white bg-[#0861A8] hover:bg-[#075390] shadow-sm transition-all gap-2"
              >
                <span>Book Smile Design Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

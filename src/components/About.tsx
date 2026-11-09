"use client";

import React from "react";
import Image from "next/image";
import { CLINIC_STATS } from "@/data/website-data";
import { Award, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small uppercase label */}
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0861A8] uppercase tracking-wider mb-2.5">
              <span>EXCELLENCE IN CARE</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#111C35] tracking-tight leading-[1.18] mb-4">
              Your Trusted Dental Care Advisors
            </h2>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#596579] font-normal mb-8">
              Providing exceptional, restorative, aesthetic, and family dentistry in Sharjah with over 17 years of clinical excellence, cutting-edge technology, and compassionate patient devotion.
            </p>

            {/* 4 Statistic Cards (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
              {CLINIC_STATS.map((stat, idx) => {
                const isHighlight = idx === 1; // 98% has navy background in screenshot
                return (
                  <div
                    key={stat.label}
                    className={`rounded-2xl p-4 sm:p-5 transition-all ${
                      isHighlight
                        ? "bg-[#0861A8] text-white shadow-md shadow-[#0861A8]/20"
                        : "bg-[#EFF4FF] border border-[#E0ECFC]"
                    }`}
                  >
                    <div
                      className={`text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight ${
                        isHighlight ? "text-white" : "text-[#111C35]"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`text-[12px] sm:text-[13px] font-medium mt-1 leading-snug ${
                        isHighlight ? "text-blue-100" : "text-[#596579]"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Photo Collage (Balanced & Compact Height matching left stats column) */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-3.5 sm:gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-sm h-[180px] sm:h-[200px] lg:h-[295px] w-full border border-gray-100">
              <Image
                src="/images/about-clinic.jpg"
                alt="SmileCare modern treatment operatory"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-3 left-3 bg-[#111C35]/80 backdrop-blur-sm text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#16A36A]" />
                <span>Sterile Operatory Suite</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-sm h-[180px] sm:h-[200px] lg:h-[295px] w-full border border-gray-100">
              <Image
                src="/images/about-family.jpg"
                alt="Dr. Riyaz with satisfied patients"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-3 left-3 bg-[#111C35]/80 backdrop-blur-sm text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#FFB703]" />
                <span>17+ Years Devoted Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

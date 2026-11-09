"use client";

import React from "react";
import Image from "next/image";
import { Award, GraduationCap, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export default function DoctorProfile() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white to-[#F6F9FE] rounded-[24px] border border-[#E3ECF7] p-6 sm:p-10 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left: Doctor Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-[3/3.6] w-full max-w-[420px]">
                <Image
                  src="/doctor-image.webp"
                  alt="Dr. Riyaz Jamaluddin - Specialist Restorative Dentist"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#111C35]/85 backdrop-blur-md rounded-xl p-3 text-white flex items-center justify-between">
                  <div>
                    <p className="text-[12px] font-bold">MOH Approved Specialist</p>
                    <p className="text-[10px] text-gray-300">License: UAE MOH #54921</p>
                  </div>
                  <div className="bg-[#16A36A] text-white p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Detailed Credentials and Info */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0861A8] uppercase tracking-wider mb-2">
                <span>CLINICAL LEADERSHIP</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#111C35] tracking-tight leading-tight">
                Dr. Riyaz Jamaluddin
              </h2>

              <p className="text-[14px] font-semibold text-[#0861A8] mt-1 mb-4 flex items-center gap-2">
                <span>Specialist Restorative Dentist</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                <span className="text-[#596579] font-medium">MOH Licensed</span>
              </p>

              <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#596579] mb-6">
                Dr. Riyaz Jamaluddin holds an MSc in Restorative Dentistry from the prestigious University of Helsinki. Bringing over 17 years of clinical excellence in cosmetic and restorative dentistry, orthodontic transformations, and full-mouth implant rehabilitation to Al Majaz, Sharjah.
              </p>

              {/* Badges / Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#EFF4FF] border border-[#D8E6FC]">
                  <GraduationCap className="w-5 h-5 text-[#0861A8] shrink-0" />
                  <span className="text-[12px] font-semibold text-[#111C35]">MSc Restorative (Univ. of Helsinki)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#EFF4FF] border border-[#D8E6FC]">
                  <Clock className="w-5 h-5 text-[#0861A8] shrink-0" />
                  <span className="text-[12px] font-semibold text-[#111C35]">17+ Years Clinical Leadership</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#EFF4FF] border border-[#D8E6FC]">
                  <Award className="w-5 h-5 text-[#0861A8] shrink-0" />
                  <span className="text-[12px] font-semibold text-[#111C35]">Certified Digital Smile Architect</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#EFF4FF] border border-[#D8E6FC]">
                  <CheckCircle2 className="w-5 h-5 text-[#0861A8] shrink-0" />
                  <span className="text-[12px] font-semibold text-[#111C35]">25,000+ Completed Restorations</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#appointment"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[13px] font-semibold text-white bg-[#FF751C] hover:bg-[#E8640E] shadow-sm hover:shadow-md transition-all gap-2"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-full text-[13px] font-semibold text-[#111C35] bg-white border border-[#E0E7F2] hover:bg-gray-50 transition-all"
                >
                  View Full Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

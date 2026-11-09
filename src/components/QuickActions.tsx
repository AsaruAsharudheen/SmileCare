"use client";

import React from "react";
import { CalendarCheck, AlertCircle, MessageSquare, MapPin, ArrowUpRight } from "lucide-react";
import { QUICK_ACTIONS } from "@/data/website-data";

export default function QuickActions() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "CalendarCheck":
        return <CalendarCheck className="w-5 h-5 text-[#0861A8]" />;
      case "AlertCircle":
        return <AlertCircle className="w-5 h-5 text-[#E63946]" />;
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5 text-[#16A36A]" />;
      case "MapPin":
        return <MapPin className="w-5 h-5 text-[#0861A8]" />;
      default:
        return <CalendarCheck className="w-5 h-5 text-[#0861A8]" />;
    }
  };

  const getHref = (id: string) => {
    switch (id) {
      case "action-1":
        return "#appointment";
      case "action-2":
        return "tel:+971509998888";
      case "action-3":
        return "https://wa.me/971501234567";
      case "action-4":
        return "#footer";
      default:
        return "#";
    }
  };

  return (
    <section className="py-3 sm:py-5">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_ACTIONS.map((item) => (
            <a
              key={item.id}
              href={getHref(item.id)}
              className="group bg-white rounded-2xl p-5 border border-[#E8EEF7] shadow-sm hover:shadow-md hover:border-[#BFD5F2] transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: item.badgeColor || "#EFF4FF" }}
                >
                  {getIcon(item.icon)}
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#111C35] group-hover:text-[#0861A8] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-[#6E7B91] mt-0.5 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="text-gray-300 group-hover:text-[#0861A8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-2 shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

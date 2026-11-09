"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Clock, ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/website-data";

export default function Blog() {
  const getBlogImage = (index: number) => {
    switch (index) {
      case 0:
        return "/images/blog-1.jpg";
      case 1:
        return "/images/blog-2.jpg";
      case 2:
      default:
        return "/images/blog-3.jpg";
    }
  };

  return (
    <section id="blog" className="py-14 sm:py-20 bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <span className="text-[11px] font-bold text-[#0861A8] uppercase tracking-wider">
              KNOWLEDGE HUB
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#111C35] tracking-tight mt-1 mb-2">
              Patient Education
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#596579]">
              Clear clinical guidance to help you protect and preserve your oral health.
            </p>
          </div>

          <a
            href="#procedures"
            className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0861A8] hover:text-[#074b82] transition-colors mt-3 md:mt-0"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <article
              key={post.id}
              className="bg-[#F8FAFD] rounded-2xl overflow-hidden border border-[#E5EAF2] hover:border-[#BFD5F2] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={getBlogImage(idx)}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#111C35]/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] text-[#596579] mb-2.5">
                    <span className="text-gray-400">{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0861A8]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-[17px] font-bold text-[#111C35] group-hover:text-[#0861A8] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-[13px] text-[#596579] leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                <span className="text-[12px] font-bold text-[#0861A8] group-hover:underline">
                  Read clinical guide
                </span>
                <div className="w-8 h-8 rounded-full bg-[#EFF4FF] text-[#0861A8] group-hover:bg-[#0861A8] group-hover:text-white flex items-center justify-center transition-all shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

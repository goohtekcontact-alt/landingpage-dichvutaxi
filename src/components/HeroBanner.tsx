"use client";

import React from "react";
import Image from "next/image";
import { UserCheck, Tag, Headphones } from "lucide-react";

export default function HeroBanner() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white">
      <div className="w-full relative">
        {/* Background Hero Image */}
        <Image
          src="/images/image_hero.png"
          alt="Taxi Tour 76 - Hero Banner"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="w-full h-auto block"
        />

        {/* Text Overlay on Left Side (Desktop Only: hidden md:flex) - Shifted Left */}
        <div className="hidden md:flex absolute inset-0 items-center">
          <div className="w-full max-w-container-max mx-auto px-4 md:px-8 lg:px-10">
            <div className="max-w-2xl space-y-5 lg:space-y-7 -ml-2 md:-ml-4">
              
              {/* Main Headline */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-[46px] font-black text-[#0a1c3b] tracking-tight leading-relaxed mb-3.5 lg:mb-5">
                  Di chuyển thông minh
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-[46px] font-black text-[#00b06b] tracking-tight leading-relaxed">
                  Mọi hành trình – mọi lúc
                </h2>
              </div>

              {/* Subtitle Lines */}
              <div className="space-y-2 text-[#1e293b] font-extrabold text-lg md:text-xl lg:text-2xl leading-normal">
                <p>Taxi nhanh chóng, xe ghép tiết kiệm</p>
                <p>An toàn – tiện lợi – giá tốt</p>
              </div>

              {/* 3 White Pill Badges */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                
                {/* Pill 1 */}
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/90 shadow-sm text-xs font-bold text-slate-900">
                  <div className="w-5 h-5 rounded-full bg-[#e6f9f1] text-[#00b06b] flex items-center justify-center shrink-0">
                    <UserCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>Tài xế chuyên nghiệp</span>
                </div>

                {/* Pill 2 */}
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/90 shadow-sm text-xs font-bold text-slate-900">
                  <div className="w-5 h-5 rounded-full bg-[#e6f9f1] text-[#00b06b] flex items-center justify-center shrink-0">
                    <Tag className="w-3.5 h-3.5" />
                  </div>
                  <span>Giá cước minh bạch</span>
                </div>

                {/* Pill 3 */}
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/90 shadow-sm text-xs font-bold text-slate-900">
                  <div className="w-5 h-5 rounded-full bg-[#e6f9f1] text-[#00b06b] flex items-center justify-center shrink-0">
                    <Headphones className="w-3.5 h-3.5" />
                  </div>
                  <span>Hỗ trợ 24/7</span>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

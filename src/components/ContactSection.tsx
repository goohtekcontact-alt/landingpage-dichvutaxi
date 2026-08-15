"use client";

import React from "react";
import Image from "next/image";
import { PhoneCall, Navigation, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-slate-50 py-16 border-t border-slate-200/60" id="contact">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-desktop">
        
        {/* Horizontal Full-Width Blue Contact Banner */}
        <div className="bg-[#00355f] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Accent Orbs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent-orange/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="typo-h1 text-white mb-3">
                Liên hệ với chúng tôi
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
                Đội ngũ điều hành Taxi Tour 76 luôn sẵn sàng 24/7 để tư vấn báo giá trọn gói và sắp xếp chuyến đi cho quý khách trong thời gian nhanh nhất.
              </p>
            </div>

            {/* 3 Compact Horizontal Contact Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              
              {/* Column 1: Khu vực hoạt động */}
              <div className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-orange text-white flex items-center justify-center shrink-0 shadow-md">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">Khu Vực Phục Vụ</div>
                    <div className="text-xs text-amber-300 font-semibold">Quảng Ngãi & Toàn Quốc</div>
                  </div>
                </div>
                <p className="text-xs text-blue-100/80 leading-relaxed">
                  TP. Quảng Ngãi, Sân bay Chu Lai, Cảng Sa Kỳ (Lý Sơn), Đà Nẵng, Quy Nhơn...
                </p>
              </div>

              {/* Column 2: Hotline 24/7 Direct Call */}
              <a
                href="tel:02558999976"
                className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col justify-between group hover:bg-white/15 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center shrink-0 shadow-md">
                    <PhoneCall className="w-5 h-5 animate-bounce" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">Hotline Tổng Đài 24/7</div>
                    <div className="text-xs text-amber-300 font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Phục vụ xuyên đêm & Lễ
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xl sm:text-2xl font-black text-amber-300 group-hover:text-amber-200 transition-colors">
                    0255 899 9976
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider group-hover:brightness-110 transition-all shadow-sm">
                    Gọi ngay ➔
                  </span>
                </div>
              </a>

              {/* Column 3: Zalo & Email */}
              <a
                href="https://zalo.me/0931386786"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col justify-between group hover:bg-white/15 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-transparent flex items-center justify-center shrink-0 shadow-md">
                    <Image
                      src="/images/zalo_official_icon.png"
                      alt="Zalo"
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">Zalo Hỗ Trợ 24/7</div>
                    <div className="text-xs text-emerald-300 font-bold">0931 386 786</div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-blue-100/70 truncate flex items-center gap-1 max-w-[130px] sm:max-w-[150px]">
                    <Mail className="w-3.5 h-3.5 text-accent-orange shrink-0" />
                    <span className="truncate">hotro@dichvutaxitour76.com</span>
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider group-hover:bg-emerald-400 transition-all shrink-0 shadow-sm">
                    Chat Zalo ➔
                  </span>
                </div>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

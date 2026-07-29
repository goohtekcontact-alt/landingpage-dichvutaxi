"use client";

import React from "react";
import Image from "next/image";
import { Award, Car } from "lucide-react";

export default function AboutStats() {
  return (
    <section className="py-20 max-w-container-max mx-auto px-4 sm:px-margin-desktop overflow-hidden" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column (6 Cols): High-Res Driver Image & Redesigned Experience Badge */}
        <div className="lg:col-span-6 relative">
          
          {/* Main Image Frame */}
          <div className="relative w-full h-[460px] sm:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 group">
            <Image
              src="/images/about_driver_experience.png"
              alt="Tài xế chuyên nghiệp Taxi Tour 76"
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>

          {/* Compact Floating "10+ NĂM KINH NGHIỆM" Badge */}
          <div className="absolute -bottom-6 -right-2 sm:-bottom-7 sm:-right-5 z-20 bg-[#00355f] text-white p-4 sm:p-5 rounded-2xl border-2 border-white shadow-2xl backdrop-blur-md flex items-center gap-3.5 hover:scale-105 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-amber-400/20 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-2xl sm:text-3xl text-amber-400 leading-none mb-1">
                10+
              </div>
              <div className="typo-badge text-white font-bold uppercase tracking-wider text-xs whitespace-nowrap">
                NĂM KINH NGHIỆM PHỤC VỤ
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (6 Cols): Content Details & Stats Grid */}
        <div className="lg:col-span-6 pt-6 lg:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary typo-badge text-xs mb-4 border border-blue-100">
            <Car className="w-3.5 h-3.5 text-accent-orange" />
            <span>VỀ TAXI TOUR 76</span>
          </div>

          <h2 className="typo-h1 text-[#00355f] mb-5">
            Cam kết xuất sắc trong dịch vụ vận tải
          </h2>

          <p className="typo-body text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            Taxi Tour 76 (<strong className="text-primary">dichvutaxitour76.com</strong>) được thành lập với sứ mệnh mang đến trải nghiệm di chuyển an toàn, tiện lợi và tiết kiệm chi phí tối đa cho khách hàng tại Quảng Ngãi và các tỉnh thành toàn quốc. Đội xe đời mới, luôn sạch sẽ cùng đội ngũ tài xế tận tâm 24/7 cam kết đồng hành cùng bạn trên mọi hành trình.
          </p>

          {/* Clean Minimalist Stats Bar without clipping outer boxes */}
          <div className="border-t border-slate-200/80 pt-8">
            <div className="grid grid-cols-3 gap-2 sm:gap-6">
              
              {/* Stat 1 */}
              <div className="sm:border-r border-slate-200/80 pr-2 sm:pr-4">
                <div className="text-[#00355f] text-2xl sm:text-3xl font-black leading-none mb-2">
                  50.000+
                </div>
                <div className="text-slate-500 text-xs font-bold leading-snug">
                  Chuyến xe an toàn
                </div>
              </div>

              {/* Stat 2 */}
              <div className="sm:border-r border-slate-200/80 sm:px-4">
                <div className="text-emerald-700 text-2xl sm:text-3xl font-black leading-none mb-2">
                  200+
                </div>
                <div className="text-slate-500 text-xs font-bold leading-snug">
                  Tài xế uy tín
                </div>
              </div>

              {/* Stat 3 */}
              <div className="sm:pl-4">
                <div className="text-accent-orange text-2xl sm:text-3xl font-black leading-none mb-2">
                  99%
                </div>
                <div className="text-slate-500 text-xs font-bold leading-snug">
                  Khách hài lòng
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface FleetShowcaseProps {
  onOpenBookingModal: (vehicleName?: string) => void;
}

export default function FleetShowcase({ onOpenBookingModal }: FleetShowcaseProps) {
  return (
    <section className="bg-slate-50/70 pt-12 sm:pt-16 pb-6 sm:pb-10 border-t border-b border-slate-200/60" id="fleet">
      <div className="max-w-container-max mx-auto px-2 sm:px-margin-desktop">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14">
            <h2 className="typo-h1 text-[#00355f] mb-2 sm:mb-3">
              Đội xe cao cấp
            </h2>
            <p className="typo-lead text-slate-500 font-normal hidden sm:block">
              Xe đời mới phù hợp cho mọi số lượng hành khách và nhu cầu.
            </p>
            <div className="hidden sm:flex items-center justify-center my-4">
              <span className="w-2.5 h-2.5 rotate-45 border-2 border-slate-300 inline-block" />
            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column Fleet Cards Grid (2 Columns on Mobile & Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-6 mb-10 sm:mb-14 items-stretch">
          
          {/* Card 1: Xe 4 chỗ Sedan */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-5 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover-lift h-full">
              <div>
                {/* Vehicle Image */}
                <div className="relative w-full h-32 sm:h-52 mb-3 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                  <Image
                    src="/images/image_seciton_1.jpg"
                    alt="Xe 4 chỗ Sedan"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Title & Subtitle */}
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3.5 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00355f] text-white flex items-center justify-center shrink-0 shadow-md group-hover:rotate-12 transition-transform duration-300">
                    <span className="material-symbols-outlined text-base sm:text-xl">directions_car</span>
                  </div>
                  <div>
                    <h3 className="typo-h3 text-slate-900 font-bold text-sm sm:text-lg">Xe 4 chỗ Sedan</h3>
                    <p className="typo-caption text-slate-500 text-[11px] sm:text-xs mt-0.5 sm:mt-1 leading-snug sm:leading-relaxed">
                      Dòng xe sedan sang trọng, êm ái cho cá nhân, gia đình nhỏ.
                    </p>
                  </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3 my-3 sm:my-6 py-2 sm:py-4 border-t border-b border-slate-100 text-[10px] sm:text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">groups</span>
                    <span>4 Hành khách</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">luggage</span>
                    <span>2 Hành lý</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">ac_unit</span>
                    <span>Điều hòa</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">wifi</span>
                    <span>WiFi free</span>
                  </div>
                </div>
              </div>

              {/* Outline Button */}
              <button
                onClick={() => onOpenBookingModal("Xe 4 chỗ Sedan")}
                className="w-full py-2 sm:py-3.5 rounded-xl sm:rounded-2xl border border-[#00355f] text-[#00355f] hover:bg-[#00355f] hover:text-white text-xs sm:text-base transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 font-bold btn-shine-effect"
              >
                <span>Chi tiết</span>
                <span className="material-symbols-outlined text-sm sm:text-lg">arrow_forward</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Card 2: Xe 7 chỗ Premium */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-5 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover-lift h-full">
              <div>
                {/* Vehicle Image */}
                <div className="relative w-full h-32 sm:h-52 mb-3 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                  <Image
                    src="/images/image_seciton_3.jpg"
                    alt="Xe 7 chỗ Premium"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Title & Subtitle */}
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3.5 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00355f] text-white flex items-center justify-center shrink-0 shadow-md group-hover:rotate-12 transition-transform duration-300">
                    <span className="material-symbols-outlined text-base sm:text-xl">group</span>
                  </div>
                  <div>
                    <h3 className="typo-h3 text-slate-900 font-bold text-sm sm:text-lg">Xe 7 chỗ Premium</h3>
                    <p className="typo-caption text-slate-500 text-[11px] sm:text-xs mt-0.5 sm:mt-1 leading-snug sm:leading-relaxed">
                      Không gian rộng rãi, thoải mái lý tưởng cho gia đình &amp; nhóm bạn.
                    </p>
                  </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3 my-3 sm:my-6 py-2 sm:py-4 border-t border-b border-slate-100 text-[10px] sm:text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">groups</span>
                    <span>6 Hành khách</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">luggage</span>
                    <span>4 Hành lý</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">ac_unit</span>
                    <span>Điều hòa</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">power</span>
                    <span>Sạc điện thoại</span>
                  </div>
                </div>
              </div>

              {/* Outline Button */}
              <button
                onClick={() => onOpenBookingModal("Xe 7 chỗ Premium")}
                className="w-full py-2 sm:py-3.5 rounded-xl sm:rounded-2xl border border-[#00355f] text-[#00355f] hover:bg-[#00355f] hover:text-white text-xs sm:text-base transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 font-bold btn-shine-effect"
              >
                <span>Chi tiết</span>
                <span className="material-symbols-outlined text-sm sm:text-lg">arrow_forward</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Card 3: Xe Limousine cao cấp */}
          <ScrollReveal direction="up" delay={0.3} className="col-span-2 md:col-span-1 h-full">
            <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-5 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover-lift h-full">
              <div>
                {/* Vehicle Image */}
                <div className="relative w-full h-32 sm:h-52 mb-3 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                  <Image
                    src="/images/image_section_4.jpg"
                    alt="Xe Limousine cao cấp"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Title & Subtitle */}
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3.5 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00355f] text-white flex items-center justify-center shrink-0 shadow-md group-hover:rotate-12 transition-transform duration-300">
                    <span className="material-symbols-outlined text-base sm:text-xl">workspace_premium</span>
                  </div>
                  <div>
                    <h3 className="typo-h3 text-slate-900 font-bold text-sm sm:text-lg">Xe Điện VinFast Cao Cấp</h3>
                    <p className="typo-caption text-slate-500 text-[11px] sm:text-xs mt-0.5 sm:mt-1 leading-snug sm:leading-relaxed">
                      Đội xe điện 4 – 7 chỗ sang trọng, êm ái &amp; hiện đại cho hành trình cao cấp.
                    </p>
                  </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3 my-3 sm:my-6 py-2 sm:py-4 border-t border-b border-slate-100 text-[10px] sm:text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">groups</span>
                    <span>4–7 Hành khách</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">luggage</span>
                    <span>Hành lý rộng</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">electric_car</span>
                    <span>Xe điện êm ái</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">power</span>
                    <span>Sạc &amp; Điều hòa</span>
                  </div>
                </div>
              </div>

              {/* Outline Button */}
              <button
                onClick={() => onOpenBookingModal("Xe Điện VinFast Cao Cấp")}
                className="w-full py-2 sm:py-3.5 rounded-xl sm:rounded-2xl border border-[#00355f] text-[#00355f] hover:bg-[#00355f] hover:text-white text-xs sm:text-base transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 font-bold btn-shine-effect"
              >
                <span>Chi tiết</span>
                <span className="material-symbols-outlined text-sm sm:text-lg">arrow_forward</span>
              </button>
            </div>
          </ScrollReveal>

        </div>

        {/* Bottom Feature Trust Bar (Hidden on Mobile) */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="hidden sm:grid bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 border border-slate-200/80 shadow-md grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            
            {/* Item 1 */}
            <div className="flex items-center gap-2 sm:gap-3.5 p-1">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-full bg-blue-50 text-[#00355f] flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-lg sm:text-2xl">shield</span>
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">Chất lượng cao</h4>
                <p className="text-[10px] sm:text-xs text-slate-500 truncate leading-tight">Xe bảo dưỡng định kỳ</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-2 sm:gap-3.5 p-1">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-full bg-blue-50 text-[#00355f] flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-lg sm:text-2xl">verified_user</span>
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">Lái xe an toàn</h4>
                <p className="text-[10px] sm:text-xs text-slate-500 truncate leading-tight">Nhiều năm kinh nghiệm</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-2 sm:gap-3.5 p-1">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-full bg-blue-50 text-[#00355f] flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-lg sm:text-2xl">payments</span>
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">Giá cạnh tranh</h4>
                <p className="text-[10px] sm:text-xs text-slate-500 truncate leading-tight">Cam kết đúng giá</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-2 sm:gap-3.5 p-1">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-full bg-blue-50 text-[#00355f] flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-lg sm:text-2xl">support_agent</span>
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">Phục vụ 24/7</h4>
                <p className="text-[10px] sm:text-xs text-slate-500 truncate leading-tight">Sẵn sàng mọi lúc</p>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

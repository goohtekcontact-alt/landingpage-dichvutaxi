"use client";

import React from "react";
import Image from "next/image";

interface FleetShowcaseProps {
  onOpenBookingModal: (vehicleName?: string) => void;
}

export default function FleetShowcase({ onOpenBookingModal }: FleetShowcaseProps) {
  return (
    <section className="bg-slate-50/70 pt-12 sm:pt-16 pb-6 sm:pb-10 border-t border-b border-slate-200/60" id="fleet">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-desktop">
        
        {/* Section Header */}
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

        {/* 2-Column Fleet Cards Grid (2 Columns on Mobile & Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6 mb-10 sm:mb-14 items-stretch">
          
          {/* Card 1: Xe 4 chỗ Sedan */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Vehicle Image */}
              <div className="relative w-full h-32 sm:h-52 mb-3 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                <Image
                  src="/images/image_seciton_1.jpg"
                  alt="Xe 4 chỗ Sedan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Subtitle */}
              <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3.5 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00355f] text-white flex items-center justify-center shrink-0 shadow-md">
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
              className="w-full py-2 sm:py-3.5 rounded-xl sm:rounded-2xl border border-[#00355f] text-[#00355f] hover:bg-[#00355f] hover:text-white text-xs sm:text-base transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 font-bold"
            >
              <span>Chi tiết</span>
              <span className="material-symbols-outlined text-sm sm:text-lg">arrow_forward</span>
            </button>
          </div>

          {/* Card 2: Xe 7 chỗ SUV (Highlighted) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 border-2 border-[#00355f] shadow-xl relative flex flex-col justify-between group">
            {/* Top Badge Tag */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00355f] text-white px-2.5 py-0.5 sm:px-5 sm:py-1 rounded-full text-[9px] sm:text-xs font-bold uppercase tracking-wider shadow-md whitespace-nowrap">
              LỰA CHỌN GIA ĐÌNH
            </div>

            <div>
              {/* Vehicle Image */}
              <div className="relative w-full h-32 sm:h-52 mb-3 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 shadow-inner mt-1 sm:mt-2">
                <Image
                  src="/images/image_seciton_3.jpg"
                  alt="Xe 7 chỗ SUV"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Subtitle */}
              <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3.5 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00355f] text-white flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-base sm:text-xl">group</span>
                </div>
                <div>
                  <h3 className="typo-h3 text-slate-900 font-bold text-sm sm:text-lg">Xe 7 chỗ SUV</h3>
                  <p className="typo-caption text-slate-500 text-[11px] sm:text-xs mt-0.5 sm:mt-1 leading-snug sm:leading-relaxed">
                    Không gian rộng rãi, thoải mái lý tưởng cho gia đình &amp; nhóm bạn.
                  </p>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3 my-3 sm:my-6 py-2 sm:py-4 border-t border-b border-slate-100 text-[10px] sm:text-xs font-medium text-slate-700">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">groups</span>
                  <span>7 Hành khách</span>
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

            {/* Solid Button */}
            <button
              onClick={() => onOpenBookingModal("Xe 7 chỗ SUV")}
              className="w-full py-2 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#00355f] text-white hover:bg-[#002545] text-xs sm:text-base transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 font-bold shadow-lg"
            >
              <span>Chi tiết</span>
              <span className="material-symbols-outlined text-sm sm:text-lg">arrow_forward</span>
            </button>
          </div>

          {/* Card 3: Xe Limousine cao cấp */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group col-span-2 md:col-span-1">
            <div>
              {/* Vehicle Image */}
              <div className="relative w-full h-32 sm:h-52 mb-3 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                <Image
                  src="/images/image_section_4.jpg"
                  alt="Xe Limousine cao cấp"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Subtitle */}
              <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3.5 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00355f] text-white flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-base sm:text-xl">workspace_premium</span>
                </div>
                <div>
                  <h3 className="typo-h3 text-slate-900 font-bold text-sm sm:text-lg">Xe Limousine cao cấp</h3>
                  <p className="typo-caption text-slate-500 text-[11px] sm:text-xs mt-0.5 sm:mt-1 leading-snug sm:leading-relaxed">
                    Đẳng cấp &amp; tiện nghi vượt trội cho hành trình sang trọng, riêng tư.
                  </p>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3 my-3 sm:my-6 py-2 sm:py-4 border-t border-b border-slate-100 text-[10px] sm:text-xs font-medium text-slate-700">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">groups</span>
                  <span>9-16 Khách</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">luggage</span>
                  <span>Hành lý rộng</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">tv</span>
                  <span>Giải trí TV</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-xs sm:text-base">local_cafe</span>
                  <span>Nước uống</span>
                </div>
              </div>
            </div>

            {/* Outline Button */}
            <button
              onClick={() => onOpenBookingModal("Xe Limousine cao cấp")}
              className="w-full py-2 sm:py-3.5 rounded-xl sm:rounded-2xl border border-[#00355f] text-[#00355f] hover:bg-[#00355f] hover:text-white text-xs sm:text-base transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 font-bold"
            >
              <span>Chi tiết</span>
              <span className="material-symbols-outlined text-sm sm:text-lg">arrow_forward</span>
            </button>
          </div>

        </div>

        {/* Bottom Feature Trust Bar (Hidden on Mobile) */}
        <div className="hidden sm:grid bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 border border-slate-200/80 shadow-md grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          
          {/* Item 1 */}
          <div className="flex items-center gap-2 sm:gap-3.5 p-1">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-full bg-blue-50 text-[#00355f] flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-lg sm:text-2xl">shield</span>
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">Xe đời mới</h4>
              <p className="text-[10px] sm:text-xs text-slate-500 truncate leading-tight">Bảo dưỡng định kỳ, êm ái</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-2 sm:gap-3.5 p-1">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-full bg-blue-50 text-[#00355f] flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-lg sm:text-2xl">schedule</span>
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">Đúng giờ</h4>
              <p className="text-[10px] sm:text-xs text-slate-500 truncate leading-tight">Cam kết đúng giờ đón trả</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-2 sm:gap-3.5 p-1">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-full bg-blue-50 text-[#00355f] flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-lg sm:text-2xl">person_check</span>
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">Tài xế uy tín</h4>
              <p className="text-[10px] sm:text-xs text-slate-500 truncate leading-tight">Lái xe kinh nghiệm, lịch sự</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-2 sm:gap-3.5 p-1">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-full bg-blue-50 text-[#00355f] flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-lg sm:text-2xl">headset_mic</span>
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">Hỗ trợ 24/7</h4>
              <p className="text-[10px] sm:text-xs text-slate-500 truncate leading-tight">Đội ngũ hỗ trợ 24/7</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

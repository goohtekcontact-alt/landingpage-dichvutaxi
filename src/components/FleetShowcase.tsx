"use client";

import React from "react";
import Image from "next/image";

interface FleetShowcaseProps {
  onOpenBookingModal: (vehicleName?: string) => void;
}

export default function FleetShowcase({ onOpenBookingModal }: FleetShowcaseProps) {
  return (
    <section className="bg-slate-50/70 py-20 border-t border-b border-slate-200/60" id="fleet">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-desktop">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="typo-h1 text-[#00355f] mb-3">
            Đội xe cao cấp
          </h2>
          <p className="typo-lead text-slate-500 font-normal">
            Xe đời mới phù hợp cho mọi số lượng hành khách và nhu cầu.
          </p>
          <div className="flex items-center justify-center my-4">
            <span className="w-2.5 h-2.5 rotate-45 border-2 border-slate-300 inline-block" />
          </div>
        </div>

        {/* 3 Fleet Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14 items-stretch">
          
          {/* Card 1: Xe 4 chỗ Sedan */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Vehicle Image */}
              <div className="relative w-full h-52 mb-6 rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                <Image
                  src="/images/image_seciton_1.jpg"
                  alt="Xe 4 chỗ Sedan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Subtitle */}
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00355f] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                  <span className="material-symbols-outlined text-xl">directions_car</span>
                </div>
                <div>
                  <h3 className="typo-h3 text-slate-900 font-bold text-lg">Xe 4 chỗ Sedan</h3>
                  <p className="typo-caption text-slate-500 text-xs mt-1 leading-relaxed">
                    Dòng xe sedan sang trọng, êm ái phù hợp di chuyển cá nhân, gia đình nhỏ.
                  </p>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 my-6 py-4 border-t border-b border-slate-100 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-base">groups</span>
                  <span>4 Hành khách</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-base">luggage</span>
                  <span>2 Hành lý</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-base">ac_unit</span>
                  <span>Điều hòa</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-base">wifi</span>
                  <span>WiFi miễn phí</span>
                </div>
              </div>
            </div>

            {/* Outline Button */}
            <button
              onClick={() => onOpenBookingModal("Xe 4 chỗ Sedan")}
              className="w-full py-3.5 rounded-2xl border border-[#00355f] text-[#00355f] hover:bg-[#00355f] hover:text-white typo-btn transition-all duration-300 flex items-center justify-center gap-2 font-bold"
            >
              <span>Chi tiết</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>

          {/* Card 2: Xe 7 chỗ SUV (Highlighted) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#00355f] shadow-2xl relative flex flex-col justify-between lg:-translate-y-2 group">
            {/* Top Badge Tag */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00355f] text-white px-5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
              LỰA CHỌN GIA ĐÌNH
            </div>

            <div>
              {/* Vehicle Image */}
              <div className="relative w-full h-52 mb-6 rounded-2xl overflow-hidden bg-slate-100 shadow-inner mt-2">
                <Image
                  src="/images/image_seciton_3.jpg"
                  alt="Xe 7 chỗ SUV"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Subtitle */}
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00355f] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                  <span className="material-symbols-outlined text-xl">group</span>
                </div>
                <div>
                  <h3 className="typo-h3 text-slate-900 font-bold text-lg">Xe 7 chỗ SUV</h3>
                  <p className="typo-caption text-slate-500 text-xs mt-1 leading-relaxed">
                    Không gian rộng rãi, thoải mái lý tưởng cho gia đình và nhóm bạn.
                  </p>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 my-6 py-4 border-t border-b border-slate-100 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-base">groups</span>
                  <span>7 Hành khách</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-base">luggage</span>
                  <span>4 Hành lý</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-base">ac_unit</span>
                  <span>Điều hòa</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-base">power</span>
                  <span>Sạc điện thoại</span>
                </div>
              </div>
            </div>

            {/* Solid Button */}
            <button
              onClick={() => onOpenBookingModal("Xe 7 chỗ SUV")}
              className="w-full py-3.5 rounded-2xl bg-[#00355f] text-white hover:bg-[#002545] typo-btn transition-all duration-300 flex items-center justify-center gap-2 font-bold shadow-lg"
            >
              <span>Chi tiết</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>

          {/* Card 3: Xe Limousine cao cấp */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Vehicle Image */}
              <div className="relative w-full h-52 mb-6 rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                <Image
                  src="/images/image_section_4.jpg"
                  alt="Xe Limousine cao cấp"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Subtitle */}
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00355f] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                  <span className="material-symbols-outlined text-xl">workspace_premium</span>
                </div>
                <div>
                  <h3 className="typo-h3 text-slate-900 font-bold text-lg">Xe Limousine cao cấp</h3>
                  <p className="typo-caption text-slate-500 text-xs mt-1 leading-relaxed">
                    Đẳng cấp & tiện nghi vượt trội cho hành trình sang trọng và riêng tư.
                  </p>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 my-6 py-4 border-t border-b border-slate-100 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-base">groups</span>
                  <span>9 - 16 Hành khách</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-base">luggage</span>
                  <span>Khoang hành lý rộng</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-base">tv</span>
                  <span>Giải trí</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 text-base">local_cafe</span>
                  <span>Nước uống</span>
                </div>
              </div>
            </div>

            {/* Outline Button */}
            <button
              onClick={() => onOpenBookingModal("Xe Limousine cao cấp")}
              className="w-full py-3.5 rounded-2xl border border-[#00355f] text-[#00355f] hover:bg-[#00355f] hover:text-white typo-btn transition-all duration-300 flex items-center justify-center gap-2 font-bold"
            >
              <span>Chi tiết</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>

        </div>

        {/* Bottom Feature Trust Bar (4 Items) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Item 1 */}
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-full bg-blue-50 text-[#00355f] flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-2xl">shield</span>
            </div>
            <div>
              <h4 className="typo-h3 text-slate-900 font-bold text-sm mb-1">Xe đời mới</h4>
              <p className="typo-caption text-slate-500 text-xs leading-relaxed">
                Được bảo dưỡng định kỳ, vận hành êm ái.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-full bg-blue-50 text-[#00355f] flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-2xl">schedule</span>
            </div>
            <div>
              <h4 className="typo-h3 text-slate-900 font-bold text-sm mb-1">Đúng giờ</h4>
              <p className="typo-caption text-slate-500 text-xs leading-relaxed">
                Cam kết đúng giờ đón trả, không trễ chuyến.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-full bg-blue-50 text-[#00355f] flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-2xl">person_check</span>
            </div>
            <div>
              <h4 className="typo-h3 text-slate-900 font-bold text-sm mb-1">Tài xế chuyên nghiệp</h4>
              <p className="typo-caption text-slate-500 text-xs leading-relaxed">
                Lái xe kinh nghiệm, thân thiện, lịch sự.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-full bg-blue-50 text-[#00355f] flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-2xl">headset_mic</span>
            </div>
            <div>
              <h4 className="typo-h3 text-slate-900 font-bold text-sm mb-1">Hỗ trợ 24/7</h4>
              <p className="typo-caption text-slate-500 text-xs leading-relaxed">
                Đội ngũ hỗ trợ luôn sẵn sàng giải đáp mọi thắc mắc.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

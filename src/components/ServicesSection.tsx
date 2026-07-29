"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Banknote, Headphones } from "lucide-react";

interface ServicesSectionProps {
  onOpenBookingModal: (data?: Record<string, unknown> | string) => void;
}

export default function ServicesSection({ onOpenBookingModal }: ServicesSectionProps) {
  return (
    <section id="services" className="pt-12 sm:pt-16 pb-6 sm:pb-10 bg-slate-50">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-desktop">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14">
          <h2 className="typo-h1 text-slate-900 mb-2 sm:mb-4">
            Dịch vụ của chúng tôi
          </h2>
          <p className="typo-lead text-slate-600 hidden sm:block">
            Giải pháp di chuyển linh hoạt, an toàn và tiện lợi cho mọi nhu cầu của bạn.
          </p>
        </div>

        {/* 2 Main Service Cards Grid with Full-Bleed Background Images (2 Columns on Mobile & Desktop) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-8 mb-8 sm:mb-12">
          
          {/* Card 1: Taxi 4 chỗ - 7 chỗ (Full Bleed Background Image) */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl p-4 sm:p-8 text-white min-h-[340px] sm:min-h-[420px] flex flex-col justify-between group">
            
            {/* Full Card Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/card_bg_taxi.png"
                alt="Taxi VinFast 4-7 chỗ"
                fill
                priority
                className="object-cover object-right group-hover:scale-105 transition-transform duration-700"
              />
              {/* Smooth Gradient Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#062452] via-[#093570]/90 to-transparent" />
            </div>

            {/* Card Content Overlay (Full Height Flex) */}
            <div className="relative z-10 h-full flex flex-col justify-between w-full space-y-4">
              {/* Top Group: Icon, Title & Bullets */}
              <div className="space-y-3 sm:space-y-4">
                {/* Icon */}
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-md">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">directions_car</span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-base sm:text-2xl font-bold text-white mb-1 sm:mb-2 leading-snug">
                    Taxi 4 - 7 chỗ
                  </h3>
                  <p className="text-blue-100 font-medium text-xs sm:text-base leading-tight sm:leading-normal">
                    Nhanh chóng, riêng tư, thoải mái
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-1.5 sm:space-y-2.5 font-semibold text-blue-50 text-xs sm:text-sm">
                  <li className="flex items-center gap-1.5 sm:gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-blue-300 fill-blue-500/30 shrink-0" />
                    <span>Đón tận nơi</span>
                  </li>
                  <li className="flex items-center gap-1.5 sm:gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-blue-300 fill-blue-500/30 shrink-0" />
                    <span>Tài xế uy tín</span>
                  </li>
                  <li className="flex items-center gap-1.5 sm:gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-blue-300 fill-blue-500/30 shrink-0" />
                    <span>Phục vụ 24/7</span>
                  </li>
                </ul>
              </div>

              {/* Action Button at the Bottom */}
              <div className="pt-2 mt-auto">
                <button
                  onClick={() => onOpenBookingModal("Taxi 4-7 chỗ")}
                  className="bg-white text-blue-600 hover:bg-blue-50 typo-btn px-3 py-2 sm:px-6 sm:py-3.5 rounded-xl sm:rounded-2xl inline-flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-base transition-all shadow-xl hover:translate-x-1 w-full sm:w-auto"
                >
                  <span>Đặt ngay</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Card 2: Xe ghép (Full Bleed Background Image) */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl p-4 sm:p-8 text-white min-h-[340px] sm:min-h-[420px] flex flex-col justify-between group">
            
            {/* Full Card Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/card_bg_xeghep.png"
                alt="Xe ghép tiết kiệm"
                fill
                priority
                className="object-cover object-right group-hover:scale-105 transition-transform duration-700"
              />
              {/* Smooth Gradient Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#042e2b] via-[#094a45]/90 to-transparent" />
            </div>

            {/* Card Content Overlay (Full Height Flex) */}
            <div className="relative z-10 h-full flex flex-col justify-between w-full space-y-4">
              {/* Top Group: Icon, Title & Bullets */}
              <div className="space-y-3 sm:space-y-4">
                {/* Icon */}
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-md">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">airport_shuttle</span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-base sm:text-2xl font-bold text-white mb-1 sm:mb-2 leading-snug">
                    Xe ghép
                  </h3>
                  <p className="text-emerald-100 font-medium text-xs sm:text-base leading-tight sm:leading-normal">
                    Tiết kiệm chi phí, kết nối hành trình
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-1.5 sm:space-y-2.5 font-semibold text-emerald-50 text-xs sm:text-sm">
                  <li className="flex items-center gap-1.5 sm:gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-emerald-300 fill-emerald-500/30 shrink-0" />
                    <span>Từ 150K/vé</span>
                  </li>
                  <li className="flex items-center gap-1.5 sm:gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-emerald-300 fill-emerald-500/30 shrink-0" />
                    <span>Giờ linh hoạt</span>
                  </li>
                  <li className="flex items-center gap-1.5 sm:gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-emerald-300 fill-emerald-500/30 shrink-0" />
                    <span>Nhiều tuyến</span>
                  </li>
                </ul>
              </div>

              {/* Action Button at the Bottom */}
              <div className="pt-2 mt-auto">
                <button
                  onClick={() => onOpenBookingModal("Xe ghép")}
                  className="bg-white text-emerald-700 hover:bg-emerald-50 typo-btn px-3 py-2 sm:px-6 sm:py-3.5 rounded-xl sm:rounded-2xl inline-flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-base transition-all shadow-xl hover:translate-x-1 w-full sm:w-auto"
                >
                  <span>Đặt ngay</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Trust Features Bar (Hidden on Mobile) */}
        <div className="hidden sm:grid bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 border border-slate-200/80 shadow-md grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          
          {/* Feature 1 */}
          <div className="flex items-center gap-2 sm:gap-3.5 p-1">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">An toàn tuyệt đối</h4>
              <p className="text-[10px] sm:text-xs text-slate-500 truncate leading-tight">Tài xế xác minh, xe mới</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-2 sm:gap-3.5 p-1">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">Đúng giờ</h4>
              <p className="text-[10px] sm:text-xs text-slate-500 truncate leading-tight">Cam kết đúng giờ đón</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-2 sm:gap-3.5 p-1">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Banknote className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">Giá cả minh bạch</h4>
              <p className="text-[10px] sm:text-xs text-slate-500 truncate leading-tight">Trọn gói không phí ẩn</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-2 sm:gap-3.5 p-1">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Headphones className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">Hỗ trợ 24/7</h4>
              <p className="text-[10px] sm:text-xs text-slate-500 truncate leading-tight">Tư vấn hỗ trợ 24/7</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

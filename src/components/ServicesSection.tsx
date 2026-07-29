"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Banknote, Headphones } from "lucide-react";

interface ServicesSectionProps {
  onOpenBookingModal: (data?: Record<string, unknown> | string) => void;
}

export default function ServicesSection({ onOpenBookingModal }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-desktop">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="typo-h1 text-slate-900 mb-4">
            Dịch vụ của chúng tôi
          </h2>
          <p className="typo-lead text-slate-600">
            Giải pháp di chuyển linh hoạt, an toàn và tiện lợi cho mọi nhu cầu của bạn.
          </p>
        </div>

        {/* 2 Main Service Cards Grid with Full-Bleed Background Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Taxi 4 chỗ - 7 chỗ (Full Bleed Background Image) */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-10 text-white min-h-[420px] flex flex-col justify-between group">
            
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

            {/* Card Content Overlay */}
            <div className="relative z-10 space-y-5 max-w-xs sm:max-w-sm">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-md">
                <span className="material-symbols-outlined text-3xl">directions_car</span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="typo-h2 text-white mb-2">
                  Taxi 4 chỗ – 7 chỗ
                </h3>
                <p className="typo-body text-blue-100 font-medium">
                  Di chuyển nhanh chóng, riêng tư, thoải mái
                </p>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 typo-body font-semibold text-blue-50">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-300 fill-blue-500/30 shrink-0" />
                  <span>Đón tận nơi</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-300 fill-blue-500/30 shrink-0" />
                  <span>Tài xế chuyên nghiệp</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-300 fill-blue-500/30 shrink-0" />
                  <span>Phục vụ 24/7</span>
                </li>
              </ul>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenBookingModal("Taxi 4-7 chỗ")}
                  className="bg-white text-blue-600 hover:bg-blue-50 typo-btn px-6 py-3.5 rounded-2xl inline-flex items-center gap-2 transition-all shadow-xl hover:translate-x-1"
                >
                  <span>Đặt taxi ngay</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Card 2: Xe ghép (Full Bleed Background Image) */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-10 text-white min-h-[420px] flex flex-col justify-between group">
            
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

            {/* Card Content Overlay */}
            <div className="relative z-10 space-y-5 max-w-xs sm:max-w-sm">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-md">
                <span className="material-symbols-outlined text-3xl">airport_shuttle</span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="typo-h2 text-white mb-2">
                  Xe ghép
                </h3>
                <p className="typo-body text-emerald-100 font-medium">
                  Tiết kiệm chi phí, kết nối hành trình
                </p>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 typo-body font-semibold text-emerald-50">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 fill-emerald-500/30 shrink-0" />
                  <span>Giá chỉ từ 50K/vé</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 fill-emerald-500/30 shrink-0" />
                  <span>Linh hoạt thời gian</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 fill-emerald-500/30 shrink-0" />
                  <span>Nhiều tuyến đường</span>
                </li>
              </ul>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenBookingModal("Xe ghép")}
                  className="bg-white text-emerald-700 hover:bg-emerald-50 typo-btn px-6 py-3.5 rounded-2xl inline-flex items-center gap-2 transition-all shadow-xl hover:translate-x-1"
                >
                  <span>Đặt xe ghép ngay</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Trust Features Bar (4 Items) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="typo-h3 text-slate-900 mb-1">An toàn tuyệt đối</h4>
              <p className="typo-caption text-slate-500">Tài xế được xác minh, xe được kiểm định định kỳ</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="typo-h3 text-slate-900 mb-1">Đúng giờ</h4>
              <p className="typo-caption text-slate-500">Cam kết đúng giờ, không để bạn chờ lâu</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Banknote className="w-6 h-6" />
            </div>
            <div>
              <h4 className="typo-h3 text-slate-900 mb-1">Giá cả minh bạch</h4>
              <p className="typo-caption text-slate-500">Báo giá rõ ràng, không phát sinh chi phí</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="typo-h3 text-slate-900 mb-1">Hỗ trợ 24/7</h4>
              <p className="typo-caption text-slate-500">Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

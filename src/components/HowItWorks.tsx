"use client";

import React from "react";
import { PhoneCall, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Liên hệ hoặc Đặt xe",
      desc: "Gọi Hotline 0255 899 9976 hoặc nhập thông tin chuyến đi trực tiếp trên website.",
      badgeColor: "bg-blue-600",
      gradient: "from-blue-500 to-indigo-600",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#eff6ff" />
          <rect x="20" y="10" width="24" height="44" rx="5" fill="#1e3a8a" />
          <rect x="22" y="14" width="20" height="36" rx="3" fill="#ffffff" />
          <circle cx="32" cy="26" r="5" fill="#3b82f6" />
          <path d="M32 21v10M27 26h10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <path d="M25 42h14" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          <circle cx="44" cy="20" r="8" fill="#00b06b" />
          <path d="M41 20l2 2 4-4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      num: 2,
      title: "Chọn Taxi hoặc Xe ghép",
      desc: "Lựa chọn dịch vụ đi Taxi trọn chuyến riêng tư hoặc đi Xe ghép tiết kiệm.",
      badgeColor: "bg-emerald-600",
      gradient: "from-emerald-500 to-teal-600",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#ecfdf5" />
          <path d="M14 36l3.5-12c1.2-4 3.8-7 8.5-7h12c4.7 0 7.3 3 8.5 7l3.5 12c.5 1.7 1.5 2.5 3 2.5v13c0 1.5-1.2 2.5-2.5 2.5H47c-1.5 0-2.5-1-2.5-2.5V50H19.5v1.5c0 1.5-1 2.5-2.5 2.5H14.5C13.2 54 12 53 12 51.5v-13c1.5 0 2.5-.8 3-2.5z" fill="#047857" />
          <path d="M19 22h26l-2.5-7c-.5-1.5-2-2.5-3.5-2.5h-14c-1.5 0-3 1-3.5 2.5L19 22z" fill="#a7f3d0" />
          <circle cx="19" cy="41" r="3.5" fill="#fef08a" />
          <circle cx="45" cy="41" r="3.5" fill="#fef08a" />
          <rect x="26" y="40" width="12" height="5" rx="1.5" fill="#064e3b" />
        </svg>
      )
    },
    {
      num: 3,
      title: "Tài xế đón tận nơi",
      desc: "Tài xế Taxi Tour 76 đến đúng giờ, hỗ trợ hành lý và đón tận nhà chu đáo.",
      badgeColor: "bg-amber-600",
      gradient: "from-amber-500 to-orange-600",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#fffbeb" />
          <circle cx="32" cy="26" r="10" fill="#fde68a" />
          <path d="M22 19c0-4.5 4.5-8 10-8s10 3.5 10 8H22z" fill="#1e3a8a" />
          <path d="M19 19c0 0 5-2 13-2s13 2 13 2v2H19v-2z" fill="#0f172a" />
          <circle cx="32" cy="15" r="1.5" fill="#fbbf24" />
          <path d="M18 50c0-7 6-12 14-12s14 5 14 12v3H18v-3z" fill="#1e3a8a" />
          <path d="M28 38l4 7 4-7" fill="#ffffff" />
          <path d="M31 40h2v10h-2z" fill="#ef4444" />
        </svg>
      )
    },
    {
      num: 4,
      title: "Di chuyển & Thanh toán",
      desc: "Hành trình an toàn, êm ái. Thanh toán dễ dàng bằng tiền mặt hoặc chuyển khoản.",
      badgeColor: "bg-indigo-600",
      gradient: "from-indigo-500 to-blue-600",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#f0fdf4" />
          <path d="M32 10L14 19v14c0 11.5 7.7 22.3 18 25 10.3-2.7 18-13.5 18-25V19L32 10z" fill="#16a34a" />
          <path d="M26 31l5 5 9-9" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100/70 py-10 sm:py-20 border-b border-slate-200/80 relative" id="how-it-works">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-desktop">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <h2 className="typo-h1 text-[#00355f] tracking-tight">
              Cách thức đặt xe
            </h2>
          </div>
        </ScrollReveal>

        {/* Steps Grid Container */}
        <div className="relative">
          {/* Connecting Dotted Line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute top-16 left-[14%] right-[14%] h-[2px] border-t-2 border-dashed border-slate-300 z-0" />

          {/* 4 Steps Grid (2 Columns on Mobile, 4 Columns on Desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <ScrollReveal
                key={step.num}
                direction="up"
                delay={idx * 0.12}
                className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 border border-slate-200/80 shadow-md sm:shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group justify-between"
              >
                {/* Number Badge & Vector Icon */}
                <div className="relative mb-3 sm:mb-5">
                  <div className="w-16 h-16 sm:w-28 sm:h-28 rounded-xl sm:rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <div className="scale-75 sm:scale-100 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  <span className={`absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-9 sm:h-9 rounded-full ${step.badgeColor} text-white font-extrabold text-[10px] sm:text-sm flex items-center justify-center shadow-md border-2 border-white`}>
                    0{step.num}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-extrabold text-slate-900 text-xs sm:text-lg mb-1 sm:mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[11px] sm:text-sm text-slate-500 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Call-to-action bar */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-8 sm:mt-14 text-center">
            <a
              href="tel:02558999976"
              className="inline-flex items-center gap-2 sm:gap-2.5 px-5 py-3 sm:px-8 sm:py-4 rounded-full bg-[#00355f] text-white font-extrabold text-xs sm:text-base hover:bg-blue-950 active:scale-95 transition-all shadow-lg hover:shadow-xl btn-shine-effect animate-pulse-glow"
            >
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-accent-orange" />
              <span>Gọi Tổng Đài Đặt Xe Ngay: 0255 899 9976</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

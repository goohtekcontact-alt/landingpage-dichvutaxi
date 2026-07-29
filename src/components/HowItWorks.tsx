"use client";

import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Nhập thông tin",
      desc: "Nhập điểm đón, điểm đến và thời gian di chuyển.",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 64 64" fill="none">
          {/* Phone Frame */}
          <rect x="18" y="6" width="28" height="52" rx="6" fill="#0f172a" />
          <rect x="20" y="10" width="24" height="44" rx="4" fill="#ffffff" />
          {/* Screen Content - Map & Pins */}
          <rect x="22" y="12" width="20" height="40" fill="#f8fafc" />
          <circle cx="28" cy="22" r="3" fill="#10b981" />
          <circle cx="36" cy="38" r="3" fill="#00355f" />
          <path d="M28 22 L36 38" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 3" />
          {/* Speaker */}
          <rect x="28" y="8" width="8" height="1.5" rx="0.75" fill="#475569" />
        </svg>
      )
    },
    {
      num: 2,
      title: "Chọn dịch vụ",
      desc: "Chọn Taxi hoặc Xe ghép phù hợp nhu cầu.",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 64 64" fill="none">
          {/* Car Body */}
          <path d="M12 36l3.5-12c1.2-4 3.8-7 8.5-7h16c4.7 0 7.3 3 8.5 7l3.5 12c.5 1.7 1.5 2.5 3 2.5v13c0 1.5-1.2 2.5-2.5 2.5H49c-1.5 0-2.5-1-2.5-2.5V50H17.5v1.5c0 1.5-1 2.5-2.5 2.5H12.5C11.2 54 10 53 10 51.5v-13c1.5 0 2.5-.8 3-2.5z" fill="#00355f" />
          {/* Windshield */}
          <path d="M18 22h28l-2.5-7c-.5-1.5-2-2.5-3.5-2.5h-16c-1.5 0-3 1-3.5 2.5L18 22z" fill="#7dd3fc" />
          {/* Headlights */}
          <rect x="14" y="38" width="9" height="5" rx="2.5" fill="#fef08a" />
          <rect x="41" y="38" width="9" height="5" rx="2.5" fill="#fef08a" />
          {/* Grille */}
          <rect x="25" y="40" width="14" height="6" rx="2" fill="#0f172a" />
        </svg>
      )
    },
    {
      num: 3,
      title: "Xác nhận đặt xe",
      desc: "Xác nhận thông tin và chờ tài xế đến đón.",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 64 64" fill="none">
          {/* Driver Face */}
          <circle cx="32" cy="30" r="11" fill="#fed7aa" />
          {/* Mouth / Mustache */}
          <path d="M27 34c2 1.5 8 1.5 10 0" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
          {/* Eyes */}
          <circle cx="27.5" cy="28.5" r="1.5" fill="#1e293b" />
          <circle cx="36.5" cy="28.5" r="1.5" fill="#1e293b" />
          {/* Driver Cap */}
          <path d="M20 22c0-5 5.4-9 12-9s12 4 12 9H20z" fill="#00355f" />
          <path d="M17 22c0 0 6-2 15-2s15 2 15 2v2.5H17V22z" fill="#0f172a" />
          <circle cx="32" cy="18" r="2" fill="#fbbf24" />
          {/* Uniform Suit */}
          <path d="M16 52c0-8 7-14 16-14s16 6 16 14v4H16v-4z" fill="#00355f" />
          <path d="M28 38l4 8 4-8" fill="#ffffff" />
          <path d="M31 41h2v11h-2z" fill="#ef4444" />
        </svg>
      )
    },
    {
      num: 4,
      title: "Bắt đầu hành trình",
      desc: "Di chuyển an toàn, thanh toán dễ dàng.",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 64 64" fill="none">
          {/* Map Base Line */}
          <path d="M12 48l16-5 24 5" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 48l20 4 20-4" stroke="#00355f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {/* Map Pin */}
          <path d="M32 12c-6.6 0-12 5.4-12 12 0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12z" fill="#00355f" />
          <circle cx="32" cy="24" r="4.5" fill="#ffffff" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-slate-50/70 py-12 sm:py-16 border-b border-slate-200/80" id="how-it-works">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-desktop">
        
        {/* Title */}
        <h2 className="text-center text-[#00355f] text-2xl sm:text-3xl font-extrabold mb-12 tracking-tight">
          Cách thức hoạt động
        </h2>

        {/* Steps Grid Container */}
        <div className="relative">
          {/* Connecting Dotted Line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute top-14 left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-blue-200 z-0" />

          {/* 4 Steps Grid (2 Columns on Mobile, 4 Columns on Desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10 text-center">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center group">
                
                {/* Large White Circle Icon Frame */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border border-blue-100/80 shadow-lg shadow-blue-900/5 flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Title Line with Left Badge Number */}
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00355f] text-white font-extrabold text-[11px] sm:text-xs flex items-center justify-center shrink-0 shadow-sm">
                    {step.num}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed max-w-[210px] mx-auto">
                  {step.desc}
                </p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import { PhoneCall, Calculator, CheckCircle2, Car, Award, ArrowRight } from "lucide-react";

export default function BookingProcess() {
  const steps = [
    {
      num: "01",
      icon: PhoneCall,
      title: "1. Liên hệ đặt xe",
      desc: "Gọi Hotline 098x xxx xxx, gửi tin Zalo hoặc điền thông tin chuyến đi trên website.",
      active: true
    },
    {
      num: "02",
      icon: Calculator,
      title: "2. Nhận báo giá",
      desc: "Báo giá trọn gói minh bạch ngay lập tức, cam kết không phí ẩn phát sinh.",
      active: false
    },
    {
      num: "03",
      icon: CheckCircle2,
      title: "3. Xác nhận chuyến",
      desc: "Xác nhận điểm đón, thời gian và nhận thông tin tài xế & biển số xe phục vụ.",
      active: false
    },
    {
      num: "04",
      icon: Car,
      title: "4. Tài xế đón tận nơi",
      desc: "Tài xế có mặt đúng giờ tại điểm hẹn, hỗ trợ mang vác hành lý chu đáo.",
      active: false
    },
    {
      num: "05",
      icon: Award,
      title: "5. An tâm di chuyển",
      desc: "Hành trình an toàn, êm ái. Thanh toán linh hoạt sau khi đến nơi.",
      active: false
    }
  ];

  return (
    <section className="py-20 bg-slate-50/70 border-t border-b border-slate-200/60 overflow-hidden" id="process">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-desktop">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="typo-h1 text-primary mb-3">
            Quy trình đặt xe đơn giản
          </h2>
          <p className="typo-lead text-slate-500 font-normal">
            Chỉ với 5 bước đơn giản để có một chuyến đi an toàn, thoải mái và đúng hẹn.
          </p>
        </div>

        {/* Stepper Container */}
        <div className="relative">
          {/* Top Connecting Line between Step Circles (Hidden on Mobile) */}
          <div className="absolute top-8 left-10 right-10 h-1 bg-slate-200 hidden md:block z-0" />

          {/* 5 Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group relative"
                >
                  {/* Step Number Badge */}
                  <span className="absolute top-4 right-4 typo-badge text-primary/40 font-black text-xs">
                    STEP {step.num}
                  </span>

                  {/* Icon Circle */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-md ${
                      step.active
                        ? "bg-primary text-white ring-4 ring-primary/20"
                        : "bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white"
                    }`}
                  >
                    <IconComp className="w-7 h-7" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="typo-h3 text-slate-900 font-bold text-base mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="typo-caption text-slate-500 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200/80 p-5 text-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-accent-orange flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900 text-sm">Cần xe gấp trong 5-15 phút?</span>
              <span className="text-slate-500 text-xs block sm:inline sm:ml-2">Gọi ngay hotline để điều hành sắp xếp chuyến gần nhất!</span>
            </div>
          </div>

          <a
            href="tel:0981234567"
            className="px-5 py-2.5 rounded-xl bg-accent-orange text-white typo-btn hover:brightness-110 transition-all shadow-md inline-flex items-center gap-2 text-sm shrink-0"
          >
            <span>Gọi 098x xxx xxx</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

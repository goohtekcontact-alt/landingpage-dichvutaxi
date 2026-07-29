"use client";

import React from "react";
import { ShieldCheck, Tag, Smartphone, Car, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "An toàn tuyệt đối",
      desc: "Tài xế được đào tạo bài bản, kiểm tra lý lịch rõ ràng."
    },
    {
      icon: Tag,
      title: "Giá cả hợp lý",
      desc: "Giá cước minh bạch, không phụ phí ẩn."
    },
    {
      icon: Smartphone,
      title: "Đặt xe dễ dàng",
      desc: "Chỉ vài thao tác qua Hotline hoặc Zalo."
    },
    {
      icon: Car,
      title: "Đa dạng lựa chọn",
      desc: "Nhiều loại xe, đáp ứng mọi nhu cầu."
    },
    {
      icon: Headphones,
      title: "Hỗ trợ 24/7",
      desc: "Đội ngũ CSKH luôn sẵn sàng hỗ trợ bạn."
    }
  ];

  return (
    <section className="bg-[#00355f] text-white py-12 sm:py-16" id="why-choose-us">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-desktop">
        
        {/* Title */}
        <h2 className="text-center text-white text-2xl sm:text-3xl font-extrabold mb-10 tracking-tight">
          Vì sao chọn Taxi Tour 76?
        </h2>

        {/* 5 Features Grid (2 Columns on Mobile with Centered 5th Item, 5 Columns on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-6">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            const isLastOdd = idx === features.length - 1;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center p-2 group ${
                  isLastOdd ? "col-span-2 sm:col-span-1 lg:col-span-1" : ""
                }`}
              >
                {/* Circle Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white/25 bg-white/5 flex items-center justify-center mb-3 group-hover:border-emerald-400 group-hover:bg-emerald-500/10 transition-all duration-300 shadow-md">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-emerald-400 transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-200 leading-relaxed max-w-[200px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

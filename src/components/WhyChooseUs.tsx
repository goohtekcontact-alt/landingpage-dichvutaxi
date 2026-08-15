"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Tag, Smartphone, Car, Headphones } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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
    <section className="relative bg-slate-900 text-white py-14 sm:py-20 overflow-hidden" id="why-choose-us">
      {/* Background Image with Lightened Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image_seciton_3.jpg"
          alt="Vì sao chọn Taxi Tour 76 background"
          fill
          className="object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00172e]/60 via-[#002b4d]/50 to-[#00172e]/60" />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-margin-desktop">
        
        {/* Title */}
        <ScrollReveal direction="up">
          <h2 className="text-center text-white text-2xl sm:text-4xl font-extrabold mb-10 sm:mb-14 tracking-tight drop-shadow-md">
            Vì sao chọn Taxi Tour 76?
          </h2>
        </ScrollReveal>

        {/* 5 Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            const isLastOdd = idx === features.length - 1;
            return (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 0.1}
                className={`flex flex-col items-center text-center p-2 group ${
                  isLastOdd ? "col-span-2 sm:col-span-1 lg:col-span-1" : ""
                }`}
              >
                {/* Circle Icon with Glassmorphism */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center mb-3 group-hover:border-emerald-400 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-emerald-400 transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 drop-shadow">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-blue-100 leading-relaxed max-w-[200px] drop-shadow-sm font-medium">
                  {item.desc}
                </p>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

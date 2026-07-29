"use client";

import React from "react";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: "schedule",
      iconBg: "bg-primary-fixed text-primary",
      title: "Phục vụ 24/7",
      desc: "Luôn sẵn sàng phục vụ mọi nhu cầu di chuyển của bạn, bất kể ngày đêm."
    },
    {
      icon: "badge",
      iconBg: "bg-secondary-fixed text-secondary",
      title: "Tài xế chuyên nghiệp",
      desc: "Đội ngũ tài xế được tuyển chọn, giàu kinh nghiệm và tận tâm."
    },
    {
      icon: "payments",
      iconBg: "bg-tertiary-fixed text-tertiary-container",
      title: "Giá cả minh bạch",
      desc: "Không phí ẩn. Báo giá trọn gói và rõ ràng cho mọi hành trình."
    },
    {
      icon: "timer",
      iconBg: "bg-primary-fixed text-primary",
      title: "Luôn đúng giờ",
      desc: "Đúng giờ là cam kết hàng đầu. Chúng tôi trân trọng thời gian của bạn."
    },
    {
      icon: "directions_car",
      iconBg: "bg-secondary-fixed text-secondary",
      title: "Xe sạch sẽ, hiện đại",
      desc: "Đội xe đời mới, luôn được vệ sinh sạch sẽ và bảo dưỡng định kỳ."
    },
    {
      icon: "verified_user",
      iconBg: "bg-tertiary-fixed text-tertiary-container",
      title: "Cam kết an toàn",
      desc: "Quy trình an toàn nghiêm ngặt và theo dõi hành trình thời gian thực."
    }
  ];

  return (
    <section className="py-section-gap max-w-container-max mx-auto px-4 sm:px-margin-desktop">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-primary mb-4">
          Tại sao chọn Taxi Tour 76?
        </h2>
        <div className="h-1 w-20 bg-secondary-container mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {cards.map((card, index) => (
          <div
            key={index}
            className="glass-card p-8 rounded-2xl ambient-shadow hover:-translate-y-2 transition-transform duration-300"
          >
            <div className={`w-14 h-14 ${card.iconBg} flex items-center justify-center rounded-xl mb-6`}>
              <span className="material-symbols-outlined text-[32px]">{card.icon}</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-3 font-bold text-on-surface">
              {card.title}
            </h3>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

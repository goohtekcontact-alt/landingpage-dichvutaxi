"use client";

import React from "react";

interface PopularRoutesProps {
  onOpenBookingModal: (routeData?: Record<string, unknown>) => void;
}

export default function PopularRoutes({ onOpenBookingModal }: PopularRoutesProps) {
  const routes = [
    {
      badge: "Giá tốt nhất",
      badgeStyle: "bg-primary-fixed text-primary",
      title: "Sân bay Nội Bài ⇄ Trung tâm Thành phố",
      price: "250k VNĐ",
      distance: "Khoảng 30 km",
      time: "45 - 60 phút"
    },
    {
      badge: "Phổ biến nhất",
      badgeStyle: "bg-secondary-fixed text-secondary",
      title: "Hà Nội ⇄ Hải Phòng",
      price: "800k VNĐ",
      distance: "Khoảng 120 km",
      time: "1.5 - 2 giờ"
    },
    {
      badge: "Chuyến đi du lịch",
      badgeStyle: "bg-surface-variant text-on-surface-variant",
      title: "Hà Nội ⇄ Sapa",
      price: "2.5M VNĐ",
      distance: "Khoảng 320 km",
      time: "5 - 6 giờ"
    }
  ];

  return (
    <section className="py-section-gap max-w-container-max mx-auto px-4 sm:px-margin-desktop" id="routes">
      <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-primary text-center mb-16 font-bold">
        Tuyến đường phổ biến
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {routes.map((route, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-8 ambient-shadow border border-surface-variant hover:border-primary/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span
                    className={`${route.badgeStyle} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block`}
                  >
                    {route.badge}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    {route.title}
                  </h3>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <div className="text-xs text-on-surface-variant uppercase font-bold">
                    Chỉ từ
                  </div>
                  <div className="text-primary text-2xl font-extrabold">
                    {route.price}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined">distance</span>
                  <span className="font-body-md">{route.distance}</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined">timelapse</span>
                  <span className="font-body-md">{route.time}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenBookingModal({ route: route.title, price: route.price })}
              className="w-full bg-primary py-4 rounded-xl text-white font-bold hover:brightness-110 active:scale-95 transition-all shadow-md"
            >
              Chọn tuyến
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

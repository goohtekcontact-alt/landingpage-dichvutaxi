"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, PhoneCall, ArrowDown, Sparkles, ChevronRight, ChevronLeft, ShieldCheck, Clock, Car } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface RouteItem {
  from: string;
  to: string;
  price: string;
  unit: string;
  category: "xeghep" | "taxi";
  categoryLabel: string;
  tag: string;
  tagColor: string;
}

interface PopularRoutesProps {
  onOpenBookingModal: (routeData?: Record<string, unknown> | string) => void;
}

export default function PopularRoutes({ onOpenBookingModal }: PopularRoutesProps) {
  const [activeTab, setActiveTab] = useState<"all" | "xeghep" | "taxi">("taxi");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const routes: RouteItem[] = [
    // --- BẢNG GIÁ XE GHÉP ---
    {
      from: "Quảng Ngãi",
      to: "Đà Nẵng",
      price: "250.000đ",
      unit: "/người",
      category: "xeghep",
      categoryLabel: "Giá xe ghép",
      tag: "Xe ghép",
      tagColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      from: "Quảng Ngãi",
      to: "Chu Lai",
      price: "120.000đ",
      unit: "/người",
      category: "xeghep",
      categoryLabel: "Giá xe ghép",
      tag: "Xe ghép",
      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      from: "Quảng Ngãi",
      to: "Quy Nhơn",
      price: "400.000đ",
      unit: "/người",
      category: "xeghep",
      categoryLabel: "Giá xe ghép",
      tag: "Xe ghép",
      tagColor: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      from: "Quảng Ngãi",
      to: "Măng Đen",
      price: "400.000đ",
      unit: "/người",
      category: "xeghep",
      categoryLabel: "Giá xe ghép",
      tag: "Xe ghép",
      tagColor: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      from: "Đà Nẵng",
      to: "Măng Đen",
      price: "650.000đ",
      unit: "/người",
      category: "xeghep",
      categoryLabel: "Giá xe ghép",
      tag: "Xe ghép",
      tagColor: "bg-cyan-50 text-cyan-700 border-cyan-200"
    },
    {
      from: "Quảng Ngãi",
      to: "Kon Tum",
      price: "500.000đ",
      unit: "/người",
      category: "xeghep",
      categoryLabel: "Giá xe ghép",
      tag: "Xe ghép",
      tagColor: "bg-[#00355f]/10 text-[#00355f] border-blue-200"
    },

    // --- BẢNG GIÁ TAXI TRỌN CHUYẾN ---
    {
      from: "Quảng Ngãi",
      to: "Sa Kỳ",
      price: "200k - 300k",
      unit: "/chuyến",
      category: "taxi",
      categoryLabel: "Taxi trọn chuyến",
      tag: "Taxi riêng",
      tagColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      from: "Quảng Ngãi",
      to: "Sân Bay Chu Lai",
      price: "500k - 600k",
      unit: "/chuyến",
      category: "taxi",
      categoryLabel: "Taxi trọn chuyến",
      tag: "Taxi riêng",
      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      from: "Quảng Ngãi",
      to: "Sân Bay Đà Nẵng",
      price: "1000k - 1200k",
      unit: "/chuyến",
      category: "taxi",
      categoryLabel: "Taxi trọn chuyến",
      tag: "Taxi riêng",
      tagColor: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      from: "Quảng Ngãi",
      to: "Sơn Hà",
      price: "600k - 800k",
      unit: "/chuyến",
      category: "taxi",
      categoryLabel: "Taxi trọn chuyến",
      tag: "Taxi riêng",
      tagColor: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      from: "Quảng Ngãi",
      to: "Măng Đen",
      price: "1500k - 1800k",
      unit: "/chuyến",
      category: "taxi",
      categoryLabel: "Taxi trọn chuyến",
      tag: "Taxi riêng",
      tagColor: "bg-cyan-50 text-cyan-700 border-cyan-200"
    },
    {
      from: "Quảng Ngãi",
      to: "Biển Mỹ Khê",
      price: "250k - 350k",
      unit: "/chuyến",
      category: "taxi",
      categoryLabel: "Taxi trọn chuyến",
      tag: "Taxi riêng",
      tagColor: "bg-teal-50 text-teal-700 border-teal-200"
    },
    {
      from: "Quảng Ngãi",
      to: "Trà Bồng",
      price: "550k - 750k",
      unit: "/chuyến",
      category: "taxi",
      categoryLabel: "Taxi trọn chuyến",
      tag: "Taxi riêng",
      tagColor: "bg-orange-50 text-orange-700 border-orange-200"
    },
    {
      from: "Quảng Ngãi",
      to: "Quy Nhơn",
      price: "1600k - 1800k",
      unit: "/chuyến",
      category: "taxi",
      categoryLabel: "Taxi trọn chuyến",
      tag: "Taxi riêng",
      tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
    }
  ];

  const filteredRoutes = routes.filter(
    (r) => activeTab === "all" || r.category === activeTab
  );

  const totalPages = Math.ceil(filteredRoutes.length / ITEMS_PER_PAGE);

  const handleTabChange = (tab: "all" | "xeghep" | "taxi") => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const paginatedRoutes = filteredRoutes.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80" id="routes">
      <div className="max-w-container-max mx-auto px-2 sm:px-margin-desktop">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="typo-h1 text-[#00355f] tracking-tight">
              Tuyến đường phổ biến
            </h2>
            <p className="typo-lead text-slate-600 hidden sm:block">
              Bảng giá tham khảo các tuyến xe ghép &amp; taxi trọn chuyến được chọn nhiều nhất.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 p-1.5 sm:p-2 bg-slate-200/80 rounded-full w-fit mx-auto mt-5 sm:mt-8 text-xs sm:text-base font-bold shadow-inner">
            <button
              onClick={() => handleTabChange("taxi")}
              className={`px-4 sm:px-7 py-2 sm:py-3 rounded-full transition-all duration-300 ${activeTab === "taxi"
                ? "bg-white text-[#00355f] shadow-md font-extrabold scale-[1.02]"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-300/50"
                }`}
            >
              Taxi trọn chuyến ({routes.filter((r) => r.category === "taxi").length})
            </button>
            <button
              onClick={() => handleTabChange("xeghep")}
              className={`px-4 sm:px-7 py-2 sm:py-3 rounded-full transition-all duration-300 ${activeTab === "xeghep"
                ? "bg-white text-[#00355f] shadow-md font-extrabold scale-[1.02]"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-300/50"
                }`}
            >
              Xe ghép ({routes.filter((r) => r.category === "xeghep").length})
            </button>
            <button
              onClick={() => handleTabChange("all")}
              className={`px-4 sm:px-7 py-2 sm:py-3 rounded-full transition-all duration-300 ${activeTab === "all"
                ? "bg-white text-[#00355f] shadow-md font-extrabold scale-[1.02]"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-300/50"
                }`}
            >
              Tất cả ({routes.length})
            </button>
          </div>
        </ScrollReveal>

        {/* 2 Columns on Mobile, 3 on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 min-h-[300px] mt-6 sm:mt-8 mx-auto w-full">
          {paginatedRoutes.map((route, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.08}>
              <div
                onClick={() => onOpenBookingModal(`${route.from} - ${route.to}`)}
                className="group relative overflow-hidden bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,53,95,0.06)] hover:shadow-[0_12px_30px_rgba(0,53,95,0.12)] transition-all duration-300 flex flex-col justify-between cursor-pointer hover-lift h-full"
              >
                <div>
                  {/* Top Tags Layer floating above image */}
                  <div className="relative z-20 flex items-center justify-between mb-2 sm:mb-3">
                    <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 sm:py-1 rounded-full border ${route.tagColor} shadow-sm bg-opacity-90`}>
                      {route.tag}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform shrink-0 drop-shadow-sm" />
                  </div>

                  {/* Landscape Image Background with Floating Glass Departure Box */}
                  <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 min-h-[145px] sm:min-h-[160px] p-2.5 sm:p-3.5 flex items-start pt-3 sm:pt-4 shadow-inner group">
                    {/* Background Landscape Image */}
                    <Image
                      src="/images/background_card.png"
                      alt={route.to}
                      fill
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    {/* Soft Sky & Road Gradient Fade to White at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/90 pointer-events-none" />

                    {/* Floating Glassmorphism Departure Box */}
                    <div className="relative z-10 w-[86%] sm:w-fit sm:pr-4 bg-white/30 backdrop-blur-sm p-2 sm:p-3 rounded-[14px] border border-white/40 shadow-sm space-y-0.5 mt-1 sm:mt-1.5">
                      {/* Origin */}
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00355f] shrink-0" />
                        <span className="font-extrabold text-slate-900 text-xs sm:text-sm truncate">
                          {route.from}
                        </span>
                      </div>

                      {/* Vertical Connector Line */}
                      <div className="flex items-center text-slate-300 ml-1.5 sm:ml-2 py-0.5">
                        <span className="text-[10px] sm:text-xs">|</span>
                        <ArrowDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400 ml-1" />
                      </div>

                      {/* Destination */}
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-orange shrink-0" />
                        <span className="font-black text-slate-900 text-xs sm:text-sm truncate">
                          {route.to}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price & Features & Call Action Section */}
                <div className="relative z-10">
                  <div className="text-[11px] sm:text-xs text-slate-400 font-bold tracking-wider mb-0.5">
                    {route.categoryLabel}
                  </div>

                  <div className="flex items-baseline gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                    <span className="text-base sm:text-2xl font-black text-[#00355f] group-hover:text-accent-orange transition-colors whitespace-nowrap">
                      {route.price}
                    </span>
                    <span className="text-[9px] sm:text-xs font-bold text-slate-500 whitespace-nowrap">
                      {route.unit}
                    </span>
                  </div>

                  {/* 3 Trust Features Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 py-2 my-2 border-t border-b border-slate-100 text-[10px] sm:text-xs font-bold text-slate-600">
                    <div className="flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00355f] shrink-0" />
                      <span>An toàn</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 border-l border-slate-200/80">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00355f] shrink-0" />
                      <span>Đúng giờ</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 col-span-2 sm:col-span-1 pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l border-slate-200/80">
                      <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00355f] shrink-0" />
                      <span>Tiện lợi</span>
                    </div>
                  </div>

                  {/* Call Button - Full Width Navy Bar */}
                  <button
                    className="w-full py-2.5 sm:py-3.5 px-3 rounded-xl bg-[#00355f] group-hover:bg-[#002545] text-white text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all shadow-md btn-shine-effect mt-2 active:scale-98"
                  >
                    <PhoneCall className="w-4 h-4 shrink-0" />
                    <span className="truncate">Đặt chuyến</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pagination Controls Bar */}
        {totalPages > 1 && (
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
              {/* Previous Page Button */}
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="p-2 sm:px-3 sm:py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs sm:text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors flex items-center gap-1 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Trang trước</span>
              </button>

              {/* Page Number Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs sm:text-sm font-bold transition-all ${currentPage === page
                    ? "bg-[#00355f] text-white shadow-md scale-105"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                    }`}
                >
                  {page}
                </button>
              ))}

              {/* Next Page Button */}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className="p-2 sm:px-3 sm:py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs sm:text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors flex items-center gap-1 shadow-sm"
              >
                <span className="hidden sm:inline">Trang sau</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
}

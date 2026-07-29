"use client";

import React, { useState } from "react";
import { MapPin, PhoneCall, ArrowDown, Sparkles, ChevronRight, ChevronLeft } from "lucide-react";

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
  const [activeTab, setActiveTab] = useState<"all" | "xeghep" | "taxi">("all");
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
      price: "150.000đ",
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
    <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 bg-slate-50/50 border-b border-slate-200/60" id="routes">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-desktop">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
          <h2 className="typo-h1 text-[#00355f] text-2xl sm:text-4xl font-extrabold tracking-tight">
            Tuyến đường phổ biến
          </h2>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl self-start sm:self-auto text-xs font-bold">
            <button
              onClick={() => handleTabChange("all")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === "all"
                  ? "bg-white text-[#00355f] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Tất cả ({routes.length})
            </button>
            <button
              onClick={() => handleTabChange("xeghep")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === "xeghep"
                  ? "bg-white text-[#00355f] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Xe ghép (5)
            </button>
            <button
              onClick={() => handleTabChange("taxi")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === "taxi"
                  ? "bg-white text-[#00355f] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Taxi trọn chuyến (8)
            </button>
          </div>
        </div>

        {/* 2 Columns on Mobile, 3 Columns on Tablet & Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6 min-h-[300px]">
          {paginatedRoutes.map((route, idx) => (
            <div
              key={idx}
              onClick={() => onOpenBookingModal(`${route.from} - ${route.to}`)}
              className="group bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border border-slate-200/90 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Route Tag */}
                <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                  <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border ${route.tagColor}`}>
                    {route.tag}
                  </span>
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500/70 group-hover:text-amber-500 transition-colors shrink-0" />
                </div>

                {/* Departure & Destination Details */}
                <div className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-5 bg-slate-50/80 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-100">
                  {/* Origin */}
                  <div className="flex items-center gap-1.5 sm:gap-2.5">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                    <span className="font-bold text-slate-800 text-xs sm:text-base group-hover:text-primary transition-colors truncate">
                      {route.from}
                    </span>
                  </div>

                  {/* Vertical Connector Line */}
                  <div className="pl-1 sm:pl-1.5 flex items-center gap-1 text-slate-400">
                    <div className="w-0.5 h-2.5 sm:h-3 bg-slate-300" />
                    <ArrowDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400" />
                  </div>

                  {/* Destination */}
                  <div className="flex items-center gap-1.5 sm:gap-2.5">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-orange shrink-0" />
                    <span className="font-extrabold text-slate-900 text-xs sm:text-base truncate">
                      {route.to}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price & Call Action Section */}
              <div className="pt-2 sm:pt-3 border-t border-slate-100">
                <div className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-0.5 sm:mb-1">
                  {route.categoryLabel}
                </div>
                
                <div className="flex items-baseline gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                  <span className="text-base sm:text-2xl font-black text-[#00355f] group-hover:text-accent-orange transition-colors">
                    {route.price}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-500">
                    {route.unit}
                  </span>
                </div>

                {/* Call Button - Clean Full Width Bar */}
                <button
                  className="w-full py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl bg-primary group-hover:bg-accent-orange text-white text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1 sm:gap-2 transition-all shadow-sm"
                >
                  <PhoneCall className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span className="truncate">Đặt chuyến</span>
                  <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Pagination Controls Bar */}
        {totalPages > 1 && (
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
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  currentPage === page
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
        )}

      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { Navigation, CheckCircle2, ShieldCheck } from "lucide-react";

interface CoverageMapProps {
  onOpenBookingModal?: (data?: Record<string, unknown> | string) => void;
}

export default function CoverageMap({ onOpenBookingModal }: CoverageMapProps) {
  const [activeRegionId, setActiveRegionId] = useState<string>("central");

  const regions = [
    {
      id: "central",
      name: "Quảng Ngãi & Miền Trung",
      badge: "Khu Vực Trọng Điểm Phục Vụ 24/7",
      routes: [
        { from: "Sân bay Chu Lai", to: "TP. Quảng Ngãi", dist: "~40 km", time: "35 - 40 phút" },
        { from: "TP. Quảng Ngãi", to: "Cảng Sa Kỳ (Lý Sơn)", dist: "~22 km", time: "25 - 30 phút" },
        { from: "Quảng Ngãi", to: "Sân bay Đà Nẵng", dist: "~130 km", time: "90 - 100 phút" }
      ],
      mapEmbedUrl: "https://maps.google.com/maps?q=Th%C3%A0nh+ph%E1%BB%91+Qu%E1%BA%A3ng+Ng%C3%A3i&t=&z=10&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: "south",
      name: "TP. Hồ Chí Minh & Miền Nam",
      badge: "Sân Bay Tân Sơn Nhất & Liên Tỉnh",
      routes: [
        { from: "Tân Sơn Nhất", to: "Trung tâm TP.HCM", dist: "~8 - 15 km", time: "20 - 35 phút" },
        { from: "Sân bay Cam Ranh", to: "Nha Trang", dist: "~35 km", time: "35 - 40 phút" }
      ],
      mapEmbedUrl: "https://maps.google.com/maps?q=S%C3%A2n+bay+T%C3%A2n+S%C6%A1n+Nh%E1%BA%A5t&t=&z=11&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: "north",
      name: "Hà Nội & Miền Bắc",
      badge: "Sân Bay Nội Bài & Chuyến Tỉnh",
      routes: [
        { from: "Sân bay Nội Bài", to: "Trung tâm Hà Nội", dist: "~28 km", time: "30 - 45 phút" }
      ],
      mapEmbedUrl: "https://maps.google.com/maps?q=S%C3%A2n+bay+N%E1%BB%99i+B%C3%A0i&t=&z=11&ie=UTF8&iwloc=&output=embed"
    }
  ];

  const currentRegion = regions.find((r) => r.id === activeRegionId) || regions[0];

  return (
    <section id="coverage-map" className="py-16 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-desktop">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="typo-h1 text-[#00355f] mb-2 text-3xl sm:text-5xl sm:whitespace-nowrap">
            Mạng Lưới Phục Vụ 24/7
          </h2>
          <p className="typo-lead text-slate-500 font-normal text-sm sm:text-base">
            Đón trả tận nhà tại <strong className="text-primary font-bold">TP. Quảng Ngãi, Sân bay Chu Lai, Cảng Sa Kỳ (Lý Sơn)</strong> & toàn quốc.
          </p>
        </div>

        {/* Region Pill Tabs Selection */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {regions.map((region) => {
            const isActive = region.id === activeRegionId;
            return (
              <button
                key={region.id}
                onClick={() => setActiveRegionId(region.id)}
                className={`px-5 py-2.5 rounded-full typo-btn text-sm transition-all duration-300 flex items-center gap-2 border ${
                  isActive
                    ? "bg-[#00355f] text-white border-[#00355f] shadow-md scale-105"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-primary"
                }`}
              >
                <Navigation className={`w-3.5 h-3.5 ${isActive ? "text-accent-orange" : "text-slate-400"}`} />
                <span>{region.name}</span>
              </button>
            );
          })}
        </div>

        {/* Expanded Full-Width Interactive Google Map Container */}
        <div className="relative w-full h-[500px] sm:h-[560px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white group">
          
          {/* Google Map Embed Iframe */}
          <iframe
            title={`Bản đồ vị trí ${currentRegion.name}`}
            src={currentRegion.mapEmbedUrl}
            className="w-full h-full border-0 contrast-105"
            loading="lazy"
            allowFullScreen
          />

          {/* Map Top Floating Overlay Status Bar */}
          <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md text-xs sm:text-sm text-slate-800">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-bold text-slate-900">{currentRegion.name}</span>
              <span className="hidden sm:inline text-slate-400">•</span>
              <span className="hidden sm:inline text-slate-600">{currentRegion.badge}</span>
            </div>
            
            <div className="flex items-center gap-4 text-slate-700 font-medium">
              <span className="hidden md:flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Đúng hẹn 100%
              </span>
              <span className="hidden md:flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-primary" /> Giá công khai
              </span>
              <button
                onClick={() => onOpenBookingModal && onOpenBookingModal("Đặt Xe Từ Bản Đồ")}
                className="px-4 py-2 rounded-xl bg-accent-orange text-white font-bold typo-badge hover:brightness-110 transition-all shadow-md active:scale-95"
              >
                Đặt xe ngay
              </button>
            </div>
          </div>

          {/* Map Bottom Floating Routes Overlay */}
          <div className="absolute bottom-4 left-4 right-4 z-10 bg-slate-900/90 text-white backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="typo-badge text-accent-orange flex items-center gap-1.5">
                <Navigation className="w-4 h-4" />
                <span>TUYẾN XE PHỔ BIẾN & THỜI GIAN DỰ KIẾN</span>
              </div>
              <div className="hidden sm:block text-xs text-slate-300">
                Hotline hỗ trợ 24/7: <strong className="text-white">098x xxx xxx</strong>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentRegion.routes.map((route, rIdx) => (
                <div key={rIdx} className="p-3 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">{route.from} ⇄ {route.to}</div>
                    <div className="text-accent-orange font-semibold">{route.dist} • {route.time}</div>
                  </div>
                  <button
                    onClick={() => onOpenBookingModal && onOpenBookingModal(`${route.from} - ${route.to}`)}
                    className="px-2.5 py-1 rounded-lg bg-white/20 hover:bg-accent-orange text-white typo-badge transition-colors"
                  >
                    Đặt
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

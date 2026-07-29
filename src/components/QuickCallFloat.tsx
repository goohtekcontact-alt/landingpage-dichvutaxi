"use client";

import React from "react";
import Image from "next/image";
import { PhoneCall, Zap } from "lucide-react";

interface QuickCallFloatProps {
  onOpenBookingModal: () => void;
}

export default function QuickCallFloat({ onOpenBookingModal }: QuickCallFloatProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end pointer-events-none">
      {/* Quick Call Action Trigger */}
      <button
        onClick={onOpenBookingModal}
        className="pointer-events-auto group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-primary text-white shadow-xl shadow-primary/30 hover:scale-110 active:scale-95 transition-all duration-300"
        title="Bấm để gọi đặt xe"
      >
        <Zap className="w-6 h-6 text-amber-400 group-hover:rotate-12 transition-transform" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Gọi đặt xe 24/7
        </span>
      </button>

      {/* Official Zalo Logo Button */}
      <a
        href="https://zalo.me"
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0068ff] text-white shadow-xl shadow-blue-500/40 hover:scale-110 active:scale-95 transition-all duration-300 p-2.5"
        title="Chat Zalo 24/7"
      >
        <Image
          src="/images/zalo_official_icon.png"
          alt="Zalo Chat"
          width={44}
          height={44}
          className="group-hover:scale-110 transition-transform object-contain"
        />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat Zalo 24/7
        </span>
      </a>

      {/* Hotline Direct Phone Button */}
      <a
        href="tel:0981234567"
        className="pointer-events-auto group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
        title="Gọi điện tổng đài"
      >
        {/* Pulsating Radar Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
        
        <PhoneCall className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Gọi 098x xxx xxx
        </span>
      </a>
    </div>
  );
}

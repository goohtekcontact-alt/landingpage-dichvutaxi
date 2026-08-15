"use client";

import React from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";

export default function QuickCallFloat() {
  return (
    <div className="fixed bottom-20 right-4 sm:bottom-28 sm:right-6 z-50 flex flex-col gap-5 sm:gap-6 items-end pointer-events-none">
      {/* Hotline Direct Phone Button */}
      <a
        href="tel:02558999976"
        className="pointer-events-auto group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
        title="Gọi điện tổng đài"
      >
        {/* Pulsating Radar Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
        
        <PhoneCall className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Gọi 0255 89999 76
        </span>
      </a>

      {/* Official Zalo Logo Button */}
      <a
        href="https://zalo.me/0931386786"
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl shadow-blue-500/40 hover:scale-110 active:scale-95 transition-all duration-300 overflow-hidden animate-float-slow"
        title="Chat Zalo 24/7"
      >
        <Image
          src="/images/zalo_official_icon.png"
          alt="Zalo Chat"
          width={56}
          height={56}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
        />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat Zalo 0931 386 786
        </span>
      </a>
    </div>
  );
}

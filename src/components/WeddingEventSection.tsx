"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function WeddingEventSection() {
  return (
    <section className="py-10 sm:py-16 bg-slate-50/70 border-t border-b border-slate-200/60 relative overflow-hidden" id="wedding-event">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-desktop">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
            <h2 className="typo-h1 text-[#00355f] sm:whitespace-nowrap">
              Đặt Xe Đám Tiệc &amp; Hội Nghị
            </h2>
          </div>
        </ScrollReveal>

        {/* Clean Centered Image Banner */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-[300px] sm:h-[480px] lg:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 group">
              <Image
                src="/images/dat_xe_dam_tiec.png"
                alt="Dịch vụ đặt xe đám tiệc & xe hội nghị Taxi Tour 76"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

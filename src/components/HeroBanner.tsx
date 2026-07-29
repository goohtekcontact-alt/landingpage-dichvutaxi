"use client";

import React from "react";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white">
      <div className="w-full relative">
        <Image
          src="/images/image_hero.png"
          alt="Taxi Tour 76 - Hero Banner"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
}

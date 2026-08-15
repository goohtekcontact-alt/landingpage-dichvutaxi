"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  alt: string;
}

export default function HeroBanner() {
  const slides: Slide[] = [
    {
      id: 1,
      image: "/images/background_card.png",
      alt: "Taxi Tour 76 - Hero Banner 1"
    },
    {
      id: 2,
      image: "/images/hero_section_2.png",
      alt: "Taxi Tour 76 - Hero Banner 2"
    },
    {
      id: 3,
      image: "/images/hero_image.png",
      alt: "Taxi Tour 76 - Hero Banner 3"
    },
    {
      id: 4,
      image: "/images/dat_xe_dam_tiec.png",
      alt: "Taxi Tour 76 - Xe Đám Tiệc"
    },
    {
      id: 5,
      image: "/images/image_section_carausel.png",
      alt: "Taxi Tour 76 - Hero Banner 5"
    },
    {
      id: 6,
      image: "/images/image_section_carausel_1.png",
      alt: "Taxi Tour 76 - Hero Banner 6"
    },
    {
      id: 7,
      image: "/images/image_section_carausel_2.png",
      alt: "Taxi Tour 76 - Hero Banner 7"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Autoplay interval timer (3.2 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch Swipe Handling for Mobile Devices
  const minSwipeDistance = 50;

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-white group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Clean Responsive Image Carousel matching original Hero 1920x1080 aspect ratio */}
      <div className="w-full relative aspect-[1920/1080]">
        
        {/* Background Image Carousel with Crisp Fast Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0 overflow-hidden"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.alt}
              fill
              priority
              className="object-cover object-center w-full h-full transition-transform duration-[6000ms] ease-out"
            />
          </motion.div>
        </AnimatePresence>



        {/* Carousel Previous / Next Navigation Arrows (Desktop & Tablet) */}
        <button
          onClick={prevSlide}
          aria-label="Slide trước"
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/30 hover:bg-slate-900/70 text-white backdrop-blur-sm border border-white/20 items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Slide tiếp theo"
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/30 hover:bg-slate-900/70 text-white backdrop-blur-sm border border-white/20 items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Pagination Dots Bar at Bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/40 backdrop-blur-sm border border-white/10 shadow-md">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Chuyển đến slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? "w-7 h-2 bg-[#00355f] shadow-md"
                  : "w-2 h-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

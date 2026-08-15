"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenBookingModal: (data?: Record<string, unknown> | string) => void;
}

const NAV_ITEMS = [
  { id: "home", label: "Trang chủ" },
  { id: "routes", label: "Tuyến đường" },
  { id: "services", label: "Dịch vụ" },
  { id: "fleet", label: "Đội xe" },
  { id: "reviews", label: "Đánh giá" },
];

export default function Navbar({ onOpenBookingModal }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    setTimeout(() => {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_ITEMS[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm py-1"
    >
      <nav className="relative flex justify-between items-center max-w-container-max mx-auto px-4 sm:px-margin-desktop h-20">
        {/* Left Side: Mobile Menu Button & Desktop Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-primary hover:bg-slate-100/80 active:scale-90 transition-all"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={mobileMenuOpen ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                className="material-symbols-outlined text-2xl block"
              >
                {mobileMenuOpen ? "close" : "menu"}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Desktop Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="hidden md:flex items-center gap-2 group"
          >
            <Image
              src="/images/logo.png"
              alt="Taxi Tour 76 Logo"
              width={220}
              height={75}
              className="h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </a>
        </div>

        {/* Center Logo on Mobile */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group w-max"
        >
          <Image
            src="/images/logo.png"
            alt="Taxi Tour 76 Logo"
            width={200}
            height={70}
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
          <span className="text-[9px] sm:text-[10px] text-[#00355f] font-medium mt-0.5 text-center leading-tight whitespace-nowrap">
            Cảm ơn Quý Khách đã tin tưởng<br />và đồng hành cùng Taxitour 76
          </span>
        </a>

        {/* Right Side: Desktop Navigation Links & Action Button */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-sans">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-sm lg:text-base font-bold tracking-wide transition-all duration-300 px-3.5 py-1.5 rounded-full ${
                    isActive
                      ? "bg-[#00355f] text-white font-extrabold shadow-sm"
                      : "text-slate-700 hover:text-[#00355f] hover:bg-slate-100/60"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <button
            onClick={() => onOpenBookingModal()}
            className="bg-accent-orange text-white px-3 sm:px-6 py-1 sm:py-2.5 rounded-full text-xs sm:text-base font-bold hover:brightness-110 active:scale-95 transition-all shadow-md ml-auto btn-shine-effect animate-pulse-glow whitespace-nowrap"
          >
            Đặt xe
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white/95 border-b border-slate-200/90 px-5 py-4 space-y-2 backdrop-blur-xl shadow-2xl font-sans overflow-hidden"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-base font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[#00355f] text-white font-extrabold shadow-md"
                      : "text-slate-700 hover:text-[#00355f] hover:bg-slate-100/80"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-accent-orange shadow-sm" />
                  )}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-100">
              <a
                href="tel:02558999976"
                className="flex items-center justify-center gap-2.5 w-full py-3 bg-[#00355f] text-white text-base rounded-xl font-extrabold shadow-lg active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-xl">call</span>
                <span>Hotline: 0255 89999 76</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

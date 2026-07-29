"use client";

import React, { useState, useEffect } from "react";

interface NavbarProps {
  onOpenBookingModal: (data?: Record<string, unknown> | string) => void;
}

export default function Navbar({ onOpenBookingModal }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const sections = ["home", "services", "fleet", "about", "reviews", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-1" : "bg-transparent py-2"
      }`}>
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-4 sm:px-margin-desktop h-20">
        {/* Left Side: Mobile Menu Toggle (≡) & "Đặt xe ngay" Button (No Icon) */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-primary hover:bg-surface-container"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>

          <button
            onClick={() => onOpenBookingModal()}
            className="hidden sm:inline-block bg-accent-orange text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold hover:brightness-110 active:scale-95 transition-all shadow-md"
          >
            Đặt xe ngay
          </button>
        </div>

        {/* Desktop Navigation Links with Refined Font Style */}
        <div className="hidden md:flex items-center space-x-8 font-sans">
          <a
            href="#home"
            className={`text-base font-semibold tracking-wide transition-all duration-300 ${activeSection === "home"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-slate-800 hover:text-primary"
              }`}
          >
            Trang chủ
          </a>
          <a
            href="#services"
            className={`text-base font-semibold tracking-wide transition-all duration-300 ${activeSection === "services"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-slate-800 hover:text-primary"
              }`}
          >
            Dịch vụ
          </a>
          <a
            href="#fleet"
            className={`text-base font-semibold tracking-wide transition-all duration-300 ${activeSection === "fleet"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-slate-800 hover:text-primary"
              }`}
          >
            Đội xe
          </a>
          <a
            href="#about"
            className={`text-base font-semibold tracking-wide transition-all duration-300 ${activeSection === "about"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-slate-800 hover:text-primary"
              }`}
          >
            Giới thiệu
          </a>
          <a
            href="#reviews"
            className={`text-base font-semibold tracking-wide transition-all duration-300 ${activeSection === "reviews"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-slate-800 hover:text-primary"
              }`}
          >
            Đánh giá
          </a>
          <a
            href="#contact"
            className={`text-base font-semibold tracking-wide transition-all duration-300 ${activeSection === "contact"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-slate-800 hover:text-primary"
              }`}
          >
            Liên hệ
          </a>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-b border-slate-200 px-6 py-4 space-y-3 backdrop-blur-lg shadow-xl font-sans">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-primary text-base font-bold hover:text-accent-orange"
          >
            Trang chủ
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 text-base font-semibold hover:text-primary"
          >
            Dịch vụ
          </a>
          <a
            href="#fleet"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 text-base font-semibold hover:text-primary"
          >
            Đội xe
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 text-base font-semibold hover:text-primary"
          >
            Giới thiệu
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 text-base font-semibold hover:text-primary"
          >
            Đánh giá
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 text-base font-semibold hover:text-primary"
          >
            Liên hệ
          </a>
          <div className="pt-2 border-t border-slate-100">
            <a
              href="tel:0988789999"
              className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white text-base rounded-xl font-bold"
            >
              <span className="material-symbols-outlined text-xl">call</span>
              <span>Hotline đặt xe 24/7</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

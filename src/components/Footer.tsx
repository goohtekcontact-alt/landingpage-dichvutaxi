"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Car } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#05182c] text-slate-300 pt-12 sm:pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-desktop">
        
        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-400 flex items-center justify-center text-white shadow-md shrink-0">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-lg tracking-tight leading-none">
                  Taxi Tour 76
                </h3>
                <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">
                  Taxi &amp; Xe ghép
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Taxi Tour 76 cung cấp dịch vụ Taxi và Xe ghép chất lượng cao, an toàn, tiện lợi và tiết kiệm cho mọi hành trình.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              {/* Facebook SVG */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram SVG */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* TikTok SVG */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.22V8.2a6.34 6.34 0 0 0-5.1 6.16 6.34 6.34 0 1 0 11.44-3.76 8.3 8.3 0 0 0 3.77.92V8.04a4.8 4.8 0 0 1-.68-.04 border-none" />
                </svg>
              </a>

              {/* Youtube SVG */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Youtube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Dịch vụ */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wide">Dịch vụ</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Taxi 4 chỗ</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Taxi 7 chỗ</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Xe ghép</a></li>
              <li><a href="#routes" className="hover:text-white transition-colors">Đưa đón sân bay</a></li>
              <li><a href="#fleet" className="hover:text-white transition-colors">Thuê xe theo tour</a></li>
            </ul>
          </div>

          {/* Column 3: Hỗ trợ */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wide">Hỗ trợ</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#faq" className="hover:text-white transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a></li>
            </ul>
          </div>

          {/* Column 4: Thông tin liên hệ */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wide">Thông tin liên hệ</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:0981234567" className="hover:text-white transition-colors font-bold text-slate-200">
                  0981 234 567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate">hotro@dichvutaxitour76.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>TP. Quảng Ngãi, Tỉnh Quảng Ngãi</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Đăng ký nhận ưu đãi */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wide">Đăng ký nhận ưu đãi</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Nhận thông tin khuyến mãi mới nhất từ Taxi Tour 76
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800 rounded-xl text-emerald-400 text-xs font-semibold">
                ✓ Đăng ký thành công! Cảm ơn bạn.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập email của bạn"
                  className="w-full bg-[#0a233f] border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-md active:scale-95"
                >
                  Đăng ký
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 text-center text-xs text-slate-500">
          <p>© 2026 Taxi Tour 76. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

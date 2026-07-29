"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-dim pt-section-gap pb-20 border-t border-surface-variant text-on-surface">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-headline-sm text-headline-sm font-bold text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl text-secondary-container">local_taxi</span>
              <span>Taxi Tour 76</span>
            </div>
            <p className="text-on-surface-variant font-body-md mb-8 leading-relaxed">
              Dịch vụ Taxi Tour 76 - Xe taxi riêng, xe ghép đi tỉnh, taxi sân bay và xe du lịch hợp đồng uy tín, an toàn và minh bạch. Website: <strong className="text-primary">dichvutaxitour76.com</strong>.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                href="#"
                title="Facebook"
              >
                <span className="material-symbols-outlined">qr_code_2</span>
              </a>
              <a
                className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                href="#"
                title="Share"
              >
                <span className="material-symbols-outlined">share</span>
              </a>
              <a
                className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                href="#"
                title="Email"
              >
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-primary mb-6 text-base uppercase tracking-wider">Link nhanh</h4>
            <ul className="space-y-4 text-on-surface-variant font-label-md">
              <li><a className="hover:text-secondary-container transition-colors" href="#services">Dịch vụ</a></li>
              <li><a className="hover:text-secondary-container transition-colors" href="#routes">Bảng giá</a></li>
              <li><a className="hover:text-secondary-container transition-colors" href="#fleet">Đội xe</a></li>
              <li><a className="hover:text-secondary-container transition-colors" href="#about">Giới thiệu</a></li>
              <li><a className="hover:text-secondary-container transition-colors" href="#reviews">Đánh giá</a></li>
              <li><a className="hover:text-secondary-container transition-colors" href="#contact">Liên hệ</a></li>
            </ul>
          </div>

          {/* Dịch vụ */}
          <div>
            <h4 className="font-bold text-primary mb-6 text-base uppercase tracking-wider">Dịch vụ nổi bật</h4>
            <ul className="space-y-4 text-on-surface-variant font-label-md">
              <li><a className="hover:text-secondary-container transition-colors" href="#services">Đưa đón sân bay Nội Bài / Tân Sơn Nhất</a></li>
              <li><a className="hover:text-secondary-container transition-colors" href="#services">Taxi nội thành giá rẻ</a></li>
              <li><a className="hover:text-secondary-container transition-colors" href="#services">Xe ghép đi tỉnh đưa đón tận nhà</a></li>
              <li><a className="hover:text-secondary-container transition-colors" href="#services">Xe hợp đồng du lịch 4-7-16 chỗ</a></li>
              <li><a className="hover:text-secondary-container transition-colors" href="#services">Xe Limousine thương gia cao cấp</a></li>
            </ul>
          </div>

          {/* Liên hệ nhanh */}
          <div>
            <h4 className="font-bold text-primary mb-6 text-base uppercase tracking-wider">Hỗ trợ 24/7</h4>
            <div className="space-y-4 text-on-surface-variant text-sm">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">phone</span>
                <span className="font-bold text-primary text-base">+84 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span>lienhe@dichvutaxitour76.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>TP. Quảng Ngãi &amp; Phục vụ toàn quốc</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-surface-variant flex flex-col sm:flex-row items-center justify-between text-xs text-on-surface-variant gap-4">
          <p>© 2026 Taxi Tour 76 - dichvutaxitour76.com. All rights reserved.</p>
          <p>Dịch vụ vận tải xe taxi &amp; xe ghép uy tín hàng đầu</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Record<string, unknown> | null;
}

export default function BookingModal({ isOpen, onClose, initialData }: BookingModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    pickup: "",
    dropoff: "",
    vehicleType: "Xe 4 chỗ Sedan",
    datetime: ""
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        fullName: (initialData.fullName as string) || prev.fullName,
        phone: (initialData.phone as string) || prev.phone,
        pickup: (initialData.pickup as string) || (initialData.route as string) || prev.pickup,
        dropoff: (initialData.dropoff as string) || prev.dropoff,
        vehicleType: (initialData.vehicleType as string) || (initialData.serviceType as string) || prev.vehicleType
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-surface-variant p-6 sm:p-8 shadow-2xl text-on-surface">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6 space-y-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">local_taxi</span>
                <span className="typo-badge text-primary">
                  Đặt Xe Trực Tuyến 24/7
                </span>
              </div>
              <h3 className="typo-h2 text-primary">
                Taxi Tour 76
              </h3>
              <p className="typo-caption text-on-surface-variant">
                Vui lòng điền thông tin chuyến đi. Điều hành viên sẽ báo giá chi tiết và hỗ trợ ngay trong 3 phút.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-on-surface-variant mb-1">
                    Họ & Tên *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Tên của bạn"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-surface-variant text-on-surface text-sm focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-on-surface-variant mb-1">
                    Số Điện Thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="098x xxx xxx"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-surface-variant text-on-surface text-sm focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-on-surface-variant mb-1">
                  Điểm Đón *
                </label>
                <input
                  type="text"
                  required
                  value={formData.pickup}
                  onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                  placeholder="Địa chỉ nhà / Sân bay / Tỉnh thành..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-surface-variant text-on-surface text-sm focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-on-surface-variant mb-1">
                  Điểm Đến *
                </label>
                <input
                  type="text"
                  required
                  value={formData.dropoff}
                  onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
                  placeholder="Địa chỉ điểm đến / Tỉnh thành..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-surface-variant text-on-surface text-sm focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-on-surface-variant mb-1">
                    Ngày giờ đón
                  </label>
                  <input
                    type="datetime-local"
                    value={formData.datetime}
                    onChange={(e) => setFormData({ ...formData, datetime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-surface-variant text-on-surface text-sm focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-on-surface-variant mb-1">
                    Loại Xe
                  </label>
                  <select
                    value={formData.vehicleType}
                    onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low border border-surface-variant text-on-surface text-sm focus:ring-2 focus:ring-primary outline-none cursor-pointer"
                  >
                    <option>Xe 4 chỗ Sedan</option>
                    <option>Xe 7 chỗ SUV</option>
                    <option>Sedan hạng sang</option>
                    <option>Xe Limousine / Van</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-accent-orange text-white font-bold text-base hover:brightness-110 active:scale-[0.98] transition-all shadow-xl mt-2 flex items-center justify-center gap-2"
              >
                <span>Nhận Báo Giá &amp; Xác Nhận Chuyến</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-primary">
                Yêu Cầu Đã Gửi Thành Công!
              </h3>
              <p className="text-sm text-on-surface-variant max-w-sm mx-auto">
                Cảm ơn bạn <strong className="text-primary">{formData.fullName || "Quý khách"}</strong>. Bộ phận điều xe sẽ liên hệ lại theo số <strong className="text-accent-orange">{formData.phone}</strong> ngay lập tức.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low text-xs text-on-surface text-left space-y-1">
              <p className="font-bold text-primary">Thông tin đặt xe:</p>
              <p>📍 Điểm đón: {formData.pickup || "Theo yêu cầu"}</p>
              <p>📍 Điểm đến: {formData.dropoff || "Theo yêu cầu"}</p>
              <p>🚘 Loại xe: {formData.vehicleType}</p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href="tel:+84123456789"
                className="w-full py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">call</span>
                <span>Gọi Tổng Đài Hotline: +84 123 456 789</span>
              </a>

              <button
                onClick={handleClose}
                className="w-full py-2.5 rounded-xl bg-surface-container-high text-on-surface text-xs font-semibold"
              >
                Đóng
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

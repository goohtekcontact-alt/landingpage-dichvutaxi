"use client";

import React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      q: "Làm thế nào để tôi liên hệ đặt xe?",
      a: "Quý khách chỉ cần gọi điện thoại trực tiếp đến Hotline 0255 899 9976 hoặc Zalo 0931 386 786. Điều hành viên của Taxi Tour 76 sẽ báo giá trọn gói và điều xe đến đón bạn trong 5 - 15 phút."
    },
    {
      q: "Giá báo có phải là trọn gói không?",
      a: "Vâng, tất cả báo giá taxi riêng, xe ghép hay xe đưa đón sân bay của chúng tôi đều là giá trọn gói đã bao gồm phí cầu đường, bến bãi. Cam kết 100% không phát sinh chi phí ngoài dự kiến!"
    },
    {
      q: "Nếu chuyến bay của tôi bị trễ thì sao?",
      a: "Chúng tôi luôn chủ động theo dõi thời gian hạ cánh của chuyến bay theo thời gian thực. Tài xế sẽ chờ sẵn đón bạn tại sảnh sân bay mà không thu thêm chi phí chờ đợi trong 60 phút đầu tiên."
    },
    {
      q: "Taxi Tour 76 phục vụ ở những khu vực nào?",
      a: "Chúng tôi phục vụ đón trả tận nhà 24/7 tại TP. Quảng Ngãi, Sân bay Chu Lai, Cảng Sa Kỳ (đi đảo Lý Sơn), Đà Nẵng, Quy Nhơn và kết nối tất cả các tỉnh thành trên toàn quốc."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 max-w-4xl mx-auto px-4 sm:px-margin-desktop" id="faq">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-6 sm:mb-12">
        <h2 className="typo-h1 text-[#00355f] mb-2 sm:mb-3">
          Câu hỏi thường gặp
        </h2>
        <p className="typo-body text-slate-500 text-sm sm:text-base hidden sm:block">
          Giải đáp những thắc mắc phổ biến về dịch vụ xe taxi & xe ghép của chúng tôi.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300"
          >
            <summary className="flex justify-between items-center font-bold text-base sm:text-lg text-slate-900 list-none select-none font-sans">
              <span className="flex items-center gap-3 pr-4">
                <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                <span>{faq.q}</span>
              </span>
              <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
            </summary>
            <div className="mt-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

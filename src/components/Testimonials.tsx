"use client";

import React from "react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Minh Nguyễn",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDRXpse00xXhkXPZ1_T3axsolJJa1GaNlZxZc1AGwtALJaLYTzKh-1BoniQD_S4QN5T2xz9IGRv2lIIDyXcbHuwnaXvnvdOulXoXgQX3Uum9L-SYdOxYJCRQ1EFwnPl_nm5xicvy-bxD8nFmmyxXKKp9r-2EqrJuxrA2gqpZ01sdhyebAlrFTeBqJckXIwaXOCwri5STeqCzWiRaDftvV8k8JvsNs_i7Sb1uOXm6E73NytfrKGDzmGv",
      comment:
        "Dịch vụ tuyệt vời! Tài xế đúng giờ, xe sạch sẽ và giá cả đúng như báo giá. Rất hài lòng cho các chuyến đi sân bay."
    },
    {
      name: "Sarah Jenkins",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCJoHFIQOpnh9UuGR4DNIIXhB8bS4iJmD6WyDAbynJWL1252jquY81SaBskPJCYS3spuqEdWzXjB2Z6cPREdJ18dUCnid_caNvOvJtGVm1YzB1J8rJWH1_3btaH6CpBy-bmibeDshZ6aqTUTJ8xv8_oFSdANzMgicb7-6E2zbqIlifrJQrddiGJ58sQIT2x65gManOXRx-E7n_c81mtRpDbLzanXUglKDRTYmtwvY9_fDd1hgBsg8Cw",
      comment:
        "Là phụ nữ đi du lịch một mình, tôi cảm thấy hoàn toàn an toàn. Dịch vụ xe ghép là một sự thay đổi lớn cho việc đi lại giữa các tỉnh ở Việt Nam!"
    },
    {
      name: "Gia đình bác Trần",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAlWdcIPEQn4u0ad_R6HF_O0K91kCcro_uJHWggjTPzWvtuYNkc8rWCp_W6z95dDUurlMaJ-B0a7tmZ9szFqld4A2XYle9deDWAJ8ZdLVKl7hBTZJ9z7-9JKOdo5dG_s24K2pxXCrlG4MEoW26RDamavHZTludRh8WCAkTcNtlC7QeBpxxb9XV7rCwoeKbfBQsDwKMOOGcDfF_vKqlw69vat0OXINmM2C_yDtKqtXZDs_PITuY1EzhZ",
      comment:
        "Chúng tôi đặt xe cho chuyến đi gia đình đến Sapa. Xe cực kỳ thoải mái cho quãng đường dài và tài xế lái xe rất điềm đạm, an toàn."
    }
  ];

  return (
    <section className="bg-surface-container-low py-section-gap" id="reviews">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="typo-h1 text-primary mb-4">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-on-surface-variant font-body-lg">
            Được tin tưởng bởi hàng ngàn hành khách mỗi tháng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl ambient-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center shrink-0 border border-surface-variant"
                    style={{ backgroundImage: `url('${rev.avatar}')` }}
                  />
                  <div>
                    <div className="font-bold text-on-surface">{rev.name}</div>
                    <div className="flex text-accent-orange">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[18px] text-amber-500 fill-amber-500">
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-on-surface-variant italic leading-relaxed">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

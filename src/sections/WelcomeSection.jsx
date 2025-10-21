import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function WelcomeSection() {
  return (
    <section className="bg-white py-10 index-welcome"> {/* 👈 py-10 thay vì py-16 */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Tiêu đề */}
        <div className="text-center mb-6"> {/* 👈 giảm từ mb-8 → mb-6 */}
          <h2 className="text-sm md:text-lg font-bold uppercase">
            Chào mừng đến với <span className="text-red-600">Biển Số Hoàng</span>
          </h2>

          <p className="text-gray-700 text-sm md:text-base mt-3 max-w-3xl mx-auto leading-relaxed">
            Biển Số Hoàng – chuyên ép biển số, chăm sóc & bảo dưỡng xe đạt
            chuẩn, cung cấp dịch vụ ép biển số ô tô, xe máy, đánh bóng, phủ
            ceramic, nâng cấp phụ kiện ô tô cao cấp, thẩm mỹ và bền bỉ hàng đầu
            Việt Nam.
          </p>
        </div>

        {/* Slide ảnh */}
        <div className="wellcome-slide mb-6"> {/* 👈 giảm từ mb-8 → mb-6 */}
          <Swiper
            spaceBetween={15}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            modules={[Autoplay]}
          >
            {Array(9).fill("/anh1.png").map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`Ảnh ${i + 1}`}
                  className="rounded-md shadow-md w-full h-56 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Nút xem thêm */}
        <div className="text-center mb-6"> {/* 👈 giảm từ mb-12 → mb-6 */}
          <a
            href="/gioi-thieu"
            className="bg-red-600 text-white px-6 py-3 rounded-md uppercase text-sm font-semibold hover:bg-red-700 transition"
          >
            Xem thêm
          </a>
        </div>

        {/* Video YouTube */}
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video">
            <iframe
              className="w-full h-full rounded-md shadow-lg"
              src="https://www.youtube.com/embed/wIL_VT3qBPE"
              title="Biển Số Hoàng - Ép Biển Số Chuyên Nghiệp"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

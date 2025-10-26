import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function WelcomeSection() {
  const images = [
    "https://i.postimg.cc/SsCpgNnt/207.jpg",
    "https://i.postimg.cc/mkBKV3f8/208.jpg",
    "https://i.postimg.cc/dVpXgccD/210.jpg",
    "https://i.postimg.cc/yYNbd872/211.jpg",
    "https://i.postimg.cc/GtgzYvc2/212.jpg",
    "https://i.postimg.cc/FsfV8drY/213.jpg",
  ];

  return (
    <section className="bg-white py-10 index-welcome">
      <div className="max-w-6xl mx-auto px-4">
        {/* Tiêu đề */}
        <div className="text-center mb-6">
          <h2 className="text-sm md:text-lg font-bold uppercase">
            Chào mừng đến với{" "}
            <span className="text-red-600">Biển Số Hoàng</span>
          </h2>

          <p className="text-gray-700 text-sm md:text-base mt-3 max-w-3xl mx-auto leading-relaxed">
            Biển Số Hoàng – chuyên ép biển số, phục hồi biển số hư nát, gia công
            mica đạt chuẩn ISO, inox nguyên khối. Cung cấp dịch vụ ép biển số ô
            tô, xe máy thẩm mỹ – bền bỉ – chuẩn form, cùng giải pháp hoàn thiện
            biển số chất lượng hàng đầu Việt Nam.
          </p>
        </div>

        {/* Slide ảnh */}
        <div className="wellcome-slide mb-6">
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
            {images.map((src, i) => (
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
        <div className="text-center mb-6">
          <a
            href="/gioi-thieu"
            className="bg-red-600 text-white px-6 py-3 rounded-md uppercase text-sm font-semibold hover:bg-red-700 transition"
          >
            Xem thêm
          </a>
        </div>

        {/* Video YouTube (tỉ lệ ngang 16:9) */}
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video">
            <iframe
              className="w-full h-full rounded-md shadow-lg"
              src="https://www.youtube.com/embed/c1pbo45eMd4"
              title="Biển Số Hoàng - Video Ngang"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

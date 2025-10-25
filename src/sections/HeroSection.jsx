import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

    const banners = [
    "/anh1.png",
    "https://i.postimg.cc/V6L5VkrZ/Hoa-ng-Hoa-ng.png",
    "https://i.postimg.cc/pX9RrFMS/Hoa-ng-Hoa-ng-1.png",
  ];

  return (
    <section className="relative">
      <Slider {...settings}>
        {banners.map((img, index) => (
          <div key={index}>
            <div
              className="relative bg-cover bg-center text-white min-h-[50vh] md:min-h-[80vh] flex flex-col justify-end"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Lớp phủ mờ */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Nội dung */}
              <div className="relative z-10 text-center pb-10 md:pb-16 space-y-4">
                {/* Hotline */}
                <div className="text-xl md:text-3xl font-bold tracking-wide">
                  HOTLINE:{" "}
                  <span className="text-red-500 tracking-wider">
                    0971.133.799
                  </span>
                </div>

                {/* Nút Zalo */}
                <a
                  href="https://zalo.me/0971133799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full shadow-md hover:bg-red-700 transition text-base md:text-lg font-semibold mt-2"
                >
                  Liên hệ ngay qua Zalo
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

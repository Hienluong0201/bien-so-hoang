import React, { useState, useEffect } from "react";

export default function CuaHang() {
  const bannerImages = [
    "https://i.postimg.cc/j2WmBn7p/ch2.jpg",
    "https://i.postimg.cc/7hpd4P3d/ch3.jpg",
    "https://i.postimg.cc/nr6gxV4N/cuahang1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000); // đổi ảnh mỗi 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 bg-gray-50">
      {/* 🔥 Banner chính (Slider 3 ảnh) */}
      <section className="relative rounded-2xl overflow-hidden shadow-xl mb-16 h-96">
        {bannerImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Cửa hàng Biển Số Hoàng"
            className={`absolute inset-0 w-full h-full object-cover brightness-75 transition-opacity duration-1000 ${
              i === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
            CỬA HÀNG BIỂN SỐ HOÀNG
          </h1>
          <p className="max-w-2xl text-lg md:text-xl leading-relaxed">
            Chuyên gia trong lĩnh vực <strong>làm biển số xe, ép mica, phục hồi và gia công biển số inox cao cấp</strong> uy tín hàng đầu Việt Nam.
          </p>

          <div className="mt-5">
            <a
              href="#lienhe"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
            >
              Liên hệ ngay
            </a>
          </div>
        </div>

        {/* chấm nhỏ hiển thị ảnh hiện tại */}
        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          {bannerImages.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                i === currentIndex ? "bg-white scale-125" : "bg-white/50"
              }`}
            ></span>
          ))}
        </div>
      </section>

      {/* 🏪 Giới thiệu cửa hàng */}
      <section className="mb-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Giới Thiệu Cửa Hàng</h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
        <span className="text-red-600 font-semibold">Biển Số Hoàng</span> được thành lập với sứ mệnh
            mang đến những sản phẩm <strong>biển số xe chất lượng cao</strong>, chuẩn quy định và thẩm mỹ vượt trội.
            Với đội ngũ kỹ thuật viên lành nghề, máy móc hiện đại và quy trình chuẩn xác, chúng tôi cam kết mang lại
            trải nghiệm uy tín – nhanh chóng – chuyên nghiệp cho mọi khách hàng.
      </section>

      {/* 🖼 Không gian cửa hàng */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Không Gian Cửa Hàng
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {bannerImages.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={src}
                alt={`Không gian ${i + 1}`}
                className="w-full h-64 object-cover transform hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ⚙️ Quy trình phục vụ khách hàng */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Quy Trình Phục Vụ Khách Hàng
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { step: "01", title: "Tư vấn chi tiết", desc: "Lắng nghe nhu cầu và tư vấn giải pháp phù hợp nhất cho khách hàng." },
            { step: "02", title: "Thiết kế & báo giá", desc: "Đưa ra mẫu thiết kế, chất liệu và giá cả minh bạch." },
            { step: "03", title: "Gia công sản phẩm", desc: "Sản xuất bằng máy móc hiện đại, đảm bảo độ chính xác cao." },
            { step: "04", title: "Bàn giao & bảo hành", desc: "Kiểm tra kỹ lưỡng trước khi bàn giao, hỗ trợ bảo hành trọn gói." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border-t-4 border-red-600 transition"
            >
              <div className="text-3xl font-bold text-red-600 mb-2">{item.step}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 Phản hồi khách hàng */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Khách Hàng Nói Gì Về Chúng Tôi
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Anh Minh (Hà Nội)", text: "Dịch vụ chuyên nghiệp, biển số phục hồi như mới. Rất hài lòng!" },
            { name: "Chị Hương (TP.HCM)", text: "Đặt biển số theo yêu cầu cực nhanh, nhân viên tư vấn tận tình." },
            { name: "Anh Đức (Đà Nẵng)", text: "Sản phẩm chất lượng, đóng gói cẩn thận và giao hàng đúng hẹn." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition border-t-4 border-red-600"
            >
              <p className="text-gray-700 italic mb-4">“{item.text}”</p>
              <h4 className="font-semibold text-red-600">{item.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 🏆 Thành tựu */}
      <section className="mb-20 bg-white p-10 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Thành Tựu & Cam Kết</h2>
        <div className="w-16 h-1 bg-red-600 mx-auto mb-8"></div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { number: "10+", label: "Năm kinh nghiệm" },
            { number: "50.000+", label: "Khách hàng hài lòng" },
            { number: "100%", label: "Cam kết chất lượng" },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-red-600 mb-2">{item.number}</div>
              <p className="text-gray-700 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📍 Vị trí bản đồ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Vị Trí Cửa Hàng</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-gray-200">
          <iframe
            title="Bản đồ Biển Số Hoàng"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.988477313886!2d106.62640607476565!3d10.812193289338772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bd6058f3fb1%3A0xd7f509b6d11c48c6!2zw4lwIGJp4buDbiBT4buRIEhvw6BuZw!5e0!3m2!1sen!2s!4v1761359872342!5m2!1sen!2s"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* 📞 Liên hệ */}
      <section id="lienhe" className="bg-red-600 text-white py-12 rounded-2xl text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Liên Hệ Với Biển Số Hoàng</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Chúng tôi luôn sẵn sàng hỗ trợ bạn nhanh chóng nhất. Hãy liên hệ ngay để được tư vấn miễn phí.
        </p>
        <p className="text-lg">
          📞 Hotline: <span className="font-semibold">0971 133 799</span>
          <br />
          📍 Địa chỉ: 123 Đường ABC, Quận Bình Tân, TP. Hồ Chí Minh
          <br />
          🌐 Website:{" "}
          <a href="https://epbiensohoang.com" className="underline font-semibold text-white">
            epbiensohoang.com
          </a>
        </p>
      </section>

      {/* 🧾 Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        © 2025 Biển Số Hoàng. All rights reserved.
      </footer>
    </div>
  );
}

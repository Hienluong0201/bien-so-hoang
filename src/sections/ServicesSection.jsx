import React from "react";

const services = [
  {
    title: "Ép Biển Số Ô Tô Cao Cấp",
    img: "/anh1.png",
  },
  {
    title: "Ép Biển Số Xe Máy Chống Gãy",
    img: "/anh1.png",
  },
  {
    title: "Làm Biển Số Theo Yêu Cầu",
    img: "/anh1.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-50">
      <h2 className="text-center text-base md:text-lg font-bold mb-6 uppercase">
        DỊCH VỤ <span className="text-red-600">ÉP BIỂN SỐ</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center font-semibold text-gray-800 text-sm md:text-base">
              {s.title}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <a
          href="https://zalo.me/0971133799"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-md text-sm font-semibold uppercase hover:bg-red-700 transition"
        >
          Liên hệ ngay qua Zalo
        </a>
      </div>
    </section>
  );
}

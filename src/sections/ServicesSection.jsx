import React from "react";

const services = [
  {
    title: "Ép Biển Số Ô Tô Cao Cấp",
    img: "https://i.postimg.cc/RFs8cgxk/anh9.jpg",
  },
  {
    title: "Ép Biển Số Xe Máy Chống Gãy",
    img: "https://i.postimg.cc/zv1tVHhY/anh13-1.png",
  },
  {
    title: "Làm Biển Số Theo Yêu Cầu",
    img: "https://i.postimg.cc/KvyVtk6G/anh11.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-10">
      <h2 className="text-center text-base md:text-lg font-bold mb-6 uppercase">
        DỊCH VỤ <span className="text-red-600">ÉP BIỂN SỐ</span>
      </h2>

      {/* Danh sách dịch vụ */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center font-semibold text-gray-800 text-sm md:text-base">
              {s.title}
            </div>
          </div>
        ))}
      </div>

      {/* Các nút liên hệ và xem tin tức */}
      <div className="text-center mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
        <a
          href="https://zalo.me/0971133799"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-md text-sm font-semibold uppercase hover:bg-red-700 transition"
        >
          Liên hệ ngay qua Zalo
        </a>

        <a
          href="/tin-tuc"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-semibold uppercase hover:bg-blue-700 transition"
        >
          Xem thêm tin tức
        </a>
      </div>
    </section>
  );
}

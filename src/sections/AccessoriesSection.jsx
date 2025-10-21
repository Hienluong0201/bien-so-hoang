import React from "react";

export default function AccessoriesSection() {
  const items = [
    { title: "Ép Biển Số Ô Tô Cao Cấp", img: "/anh1.png" },
    { title: "Ép Biển Số Xe Máy Chống Gãy", img: "/anh1.png" },
    { title: "Làm Biển Số Theo Yêu Cầu", img: "/anh1.png" },
  ];

  return (
    <section className="py-5 bg-white">
      <h2 className="text-center text-base md:text-lg font-bold mb-6 uppercase">
        BIỂN SỐ XE <span className="text-red-600">CAO CẤP</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 text-center shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <p className="font-semibold mb-3 text-gray-800 text-sm md:text-base">
              {item.title}
            </p>
            <button className="bg-red-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition">
              Chi tiết
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

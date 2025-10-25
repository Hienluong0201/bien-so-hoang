import React from "react";
import { Link } from "react-router-dom";

export default function AccessoriesSection() {
  const items = [
    {
      slug: "ep-bien-so-o-to",
      title: "Ép Biển Số Ô Tô Chuẩn Form",
      img: "https://i.postimg.cc/V5P8sNY3/anh1.jpg",
      desc: "Dịch vụ ép biển số ô tô bằng mica đạt chuẩn, ép chặt, phẳng tuyệt đối – chuẩn kích thước, sắc nét và bền màu theo thời gian.",
    },
    {
      slug: "bien-so-xe-may-inox",
      title: "Gia Công Biển Số Xe Máy Inox Nguyên Khối",
      img: "https://i.postimg.cc/ZR0pjJ6s/anh12.png",
      desc: "Gia công, ép biển số xe máy bằng inox nguyên khối, chống gãy, chống ố vàng, thẩm mỹ cao và tuổi thọ vượt trội.",
    },
    {
      slug: "phuc-hoi-bien-so-hu-nat",
      title: "Phục Hồi Biển Số Hư Nát – Thẩm Mỹ Như Mới",
      img: "https://i.postimg.cc/LhFp4s99/anh4.jpg",
      desc: "Phục hồi, làm mới biển số bị móp, trầy, bong tróc. Ép lại bằng mica cao cấp, giữ nguyên số, chuẩn quy định, sáng đẹp như mới.",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <h2 className="text-center text-base md:text-lg font-bold mb-6 uppercase">
        BIỂN SỐ XE <span className="text-red-600">CAO CẤP</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 text-center shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <p className="font-semibold mb-2 text-gray-800 text-sm md:text-base">
              {item.title}
            </p>
            <p className="text-gray-600 text-xs md:text-sm mb-3 leading-relaxed">
              {item.desc}
            </p>

            <Link
              to={`/phu-kien/${item.slug}`}
              className="inline-block bg-red-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition"
            >
              Chi tiết
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";

export default function SanPham() {
  const products = [
    {
      name: "Biển số xe ô tô cao cấp",
      image: "/products/bien-so-oto.jpg",
      desc: "Chất liệu hợp kim nhôm cao cấp, chống trầy xước, bền bỉ theo thời gian.",
      price: "450.000₫",
    },
    {
      name: "Khung biển số titan",
      image: "/products/khung-bien-so-titan.jpg",
      desc: "Khung titan chống gỉ, màu sắc nổi bật và sang trọng.",
      price: "550.000₫",
    },
    {
      name: "Khung biển số xe máy CNC",
      image: "/products/bien-so-xe-may.jpg",
      desc: "Thiết kế tinh xảo, ôm sát biển, bảo vệ tuyệt đối.",
      price: "250.000₫",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-red-700 mb-6 uppercase">Sản phẩm</h1>

      <p className="text-gray-700 mb-8">
        Dưới đây là những sản phẩm nổi bật của{" "}
        <span className="text-red-600 font-semibold">Biển số Hoàng</span>. Tất cả đều được
        lựa chọn kỹ lưỡng, đảm bảo chất lượng và độ bền cao.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden border-t-4 border-red-600 hover:shadow-lg transition"
          >
            <img src={p.image} alt={p.name} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">{p.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{p.desc}</p>
              <p className="text-red-600 font-bold">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

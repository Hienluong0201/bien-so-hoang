import React from "react";

export default function KhuyenMai() {
  const promotions = [
    {
      title: "Giảm 20% cho khung biển số cao cấp",
      image: "/promo/khung-bien-so.jpg",
      date: "Áp dụng: 20/10 - 30/10/2025",
      desc: "Ưu đãi đặc biệt dành cho khách hàng khi đặt mua khung biển số cao cấp trong tháng này. Số lượng có hạn!",
      discount: "-20%",
    },
    {
      title: "Combo phụ kiện ô tô tiết kiệm 30%",
      image: "/promo/combo-phu-kien.jpg",
      date: "Áp dụng: 15/10 - 31/10/2025",
      desc: "Mua trọn bộ phụ kiện ô tô gồm camera hành trình, bọc vô lăng và nước hoa xe hơi, giảm ngay 30%.",
      discount: "-30%",
    },
    {
      title: "Miễn phí giao hàng toàn quốc",
      image: "/promo/giao-hang.jpg",
      date: "Áp dụng: từ 01/11/2025",
      desc: "Tất cả đơn hàng trên 500.000₫ sẽ được miễn phí vận chuyển toàn quốc.",
      discount: "Free Ship",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-red-700 mb-6 uppercase">Khuyến mãi</h1>

      <p className="text-gray-700 mb-8">
        <span className="font-semibold text-red-600">Biển số Hoàng</span> luôn mang đến những ưu đãi hấp dẫn dành cho khách hàng thân thiết.
        Hãy nhanh tay chọn cho mình sản phẩm yêu thích với giá tốt nhất!
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map((promo, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden border-t-4 border-red-600 hover:shadow-lg transition"
          >
            <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {promo.discount}
            </span>
            <img src={promo.image} alt={promo.title} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">{promo.title}</h2>
              <p className="text-xs text-gray-500 mb-2">{promo.date}</p>
              <p className="text-sm text-gray-600 mb-3">{promo.desc}</p>
              <a
                href="#"
                className="text-red-600 font-semibold text-sm hover:underline"
              >
                Xem chi tiết →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

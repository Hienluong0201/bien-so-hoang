import React from "react";

export default function PhuKien() {
  const accessories = [
    {
      name: "Chìa khóa thông minh ô tô",
      image: "/accessories/chia-khoa-thong-minh.jpg",
      desc: "Thiết kế sang trọng, tích hợp mở khóa thông minh, chống trộm hiệu quả.",
      price: "1.200.000₫",
    },
    {
      name: "Camera hành trình cao cấp",
      image: "/accessories/camera-hanh-trinh.jpg",
      desc: "Ghi hình Full HD, góc rộng 170°, kết nối điện thoại dễ dàng.",
      price: "890.000₫",
    },
    {
      name: "Bọc vô lăng da cao cấp",
      image: "/accessories/boc-vo-lang.jpg",
      desc: "Chất liệu da mềm mại, chống trơn trượt, mang lại cảm giác lái tốt hơn.",
      price: "350.000₫",
    },
    {
      name: "Tấm lót chân chống trượt",
      image: "/accessories/tam-lot-chan.jpg",
      desc: "Thiết kế vừa khít, dễ vệ sinh, giúp nội thất xe luôn sạch sẽ.",
      price: "290.000₫",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-red-700 mb-6 uppercase">Phụ kiện</h1>

      <p className="text-gray-700 mb-8">
        <span className="text-red-600 font-semibold">Biển số Hoàng</span> cung cấp các loại phụ kiện
        chất lượng cao giúp chiếc xe của bạn thêm tiện nghi, thẩm mỹ và bền bỉ hơn.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {accessories.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden border-t-4 border-red-600 hover:shadow-lg transition"
          >
            <img src={item.image} alt={item.name} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
              <p className="text-red-600 font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

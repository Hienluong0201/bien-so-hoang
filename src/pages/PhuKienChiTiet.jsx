import React from "react";
import { useParams, Link } from "react-router-dom";

const accessoriesData = {
  "ep-bien-so-o-to": {
    title: "Ép Biển Số Ô Tô Chuẩn Form",
    img: "https://i.postimg.cc/V5P8sNY3/anh1.jpg",
    content: `
      Dịch vụ ép biển số ô tô cao cấp giúp bảo vệ biển số khỏi trầy xước,
      bong mép và bạc màu. Chúng tôi sử dụng mica chuẩn form, ép chặt, 
      phẳng tuyệt đối và chống nước 100%. Thi công nhanh, lấy ngay trong 15 phút.
    `,
  },
  "bien-so-xe-may-inox": {
    title: "Gia Công Biển Số Xe Máy Inox Nguyên Khối",
    img: "https://i.postimg.cc/ZR0pjJ6s/anh12.png",
    content: `
      Biển số inox nguyên khối có độ bền vượt trội, không gãy, không ố vàng. 
      Thi công tinh xảo, sáng bóng, tạo điểm nhấn sang trọng cho xe. 
      Sản phẩm đạt chuẩn, bảo hành 12 tháng.
    `,
  },
  "phuc-hoi-bien-so-hu-nat": {
    title: "Phục Hồi Biển Số Hư Nát – Thẩm Mỹ Như Mới",
    img: "https://i.postimg.cc/LhFp4s99/anh4.jpg",
    content: `
      Biển số bị cong, móp, tróc sơn – chúng tôi phục hồi như mới! 
      Sử dụng công nghệ ép mica cao cấp và quy trình làm phẳng chuyên nghiệp, 
      biển số sau khi phục hồi sáng đẹp và đúng quy định.
    `,
  },
};

export default function PhuKienChiTiet() {
  const { slug } = useParams();
  const item = accessoriesData[slug];

  if (!item) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h2 className="text-xl font-semibold mb-4">Không tìm thấy sản phẩm!</h2>
        <Link to="/" className="text-red-600 underline">
          Quay lại trang chủ
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          {item.title}
        </h1>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line mb-6">
          {item.content}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://zalo.me/0971133799"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-md text-sm font-semibold uppercase hover:bg-red-700 transition"
          >
            Liên hệ Zalo
          </a>

          <Link
            to="/"
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md text-sm font-semibold uppercase hover:bg-gray-300 transition"
          >
            Quay lại
          </Link>
        </div>
      </div>
    </section>
  );
}

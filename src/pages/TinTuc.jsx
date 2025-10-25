import React from "react";

const articles = [
  {
    title: "Ép Biển Số Ô Tô Cao Cấp – Bền, Đẹp, Sang Trọng",
    img: "https://i.postimg.cc/RFs8cgxk/anh9.jpg",
    content: `
      Ép biển số ô tô cao cấp giúp bảo vệ biển số khỏi trầy xước, gãy vỡ,
      đồng thời tăng độ sang trọng cho xe. Với chất liệu mica cao cấp, ép khít,
      không bong mép, chống nước tuyệt đối. Sản phẩm được thi công chuyên nghiệp,
      bảo hành dài hạn và có nhiều kiểu dáng phù hợp với từng dòng xe khác nhau.
    `,
  },
  {
    title: "Ép Biển Số Xe Máy Chống Gãy – Giải Pháp Cho Mọi Thời Tiết",
    img: "https://i.postimg.cc/zv1tVHhY/anh13-1.png",
    content: `
      Với những ai thường xuyên di chuyển, đặc biệt trong điều kiện thời tiết khắc nghiệt,
      biển số xe máy rất dễ bị gãy hoặc mờ số. Dịch vụ ép biển số chống gãy giúp bảo vệ
      biển số bền đẹp, chống nước và chống cong méo. Vật liệu ép trong suốt, không ố vàng
      theo thời gian, giữ nguyên vẻ đẹp của biển.
    `,
  },
  {
    title: "Làm Biển Số Theo Yêu Cầu – Cá Tính Và Độc Đáo",
    img: "https://i.postimg.cc/KvyVtk6G/anh11.jpg",
    content: `
      Ngoài các mẫu tiêu chuẩn, chúng tôi nhận làm biển số theo yêu cầu:
      khắc logo, viền màu, ép kiểu dáng riêng... giúp xe của bạn trở nên nổi bật,
      cá tính mà vẫn đúng quy định. Đội ngũ thợ lành nghề, gia công tỉ mỉ,
      mang lại sản phẩm hoàn hảo trong từng chi tiết.
    `,
  },
];

export default function TinTuc() {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <h2 className="text-center text-lg md:text-2xl font-bold mb-10 uppercase">
        TIN TỨC & <span className="text-red-600">DỊCH VỤ</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {articles.map((a, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img src={a.img} alt={a.title} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="font-semibold text-gray-800 text-base mb-3">
                {a.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {a.content.substring(0, 120)}...
              </p>
              <a
                href="https://zalo.me/0971133799"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white text-sm px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Liên hệ Zalo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
    
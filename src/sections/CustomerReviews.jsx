import React from "react";

const reviews = [
  {
    name: "Anh Tuấn (Hà Nội)",
    text: "Biển ép cực đẹp, chắc chắn, thẩm mỹ cao. Làm nhanh, giá tốt!",
    img: "/anh1.png",
  },
  {
    name: "Chị Hương (Bắc Ninh)",
    text: "Rất hài lòng, nhân viên nhiệt tình, bảo hành đầy đủ. Sẽ giới thiệu thêm bạn bè!",
    img: "/anh1.png",
  },
  {
    name: "Anh Phong (TP.HCM)",
    text: "Biển số ép đẹp, không bị cong gãy, mưa nắng thoải mái. Quá uy tín!",
    img: "/anh1.png",
  },
];

export default function CustomerReviews() {
  return (
    <section className="bg-gray-100 py-5">
      <h2 className="text-center text-base md:text-lg font-bold mb-6 uppercase">
        TRẢI NGHIỆM CỦA <span className="text-red-600">KHÁCH HÀNG</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={r.img}
              alt={r.name}
              className="rounded-md mb-3 w-full h-48 object-cover"
            />
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{r.text}</p>
            <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

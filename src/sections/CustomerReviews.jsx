import React from "react";

const reviews = [
  {
    name: "Anh Tuấn (Hà Nội)",
    text: "Biển ép cực đẹp, chắc chắn, thẩm mỹ cao. Làm nhanh, giá tốt!",
    img: "https://i.postimg.cc/tJ5KbNML/anh18.png",
  },
  {
    name: "Chị Hương (Bắc Ninh)",
    text: "Rất hài lòng, nhân viên nhiệt tình, bảo hành đầy đủ. Sẽ giới thiệu thêm bạn bè!",
    img: "https://i.postimg.cc/x8RwQ34B/anh19.png",
  },
  {
    name: "Anh Phong (TP.HCM)",
    text: "Biển số ép đẹp, không bị cong gãy, mưa nắng thoải mái. Quá uy tín!",
    img: "https://i.postimg.cc/8cH2Gm02/anh20.png",
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
            {/* Ảnh hiển thị theo tỉ lệ gần giống điện thoại nhưng rộng hơn chút */}
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-md mb-3">
              <img
                src={r.img}
                alt={r.name}
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{r.text}</p>
            <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

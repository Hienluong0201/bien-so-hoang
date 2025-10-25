import React from "react";
import ContactSection from "../sections/ContactSection"; 

export default function KhuyenMai() {
  const promotions = [
    {
      title: "🎉 Giảm 5% Cho 10 Cặp Biển Số Ô Tô Đầu Tiên!",
      image: "https://i.postimg.cc/RFs8cgxk/anh9.jpg",
      date: "Áp dụng đến: 31/10",
      desc: "Nhanh tay đặt ngay – 10 khách hàng đầu tiên làm 10 cặp biển số ô tô sẽ được giảm ngay 5% giá dịch vụ. Biển ép mica cao cấp, bảo hành 12 tháng, giao tận nơi!",
      discount: "-5%",
    },
    {
      title: "🔥 Giảm 10% Cho 10 Biển Số Xe Máy Đầu Tiên",
      image: "https://i.postimg.cc/zv1tVHhY/anh13-1.png",
      date: "Áp dụng đến: 31/10",
      desc: "Cơ hội vàng cho anh em biker! 10 khách đầu tiên làm biển số xe máy sẽ được giảm 10%. Biển ép chuẩn form, chống cong gãy, bền đẹp như mới!",
      discount: "-10%",
    },
    {
      title: "🎁 Làm Combo Ô Tô + Xe Máy – Giảm Thêm 5%",
      image: "https://i.postimg.cc/V5P8sNY3/anh1.jpg",
      date: "Áp dụng trong tháng 11/2025",
      desc: "Khi làm cùng lúc 1 biển ô tô và 1 biển xe máy, bạn sẽ được giảm thêm 5% tổng hóa đơn. Nhanh tay vì số lượng ưu đãi chỉ có 30 suất!",
      discount: "-5%",
    },
    {
      title: "🚚 Giao Hàng Toàn Quốc",
      image: "https://i.postimg.cc/kMRVdxbY/206.jpg",
      date: "Áp dụng vĩnh viễn",
      desc: "Dù bạn ở đâu – Biển Số Hoàng vẫn giao hàng tận nơi. Tất cả đơn hàng trên 500.000₫ được miễn phí vận chuyển toàn quốc.",
      discount: "Free Ship",
    },
    {
      title: "💎 Ưu Đãi Thành Viên – Giảm 10% Lần Tiếp Theo",
      image: "https://i.postimg.cc/mDDbVGYB/anh205.jpg",
      date: "Áp dụng: cho khách hàng cũ",
      desc: "Khách hàng thân thiết của Biển Số Hoàng sẽ được giảm ngay 15% cho lần sử dụng dịch vụ tiếp theo. Cảm ơn vì đã luôn tin tưởng!",
      discount: "-15%",
    },
  ];

  return (
  <div>
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      {/* Tiêu đề chính */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-6 uppercase">
        🎊 KHÁM PHÁ ƯU ĐÃI SIÊU HOT TẠI BIỂN SỐ HOÀNG 🎊
      </h1>

      {/* Mô tả ngắn đầu trang */}
      <p className="text-gray-700 mb-10 text-center leading-relaxed max-w-3xl mx-auto">
        <strong className="text-red-600">Biển Số Hoàng</strong> tri ân khách hàng bằng hàng loạt ưu đãi hấp dẫn:  
        <span className="font-semibold"> giảm giá – tặng quà – miễn phí giao hàng!</span>  
        Cơ hội chỉ dành cho những khách hàng nhanh tay nhất — đừng bỏ lỡ!
      </p>

      {/* Danh sách khuyến mãi */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {promotions.map((promo, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden border-t-4 border-red-600 hover:shadow-xl transition transform hover:-translate-y-1"
          >
            {/* Nhãn giảm giá */}
            <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-bounce">
              {promo.discount}
            </span>

            {/* Ảnh khuyến mãi */}
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-52 object-cover"
            />

            {/* Nội dung */}
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-1 hover:text-red-600 transition">
                {promo.title}
              </h2>
              <p className="text-xs text-gray-500 mb-2">{promo.date}</p>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {promo.desc}
              </p>

              {/* Nút nhận ưu đãi */}
              <a
                href="https://zalo.me/0971133799"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-red-700 transition"
              >
                Nhận ưu đãi ngay →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Lời kêu gọi cuối trang */}
      <div className="text-center mt-14 bg-red-50 p-8 rounded-xl border border-red-200 shadow-sm">
        <h3 className="text-xl font-semibold text-red-700 mb-3">
          💥 Ưu Đãi Có Hạn – Đặt Ngay Kẻo Lỡ!
        </h3>
        <p className="text-gray-700 mb-4">
          Giảm giá chỉ áp dụng cho <strong>khách hàng đầu tiên mỗi ngày</strong>  
           và có thể kết thúc sớm khi đủ số lượng.  
          Hãy nhắn ngay{" "}
          <a
            href="https://zalo.me/0971133799"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 font-semibold hover:underline"
          >
            Zalo 0971.133.799
          </a>{" "}
          để giữ suất ưu đãi của bạn hôm nay!
        </p>

        <a
          href="https://zalo.me/0971133799"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase hover:bg-red-700 transition"
        >
          💬 Nhắn Ngay Nhận Ưu Đãi
        </a>
      </div>
    </div>
     <ContactSection />
    </div>
    
  );
}

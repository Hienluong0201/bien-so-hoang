import React from "react";

export default function Blog() {
  const posts = [
    {
      title: "Cách chọn khung biển số xe phù hợp",
      image: "/blog/chon-khung-bien-so.jpg",
      date: "20/10/2025",
      desc: "Việc lựa chọn khung biển số không chỉ là thẩm mỹ mà còn giúp bảo vệ biển số bền đẹp theo thời gian. Dưới đây là hướng dẫn chi tiết giúp bạn chọn đúng loại phù hợp.",
    },
    {
      title: "Top 5 phụ kiện ô tô đáng mua nhất năm 2025",
      image: "/blog/phu-kien-oto-2025.jpg",
      date: "10/10/2025",
      desc: "Phụ kiện ô tô không chỉ giúp xe thêm tiện nghi mà còn thể hiện phong cách của chủ xe. Cùng điểm qua 5 sản phẩm nổi bật nhất hiện nay.",
    },
    {
      title: "Hướng dẫn làm sạch biển số xe đúng cách",
      image: "/blog/ve-sinh-bien-so.jpg",
      date: "02/10/2025",
      desc: "Một vài mẹo đơn giản giúp bạn làm sạch biển số nhanh chóng, không trầy xước và giữ được độ sáng bóng như mới.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-red-700 mb-6 uppercase">Blog & Tin tức</h1>

      <p className="text-gray-700 mb-8">
        Chia sẻ những mẹo hay, kiến thức và thông tin mới nhất từ{" "}
        <span className="font-semibold text-red-600">Biển số Hoàng</span> — giúp bạn chăm sóc xe tốt hơn
        và cập nhật xu hướng mới nhất trong ngành phụ kiện ô tô.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition border-t-4 border-red-600"
          >
            <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">{post.title}</h2>
              <p className="text-xs text-gray-500 mb-2">{post.date}</p>
              <p className="text-sm text-gray-600 mb-3">{post.desc}</p>
              <a
                href="#"
                className="text-red-600 font-semibold text-sm hover:underline"
              >
                Đọc thêm →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

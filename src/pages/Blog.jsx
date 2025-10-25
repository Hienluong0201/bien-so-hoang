import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      slug: "chon-khung-bien-so",
      title: "Cách Chọn Khung Biển Số Xe Phù Hợp Và Thẩm Mỹ",
      image: "https://i.postimg.cc/tC2ZkSTr/khungbien.jpg",
      date: "20/10/2025",
      desc: "Chọn khung biển số phù hợp giúp xe thêm nổi bật và bảo vệ biển số khỏi cong, gãy hay bong tróc. Cùng Biển Số Hoàng tìm hiểu cách chọn khung chất lượng, thẩm mỹ và bền bỉ nhất.",
    },
    {
      slug: "ep-bien-so-mica-cao-cap",
      title: "Lợi Ích Khi Ép Biển Số Bằng Mica Cao Cấp",
      image: "https://i.postimg.cc/RFs8cgxk/anh9.jpg",
      date: "15/10/2025",
      desc: "Ép biển số bằng mica cao cấp giúp biển số bền hơn, chống nước, không cong vênh và dễ vệ sinh. Dịch vụ ép biển số chuẩn form đang là xu hướng của người dùng hiện nay.",
    },
    {
      slug: "ve-sinh-bien-so-xe",
      title: "Hướng Dẫn Làm Sạch Biển Số Xe Đúng Cách",
      image: "https://i.postimg.cc/LhFp4s99/anh4.jpg",
      date: "05/10/2025",
      desc: "Vệ sinh biển số thường xuyên giúp giữ cho xe luôn sạch đẹp, tránh ăn mòn và mờ số. Dưới đây là hướng dẫn đơn giản để bạn làm sạch biển số mà không làm trầy xước bề mặt.",
    },
    {
      slug: "bien-so-inox-nguyen-khoi",
      title: "Làm Biển Số Xe Bằng Inox Nguyên Khối – Bền Đẹp Vượt Thời Gian",
      image: "https://i.postimg.cc/ZR0pjJ6s/anh12.png",
      date: "28/09/2025",
      desc: "Biển số inox nguyên khối là lựa chọn hàng đầu cho những ai yêu thích độ bền và tính sang trọng. Sản phẩm chống gỉ, chống cong gãy và có độ sáng bóng cao.",
    },
    {
      slug: "phuc-hoi-bien-so-cu",
      title: "Phục Hồi Biển Số Cũ – Lấy Lại Vẻ Đẹp Như Mới",
      image: "https://i.postimg.cc/8cH2Gm02/anh20.png",
      date: "20/09/2025",
      desc: "Dịch vụ phục hồi biển số cũ giúp tân trang lại biển bị tróc sơn, cong méo hoặc phai màu. Quy trình chuyên nghiệp giúp biển sáng, phẳng và thẩm mỹ như ban đầu.",
    },
    {
      slug: "gan-co-o-to-xe-may",
      title: "Gắn Cờ Ô Tô, Xe Máy – Tô Điểm Phong Cách Cá Nhân",
      image: "https://i.postimg.cc/V5P8sNY3/anh1.jpg",
      date: "10/09/2025",
      desc: "Dịch vụ gắn cờ cho xe ô tô, xe máy tại Biển Số Hoàng mang đến phong cách riêng biệt cho người sử dụng. Phù hợp cho lễ hội, sự kiện, hội nhóm hoặc phong thủy cá nhân.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-red-700 mb-6 uppercase">
        Blog &amp; Tin Tức
      </h1>

      <p className="text-gray-700 mb-10 leading-relaxed max-w-4xl">
        Cập nhật những chia sẻ, mẹo hữu ích và xu hướng mới nhất về{" "}
        <strong>ép biển số, làm biển số inox, phục hồi biển cũ</strong> từ{" "}
        <span className="font-semibold text-red-600">Biển Số Hoàng</span>.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition border-t-4 border-red-600"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-1 hover:text-red-600 transition">
                {post.title}
              </h2>
              <p className="text-xs text-gray-500 mb-2">{post.date}</p>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {post.desc}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-red-600 font-semibold text-sm hover:underline"
              >
                Đọc bài viết →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

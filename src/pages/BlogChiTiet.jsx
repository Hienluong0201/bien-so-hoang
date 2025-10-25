import React from "react";
import { useParams, Link } from "react-router-dom";

const postsData = {
  "chon-khung-bien-so": {
    title: "Cách Chọn Khung Biển Số Xe Phù Hợp Và Thẩm Mỹ",
    image: "https://i.postimg.cc/tC2ZkSTr/khungbien.jpg",
    content: `
Khung biển số xe không chỉ là phụ kiện trang trí mà còn là lớp bảo vệ cho biển số khỏi trầy xước, bong mép hay cong vênh.
Dưới đây là một vài lưu ý khi chọn khung biển số phù hợp:

- Chọn **chất liệu inox hoặc nhôm** để đảm bảo độ bền.
- Với xe sang, nên chọn **khung phủ titan hoặc khung mạ vàng** để tạo điểm nhấn.
- Tránh khung nhựa rẻ tiền vì dễ nứt và ngả màu.

Tại **Biển Số Hoàng**, chúng tôi cung cấp nhiều mẫu khung biển chất lượng, đa dạng kiểu dáng – vừa thẩm mỹ vừa chắc chắn.`,
  },

  "ep-bien-so-mica-cao-cap": {
    title: "Lợi Ích Khi Ép Biển Số Bằng Mica Cao Cấp",
    image: "https://i.postimg.cc/RFs8cgxk/anh9.jpg",
    content: `
Công nghệ ép biển số bằng mica giúp bảo vệ biển số khỏi nước, bụi và tia UV. 

**Lợi ích:**
- Giữ biển số phẳng và sáng bóng lâu dài.
- Tránh bong mép, nứt gãy.
- Đảm bảo đúng kích thước chuẩn quy định.

Dịch vụ ép biển số tại **Biển Số Hoàng** sử dụng mica cao cấp trong suốt, độ dày tiêu chuẩn, bảo hành 12 tháng.`,
  },

  "ve-sinh-bien-so-xe": {
    title: "Hướng Dẫn Làm Sạch Biển Số Xe Đúng Cách",
    image: "https://i.postimg.cc/LhFp4s99/anh4.jpg",
    content: `
Giữ biển số luôn sạch sẽ giúp xe đẹp và dễ nhìn hơn. Khi vệ sinh biển số, bạn nên:

1. Dùng khăn mềm, không dùng bàn chải cứng.
2. Sử dụng dung dịch rửa nhẹ, tránh hóa chất mạnh.
3. Lau khô bằng khăn mềm sau khi rửa.

Nếu biển số bị bong hoặc mờ, hãy mang tới **Biển Số Hoàng** để ép lại miễn phí trong thời hạn bảo hành.`,
  },
};

export default function BlogChiTiet() {
  const { slug } = useParams();
  const post = postsData[slug];

  if (!post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold text-gray-600 mb-3">
          Không tìm thấy bài viết!
        </h2>
        <Link to="/blog" className="text-red-600 hover:underline">
          ← Quay lại Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-10">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />
      <h1 className="text-2xl font-bold text-red-700 mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {post.content}
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="https://zalo.me/0971133799"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-6 py-3 rounded-md text-sm font-semibold uppercase hover:bg-red-700 transition"
        >
          Liên hệ Zalo
        </a>
        <Link
          to="/blog"
          className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md text-sm font-semibold uppercase hover:bg-gray-300 transition"
        >
          Quay lại
        </Link>
      </div>
    </div>
  );
}

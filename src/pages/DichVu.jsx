import React from "react";
import ContactSection from "../sections/ContactSection"; 

export default function DichVu() {
  const services = [
    {
      title: "Ép Biển Số Ô Tô & Xe Máy Cao Cấp",
      img: "https://i.postimg.cc/RFs8cgxk/anh9.jpg",
      desc: "Dịch vụ ép biển số bằng mica cao cấp, chống nước, chống cong gãy và phai màu. Biển phẳng tuyệt đối, chuẩn form, thẩm mỹ cao và bảo hành 12 tháng.",
    },
    {
      title: "Làm Biển Số Mới Theo Quy Chuẩn",
      img: "https://i.postimg.cc/KvyVtk6G/anh11.jpg",
      desc: "Nhận làm biển số mới theo đúng quy định của Bộ GTVT. Chất liệu inox hoặc nhôm cao cấp, in khắc sắc nét, chính xác từng chi tiết.",
    },
    {
      title: "Phục Hồi Biển Số Cũ – Như Mới 100%",
      img: "https://i.postimg.cc/LhFp4s99/anh4.jpg",
      desc: "Khôi phục biển số bị trầy, cong, rách hoặc mờ số. Dịch vụ phục hồi bằng công nghệ ép và làm phẳng chuyên nghiệp giúp biển sáng đẹp như mới.",
    },
    {
      title: "Làm Biển Số Bằng Inox Nguyên Khối",
      img: "https://i.postimg.cc/qRczygqT/anh201.png",
      desc: "Gia công biển số inox nguyên khối chống gãy, chống ố vàng, bền vượt trội. Mặt biển sáng bóng, sang trọng, phù hợp với xe cao cấp.",
    },
    {
      title: "Gắn Cờ Ô Tô, Xe Máy Theo Yêu Cầu",
      img: "https://i.postimg.cc/V5P8sNY3/anh1.jpg",
      desc: "Nhận thiết kế và gắn cờ cho xe ô tô, xe máy phục vụ sự kiện, lễ hội, hội nhóm hoặc nhu cầu cá nhân. Chất liệu cờ cao cấp, màu sắc bền đẹp.",
    },
    {
      title: "Bảo Hành, Bảo Dưỡng & Hậu Mãi Chu Đáo",
      img: "https://i.postimg.cc/8cH2Gm02/anh20.png",
      desc: "Tất cả sản phẩm tại Biển Số Hoàng đều được bảo hành 12 tháng. Hỗ trợ kiểm tra, ép lại miễn phí nếu có lỗi kỹ thuật hoặc bong mép trong quá trình sử dụng.",
    },
  ];

  return (
    <div>
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* Tiêu đề */}
      <h1 className="text-2xl font-bold border-b-2 border-red-600 inline-block mb-8">
        Dịch Vụ Của Biển Số Hoàng
      </h1>

      <p className="text-gray-700 mb-10 leading-relaxed text-justify">
        <strong>Biển Số Hoàng</strong> tự hào mang đến chuỗi dịch vụ hoàn thiện
        dành cho xe máy và ô tô. Với kinh nghiệm nhiều năm trong lĩnh vực ép và
        gia công biển số, chúng tôi luôn đặt chất lượng, thẩm mỹ và độ bền lên hàng đầu.
      </p>

      {/* Danh sách dịch vụ */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-1"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-red-600 text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {item.desc}
              </p>
              <a
                href="https://zalo.me/0971133799"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white text-sm px-5 py-2 rounded-md hover:bg-red-700 transition"
              >
                Liên hệ Zalo
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Đoạn kết */}
      <div className="text-center mt-12">
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Với phương châm <strong>“Uy tín tạo nên thương hiệu”</strong>, Biển Số Hoàng
          luôn không ngừng cải tiến để phục vụ khách hàng tốt nhất. Hãy để chúng tôi giúp
          bạn sở hữu một bộ biển số đẹp, bền và chuẩn form nhất!
        </p>
        <a
          href="https://zalo.me/0971133799"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-red-600 text-white px-8 py-3 rounded-md font-semibold uppercase hover:bg-red-700 transition"
        >
          Nhắn Zalo Ngay
        </a>
      </div>
    </div>
     <ContactSection />
    </div>
  );
}

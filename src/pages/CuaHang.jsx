export default function CuaHang() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 bg-gray-50">
      {/* Banner chính */}
      <section className="relative rounded-2xl overflow-hidden shadow-xl mb-16">
        <img
          src="/anh1.png"
          alt="Cửa hàng Biển Số Hoàng"
          className="w-full h-96 object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
            CỬA HÀNG BIỂN SỐ HOÀNG
          </h1>
          <p className="max-w-2xl text-lg md:text-xl leading-relaxed">
            Chuyên gia trong lĩnh vực biển số xe, phụ kiện ô tô và dịch vụ chăm sóc xe uy tín hàng đầu Việt Nam.
          </p>
          <div className="mt-5">
            <a
              href="#lienhe"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
            >
              Liên hệ ngay
            </a>
          </div>
        </div>
      </section>

      {/* Giới thiệu */}
      <section className="mb-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Giới Thiệu Cửa Hàng</h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg">
          <span className="text-red-600 font-semibold">Biển Số Hoàng</span> được thành lập với sứ mệnh
          mang đến những sản phẩm biển số, phụ kiện xe hơi và dịch vụ chăm sóc xe chất lượng cao nhất.
          Với đội ngũ kỹ thuật viên lành nghề và trang thiết bị hiện đại, chúng tôi cam kết mang lại trải
          nghiệm hoàn hảo cho mọi khách hàng.
        </p>
      </section>

      {/* Hình ảnh cửa hàng */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Không Gian Cửa Hàng
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <img
                src="/anh1.png"
                alt={`Không gian ${i}`}
                className="w-full h-64 object-cover transform hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Quy trình làm việc */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Quy Trình Phục Vụ Khách Hàng
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { step: "01", title: "Tư vấn chi tiết", desc: "Lắng nghe nhu cầu và tư vấn giải pháp phù hợp nhất cho khách hàng." },
            { step: "02", title: "Thiết kế & báo giá", desc: "Đưa ra mẫu thiết kế, chất liệu và giá cả minh bạch." },
            { step: "03", title: "Gia công sản phẩm", desc: "Thực hiện sản xuất bằng máy móc hiện đại, đảm bảo độ chính xác cao." },
            { step: "04", title: "Bàn giao & bảo hành", desc: "Kiểm tra kỹ lưỡng trước khi bàn giao, hỗ trợ bảo hành trọn gói." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border-t-4 border-red-600 transition"
            >
              <div className="text-3xl font-bold text-red-600 mb-2">{item.step}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Đội ngũ nhân viên */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Đội Ngũ Chuyên Nghiệp
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {["Nguyễn Văn A", "Trần Thị B", "Lê Văn C"].map((name, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition transform hover:-translate-y-1"
            >
              <img
                src="/anh1.png"
                alt={name}
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-red-500 mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
              <p className="text-gray-500 text-sm">Kỹ thuật viên – Chuyên gia phục hồi biển số</p>
            </div>
          ))}
        </div>
      </section>

      {/* Phản hồi khách hàng */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Khách Hàng Nói Gì Về Chúng Tôi
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Anh Minh (Hà Nội)", text: "Dịch vụ chuyên nghiệp, biển số phục hồi như mới. Rất hài lòng!" },
            { name: "Chị Hương (TP.HCM)", text: "Đặt biển số theo yêu cầu cực nhanh, nhân viên tư vấn tận tình." },
            { name: "Anh Đức (Đà Nẵng)", text: "Sản phẩm chất lượng, đóng gói cẩn thận và giao hàng đúng hẹn." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition border-t-4 border-red-600"
            >
              <p className="text-gray-700 italic mb-4">“{item.text}”</p>
              <h4 className="font-semibold text-red-600">{item.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Thành tựu */}
      <section className="mb-20 bg-white p-10 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Thành Tựu & Cam Kết</h2>
        <div className="w-16 h-1 bg-red-600 mx-auto mb-8"></div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { number: "10+", label: "Năm kinh nghiệm" },
            { number: "50.000+", label: "Khách hàng hài lòng" },
            { number: "100%", label: "Cam kết chất lượng" },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-red-600 mb-2">{item.number}</div>
              <p className="text-gray-700 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vị trí bản đồ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Vị Trí Cửa Hàng</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-gray-200">
          <iframe
            title="Bản đồ Biển Số Hoàng"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.468... (link thật bạn chèn sau)"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Liên hệ */}
      <section id="lienhe" className="bg-red-600 text-white py-12 rounded-2xl text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Liên Hệ Với Biển Số Hoàng</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Chúng tôi luôn sẵn sàng hỗ trợ bạn nhanh chóng nhất. Hãy liên hệ ngay để được tư vấn miễn phí.
        </p>
        <p className="text-lg">
          📞 Hotline: <span className="font-semibold">0568 050 505</span>
          <br />
          📍 Địa chỉ: 123 Đường ABC, Quận 1, TP. Hồ Chí Minh
          <br />
          🌐 Website:{" "}
          <a href="https://epbiensohoang.com" className="underline font-semibold text-white">
            epbiensohoang.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        © 2025 Biển Số Hoàng. All rights reserved.
      </footer>
    </div>
  );
}

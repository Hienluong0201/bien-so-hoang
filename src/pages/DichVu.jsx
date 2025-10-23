export default function DichVu() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* Tiêu đề */}
      <h1 className="text-3xl font-bold border-b-2 border-red-600 inline-block mb-8">
        Dịch Vụ
      </h1>

      {/* Khu vực bài nổi bật + danh sách bài */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {/* Bài nổi bật */}
        <div className="md:col-span-2 bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
          <img
            src="/anh1.png"
            alt="Dịch vụ phục hồi xe tai nạn"
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">📅 01-10-2025</p>
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              Dịch Vụ Phục Hồi Xe Tai Nạn
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Phục hồi xe tai nạn là việc kiểm tra, sửa chữa các bộ phận trong và ngoài xe sau khi
              xảy ra va chạm. Dù mức độ nặng hay nhẹ, chủ xe cũng đưa xe tới garage uy tín để kiểm tra
              và phát hiện các vấn đề tiềm ẩn...
              <a href="#" className="text-red-600 font-medium ml-1 hover:underline">
                Xem thêm &gt;&gt;
              </a>
            </p>
          </div>
        </div>

        {/* Danh sách bài nhỏ bên phải */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img src="/anh1.png" alt="Ưu đãi dịch vụ" className="h-36 w-full object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">📅 22-09-2025</p>
              <h3 className="text-lg font-semibold text-red-600 hover:underline">
                Ưu Đãi Đặc Biệt – Giảm Giá 20% Cho Khách Hàng Mới
              </h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img src="/anh1.png" alt="Xe bị rỉ dầu" className="h-36 w-full object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">📅 12-09-2025</p>
              <h3 className="text-lg font-semibold text-red-600 hover:underline">
                Xe Bị Rỉ Dầu: Nguyên Nhân &amp; Cách Khắc Phục An Toàn
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Bảo dưỡng & sửa chữa ô tô */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold border-b-2 border-red-600 inline-block mb-6">
          Bảo Dưỡng &amp; Sửa Chữa Ô Tô
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <img src="/anh1.png" alt="Bảo dưỡng ô tô" className="w-full h-72 object-cover" />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">📅 22-09-2025</p>
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Ưu Đãi Đặc Biệt Cho Dịch Vụ Bảo Dưỡng Xe Ô Tô
              </h3>
              <p className="text-gray-700">
                Khi sử dụng dịch vụ bảo dưỡng định kỳ, bạn sẽ nhận ngay ưu đãi giảm 20% cho lần tiếp theo...
                <a href="#" className="text-red-600 ml-1 hover:underline">
                  Xem thêm &gt;&gt;
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "5 Bí Quyết Giúp Xe Luôn Bền Bỉ",
              "3 Cách Kiểm Tra Bảo Hành Chính Xác",
              "Xe Trầy Xước – Mẹo Xử Lý Hiệu Quả",
              "Bảo Dưỡng Ô Tô Định Kỳ Là Gì?",
            ].map((title, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow hover:shadow-md transition"
              >
                <img src="/anh1.png" className="w-24 h-16 rounded-md object-cover" />
                <div>
                  <h4 className="font-semibold text-red-600 leading-snug">{title}</h4>
                  <p className="text-sm text-gray-500">📅 07-09-2025</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Sơn phục hồi & nâng cấp thân vỏ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold border-b-2 border-red-600 inline-block mb-6">
          Sơn Phục Hồi &amp; Nâng Cấp Thân Vỏ
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <img src="/anh1.png" alt="Sơn thân vỏ ô tô" className="w-full h-72 object-cover" />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">📅 08-09-2025</p>
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                5 Giải Pháp Sơn Và Phục Hồi Thân Vỏ Hiệu Quả
              </h3>
              <p className="text-gray-700">
                Quy trình sơn xe tiêu chuẩn giúp xe lấy lại vẻ đẹp ban đầu, bảo vệ lớp sơn bền lâu...
                <a href="#" className="text-red-600 ml-1 hover:underline">
                  Xem thêm &gt;&gt;
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "Sơn Lazang Ô Tô Thẩm Mỹ",
              "Sơn Đổi Màu Xe Ô Tô Sang Trọng",
              "Báo Giá Dịch Vụ Sơn Xe Mới Nhất 2024",
            ].map((title, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow hover:shadow-md transition"
              >
                <img src="/anh1.png" className="w-24 h-16 rounded-md object-cover" />
                <div>
                  <h4 className="font-semibold text-red-600 leading-snug">{title}</h4>
                  <p className="text-sm text-gray-500">📅 05-08-2024</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Cứu hộ ô tô */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold border-b-2 border-red-600 inline-block mb-6">
          Cứu Hộ Ô Tô
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <img src="/anh1.png" alt="Cứu hộ ô tô" className="w-full h-72 object-cover" />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">📅 08-09-2025</p>
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Top 5 Dịch Vụ Cứu Hộ Ô Tô Nhanh Chóng, An Toàn Được Tin Chọn
              </h3>
              <p className="text-gray-700">
                Dịch vụ cứu hộ ô tô uy tín giúp khắc phục sự cố nhanh chóng 24/7, đảm bảo an toàn cho hành trình...
                <a href="#" className="text-red-600 ml-1 hover:underline">
                  Xem thêm &gt;&gt;
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "Sửa Chữa Lưu Động",
              "Dịch Vụ Sửa Xe Tại Nhà",
              "Khi Nào Cần Gọi Cứu Hộ Ô Tô?",
            ].map((title, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow hover:shadow-md transition"
              >
                <img src="/anh1.png" className="w-24 h-16 rounded-md object-cover" />
                <div>
                  <h4 className="font-semibold text-red-600 leading-snug">{title}</h4>
                  <p className="text-sm text-gray-500">📅 01-09-2025</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

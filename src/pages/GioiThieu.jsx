export default function GioiThieu() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* Tiêu đề */}
      <h1 className="text-3xl font-bold border-b-2 border-red-600 inline-block mb-8">
        Giới Thiệu
      </h1>

      {/* Section: Bài nổi bật + Bài phụ */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {/* Bài nổi bật */}
        <div className="md:col-span-2 bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
          <img
            src="/anh1.png"
            alt="Giới thiệu Biển Số Hoàng"
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">📅 22-10-2025</p>
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              Biển Số Hoàng Chung Tay Hướng Về Miền Trung Thân Yêu
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tinh thần “lá lành đùm lá rách” là truyền thống quý báu của dân tộc Việt Nam.
              Trước những thiệt hại nặng nề do bão lũ, tập thể cán bộ nhân viên Biển Số Hoàng
              đã phát động chương trình quyên góp hỗ trợ đồng bào...
              <a href="#" className="text-red-600 font-medium ml-1 hover:underline">
                Xem thêm &gt;&gt;
              </a>
            </p>
          </div>
        </div>

        {/* Bài phụ bên phải */}
        <div className="space-y-4">
          <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white">
            <img src="/anh1.png" alt="Về chúng tôi" className="h-36 w-full object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">📅 20-08-2024</p>
              <h3 className="text-lg font-semibold text-red-600 hover:underline">Về Chúng Tôi</h3>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white">
            <img src="/anh1.png" alt="Chính sách bảo hành" className="h-36 w-full object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">📅 20-08-2024</p>
              <h3 className="text-lg font-semibold text-red-600 hover:underline">
                Chính Sách Bảo Hành &amp; Đổi Trả
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Khách hàng nói về chúng tôi */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold border-b-2 border-red-600 inline-block mb-6">
          Khách Hàng Nói Về Chúng Tôi
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <img src="/anh1.png" alt="Khách hàng Huyền Trang" className="w-full h-72 object-cover" />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">📅 18-06-2024</p>
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Diễn viên Huyền Trang – “Biệt dược đen”
              </h3>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { name: "Chị Thanh – Chủ hệ thống Spa", date: "04-03-2024" },
              { name: "NSƯT Trần Đức – 'Bố chồng quốc dân'", date: "04-03-2024" },
              { name: "Diễn viên Thanh Tú – 'Cháo Lòng'", date: "04-03-2024" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-center bg-white p-3 rounded-lg shadow hover:shadow-md transition">
                <img src="/anh1.png" className="w-20 h-20 object-cover rounded-md" />
                <div>
                  <h4 className="font-semibold text-red-600">{item.name}</h4>
                  <p className="text-sm text-gray-500">📅 {item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Sự kiện */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold border-b-2 border-red-600 inline-block mb-6">
          Sự Kiện Biển Số Hoàng
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <img src="/anh1.png" alt="Sự kiện chính" className="w-full h-72 object-cover" />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">📅 19-07-2024</p>
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Biển Số Hoàng Đồng Hành “Nâng Bước Trẻ Thơ”
              </h3>
              <p className="text-gray-700">
                Mỗi chiếc biển số bạn chọn không chỉ là phong cách, mà còn là hành động thiện nguyện – cùng chung tay
                giúp đỡ trẻ em khó khăn khắp cả nước...
                <a href="#" className="text-red-600 ml-1 hover:underline">
                  Xem thêm &gt;&gt;
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {["Đối tác nói gì về chúng tôi?", "Khai trương chi nhánh mới", "Giải đấu bóng đá nội bộ"].map(
              (title, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white p-3 rounded-lg shadow hover:shadow-md transition"
                >
                  <img src="/anh1.png" className="w-24 h-16 rounded-md object-cover" />
                  <div>
                    <h4 className="font-semibold text-red-600 leading-snug">{title}</h4>
                    <p className="text-sm text-gray-500">📅 09-07-2024</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Section: Báo chí */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold border-b-2 border-red-600 inline-block mb-6">
          Báo Chí Nói Về Biển Số Hoàng
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <img src="/anh1.png" alt="Báo chí nói về Biển Số Hoàng" className="w-full h-72 object-cover" />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">📅 16-07-2024</p>
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                [Báo Kinh Tế & Đô Thị] Biển Số Hoàng Khẳng Định Uy Tín Với Sản Phẩm Chất Lượng
              </h3>
              <p className="text-gray-700">
                Sản phẩm biển số xe cao cấp của Biển Số Hoàng được đánh giá là tiên phong trong thiết kế và độ bền,
                mang đến trải nghiệm vượt trội cho người dùng...
                <a href="#" className="text-red-600 ml-1 hover:underline">
                  Xem thêm &gt;&gt;
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "[Báo Việt Nam Hội Nhập] Biển Số Hoàng – Vững Vàng Phát Triển",
              "[CafeBiz.vn] CEO Biển Số Hoàng Vinh Dự Nhận Giải",
              "[Dân Trí] Biển Số Hoàng Liên Kết Hợp Tác Cùng Đối Tác Lớn",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-center bg-white p-3 rounded-lg shadow hover:shadow-md transition">
                <img src="/anh1.png" className="w-24 h-16 object-cover rounded-md" />
                <div>
                  <h4 className="font-semibold text-red-600 leading-snug">{item}</h4>
                  <p className="text-sm text-gray-500">📅 18-06-2024</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

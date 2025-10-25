import React from "react";

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
            src="https://i.postimg.cc/V5P8sNY3/anh1.jpg"
            alt="Giới thiệu Biển Số Hoàng"
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              Biển Số Hoàng – Dẫn Đầu Trong Dịch Vụ Ép Biển Số Cao Cấp
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Biển Số Hoàng</strong> là thương hiệu chuyên cung cấp dịch vụ{" "}
              <strong>ép biển số ô tô, xe máy, phục hồi và làm biển số theo yêu cầu</strong>
              với chất lượng hàng đầu Việt Nam. Chúng tôi luôn chú trọng đến độ bền, thẩm mỹ
              và tính an toàn cho từng sản phẩm – mang lại sự hài lòng tuyệt đối cho khách hàng.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Với đội ngũ kỹ thuật viên lành nghề, trang thiết bị hiện đại cùng phong cách
              phục vụ tận tâm, <strong>Biển Số Hoàng</strong> cam kết mang đến sản phẩm hoàn hảo,
              bảo hành chu đáo và giá cả cạnh tranh nhất.
            </p>
          </div>
        </div>

        {/* Bài phụ bên phải */}
        <div className="space-y-4">
          <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white">
            <img
              src="https://i.postimg.cc/tJ5KbNML/anh18.png"
              alt="Về chúng tôi"
              className="h-36 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-red-600 hover:underline">
                Về Chúng Tôi
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Từ khi thành lập, Biển Số Hoàng đã phục vụ hàng ngàn khách hàng trên khắp cả nước,
                được tin tưởng nhờ chất lượng, tốc độ và dịch vụ hậu mãi chu đáo.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white">
            <img
              src="https://i.postimg.cc/x8RwQ34B/anh19.png"
              alt="Chính sách bảo hành"
              className="h-36 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-red-600 hover:underline">
                Chính Sách Bảo Hành &amp; Hậu Mãi
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Tất cả sản phẩm ép biển số được bảo hành chính hãng. Chúng tôi luôn hỗ trợ sửa chữa
                hoặc thay mới miễn phí nếu phát sinh lỗi kỹ thuật trong quá trình sử dụng.
              </p>
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
            <img
              src="https://i.postimg.cc/8cH2Gm02/anh20.png"
              alt="Khách hàng đánh giá"
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Hàng ngàn khách hàng tin tưởng lựa chọn Biển Số Hoàng
              </h3>
              <p className="text-gray-700">
                “Sản phẩm đẹp, chắc chắn, nhân viên thân thiện, bảo hành rõ ràng. Tôi đã giới thiệu
                cho rất nhiều người quen!” – <strong>Khách hàng Huyền Trang</strong>.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "Chị Thanh – Chủ Spa",
                feedback: "Ép nhanh, giá tốt, hình thức đẹp – rất hài lòng!",
              },
              {
                name: "Anh Tuấn – Tài xế công nghệ",
                feedback: "Biển số chắc chắn, mưa gió thoải mái, phục vụ tận tâm.",
              },
              {
                name: "Anh Long – Chủ Garage Auto",
                feedback: "Làm việc chuyên nghiệp, giao đúng hẹn, bảo hành uy tín.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 items-center bg-white p-3 rounded-lg shadow hover:shadow-md transition"
              >
                <img
                  src="https://i.postimg.cc/LhFp4s99/anh4.jpg"
                  className="w-20 h-20 object-cover rounded-md"
                  alt={item.name}
                />
                <div>
                  <h4 className="font-semibold text-red-600">{item.name}</h4>
                  <p className="text-gray-600 text-sm">{item.feedback}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Sự kiện */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold border-b-2 border-red-600 inline-block mb-6">
          Hoạt Động Nổi Bật
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <img
              src="https://i.postimg.cc/zv1tVHhY/anh13-1.png"
              alt="Sự kiện thiện nguyện"
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Biển Số Hoàng Chung Tay Cùng Cộng Đồng
              </h3>
              <p className="text-gray-700">
                Chúng tôi luôn hướng đến các hoạt động thiện nguyện và trách nhiệm xã hội:
                tặng biển số miễn phí cho xe cứu thương, hỗ trợ các tài xế công nghệ khó khăn
                và góp phần lan tỏa giá trị tốt đẹp.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "Khai trương chi nhánh TP.HCM",
              "Hợp tác cùng các hãng xe trong nước",
              "Tham gia chương trình an toàn giao thông toàn quốc",
            ].map((title, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow hover:shadow-md transition"
              >
                <img
                  src="https://i.postimg.cc/RFs8cgxk/anh9.jpg"
                  className="w-24 h-16 rounded-md object-cover"
                  alt={title}
                />
                <div>
                  <h4 className="font-semibold text-red-600 leading-snug">
                    {title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

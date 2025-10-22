export default function GioiThieu() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-red-700 mb-6 uppercase">Giới thiệu</h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        Chào mừng bạn đến với <span className="font-semibold text-red-600">Biển số Hoàng</span> — đơn vị chuyên cung cấp
        các sản phẩm biển số xe cao cấp, phụ kiện ô tô và dịch vụ liên quan. Với nhiều năm kinh nghiệm, chúng tôi tự
        hào mang đến cho khách hàng sản phẩm chất lượng và dịch vụ tận tâm nhất.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Chúng tôi không ngừng cập nhật công nghệ, mẫu mã và quy trình sản xuất để đáp ứng nhu cầu ngày càng cao của
        khách hàng. Mỗi sản phẩm đều được kiểm định kỹ càng trước khi giao đến tay người tiêu dùng.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Hãy đến với <span className="font-semibold text-red-600">Biển số Hoàng</span> để trải nghiệm dịch vụ chuyên
        nghiệp, nhanh chóng và đáng tin cậy!
      </p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Liên hệ với chúng tôi</h2>
        <ul className="text-gray-700 space-y-1">
          <li>📞 Hotline: 0568 050 505</li>
          <li>📍 Địa chỉ: 123 Đường ABC, TP. Hồ Chí Minh</li>
          <li>🌐 Website: <a href="https://biensohuong.com" className="text-red-600 hover:underline">biensohuong.com</a></li>
        </ul>
      </div>
    </div>
  );
}

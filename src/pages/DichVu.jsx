import React from "react";

export default function DichVu() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-red-700 mb-6 uppercase">Dịch vụ của chúng tôi</h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        <span className="font-semibold text-red-600">Biển số Hoàng</span> cung cấp đa dạng các dịch vụ chất lượng cao
        liên quan đến biển số xe, phụ kiện và chăm sóc khách hàng. Chúng tôi luôn nỗ lực mang đến sự hài lòng tối đa
        cho từng khách hàng.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-red-600">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">🔧 Gia công biển số theo yêu cầu</h2>
          <p className="text-gray-600 text-sm">
            Thiết kế, in khắc và hoàn thiện biển số theo đúng chuẩn, nhanh chóng và chính xác.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-red-600">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">🚗 Lắp đặt phụ kiện xe</h2>
          <p className="text-gray-600 text-sm">
            Cung cấp và lắp đặt phụ kiện chính hãng cho ô tô, xe máy, giúp xe của bạn nổi bật hơn.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-red-600">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">📦 Giao hàng toàn quốc</h2>
          <p className="text-gray-600 text-sm">
            Hỗ trợ giao hàng nhanh chóng đến mọi tỉnh thành trên toàn quốc với chính sách bảo hành rõ ràng.
          </p>
        </div>
      </div>

      <div className="mt-10 text-gray-700">
        <h2 className="text-xl font-semibold mb-3 text-red-700">Liên hệ ngay</h2>
        <p>
          📞 Hotline: <span className="font-semibold">0568 050 505</span> <br />
          🌐 Website:{" "}
          <a href="https://epbiensohoang.com" className="text-red-600 hover:underline">
            epbiensohoang.com
          </a>
        </p>
      </div>
    </div>
  );
}

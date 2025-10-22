import React, { useState } from "react";

export default function LienHe() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-red-700 mb-6 uppercase">Liên hệ</h1>

      <p className="text-gray-700 mb-8">
        Hãy để lại lời nhắn hoặc liên hệ trực tiếp với{" "}
        <span className="text-red-600 font-semibold">Biển số Hoàng</span> nếu bạn cần tư vấn, hỗ trợ
        hoặc đặt hàng. Chúng tôi luôn sẵn sàng phục vụ bạn!
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Form liên hệ */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-red-600"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Họ và tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nhập họ và tên"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Số điện thoại</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Nhập số điện thoại"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Nội dung</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Nhập nội dung cần hỗ trợ..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition"
          >
            Gửi liên hệ
          </button>
        </form>

        {/* Thông tin liên hệ */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Thông tin liên hệ</h2>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>📞 Hotline: <span className="font-semibold">0568 050 505</span></li>
            <li>📍 Địa chỉ: 123 Đường ABC, TP. Hồ Chí Minh</li>
            <li>🌐 Website: <a href="https://epbiensohoang.com" className="text-red-600 hover:underline">epbiensohoang.com</a></li>
            <li>💬 Zalo: <a href="https://zalo.me/0568050505" className="text-red-600 hover:underline">0568 050 505</a></li>
          </ul>

          {/* Google Map */}
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.502198294212!2d106.70098727576507!3d10.7733749592678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f39a52a03a3%3A0x7c3f12e727e10d08!2zU8ahbiBQaOG6oW0sIFBoxrDhu51uZyAxLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1678888888888!5m2!1svi!2s"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md border"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

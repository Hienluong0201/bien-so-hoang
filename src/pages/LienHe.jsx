import React, { useState } from "react";

export default function LienHe() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mpwoajny", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Gửi thành công! Cảm ơn bạn đã liên hệ Biển Số Hoàng.");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        alert("❌ Có lỗi xảy ra, vui lòng thử lại sau!");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Không thể gửi, vui lòng kiểm tra lại kết nối mạng.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-red-700 mb-6 uppercase">
        Liên Hệ Ngay Với Biển Số Hoàng
      </h1>

      <p className="text-gray-700 mb-8 max-w-3xl">
        Nếu bạn cần tư vấn, hỗ trợ kỹ thuật hoặc đặt hàng, hãy để lại thông tin bên dưới.
        <strong className="text-red-600"> Biển Số Hoàng</strong> sẽ liên hệ lại sớm nhất có thể.
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
            disabled={isSubmitting}
            className={`w-full font-semibold py-2 rounded-md transition ${
              isSubmitting
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-red-600 text-white hover:bg-red-700"
            }`}
          >
            {isSubmitting ? "Đang gửi..." : "Gửi liên hệ"}
          </button>
        </form>

        {/* Thông tin liên hệ */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Thông Tin Liên Hệ
          </h2>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>📞 Hotline: <span className="font-semibold">0971 133 799</span></li>
            <li>📍 Địa chỉ: 123 Đường ABC, Quận Bình Tân, TP. Hồ Chí Minh</li>
            <li>
              🌐 Website:{" "}
              <a
                href="https://epbiensohoang.com"
                className="text-red-600 hover:underline"
              >
                epbiensohoang.com
              </a>
            </li>
            <li>
              💬 Zalo:{" "}
              <a
                href="https://zalo.me/0971133799"
                className="text-red-600 hover:underline"
              >
                0971 133 799
              </a>
            </li>
          </ul>

          {/* Google Map */}
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.988477313886!2d106.62640607476565!3d10.812193289338772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bd6058f3fb1%3A0xd7f509b6d11c48c6!2zw4lwIGJp4buDbiBT4buRIEhvw6BuZw!5e0!3m2!1sen!2s!4v1761359872342!5m2!1sen!2s"
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

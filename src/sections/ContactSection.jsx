import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
        <h2 className="text-center text-lg md:text-2xl font-bold mb-6 uppercase">
          ĐỊA CHỈ & <span className="text-red-600">LIÊN HỆ</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Thông tin liên hệ */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Thông tin cửa hàng
            </h3>
            <p className="text-gray-600 mb-2">
              📍 <span className="font-medium">Địa chỉ:</span> 69 Đường Số 4,
              Phường 15, Quận Tân Bình, TP. Hồ Chí Minh
            </p>
            <p className="text-gray-600 mb-2">
              ☎️ <span className="font-medium">Hotline:</span>{" "}
              <a href="tel:0987654321" className="text-red-600 font-semibold">
                0987 654 321
              </a>
            </p>
            <p className="text-gray-600 mb-2">
              💬 <span className="font-medium">Zalo:</span> 0987 654 321
            </p>
            <p className="text-gray-600 mb-4">
              🌐 <span className="font-medium">Facebook:</span>{" "}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                fb.com/epbiensodep
              </a>
            </p>
            <p className="text-gray-500 text-sm">
              Giờ mở cửa: <br />
              <span className="font-medium text-gray-700">
                8:00 – 20:00 (Tất cả các ngày)
              </span>
            </p>

            {/* Nút xem chỉ đường */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=10.812193,106.626406"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 bg-red-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-red-700 transition"
            >
              📍 Xem chỉ đường
            </a>
          </div>

          {/* Bản đồ Google */}
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-inner">
            <iframe
              title="Địa chỉ cửa hàng"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.988477313886!2d106.62640607476565!3d10.812193289338772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bd6058f3fb1%3A0xd7f509b6d11c48c6!2zw4lwIGJp4buDbiBT4buRIEhvw6BuZw!5e0!3m2!1sen!2s!4v1761359872342!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

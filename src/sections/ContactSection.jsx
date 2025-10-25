import React from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-red-50 py-16 px-6 overflow-hidden">
      {/* Vệt sáng nền */}
      <div className="absolute inset-0 bg-[url('https://i.postimg.cc/nrSZDQ8J/ch11.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/30"
      >
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10 uppercase text-gray-800 tracking-wide">
          📍 ĐỊA CHỈ &{" "}
          <span className="text-red-600 drop-shadow-md">LIÊN HỆ NGAY</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* 🏠 Thông tin liên hệ */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800 border-l-4 border-red-600 pl-3">
              Thông Tin Cửa Hàng
            </h3>
            <p className="text-gray-700">
              📍 <span className="font-semibold">Địa chỉ:</span> 69 Đường Số 4, Phường 15, Quận Tân Bình, TP. Hồ Chí Minh
            </p>
            <p className="text-gray-700">
              ☎️ <span className="font-semibold">Hotline:</span>{" "}
              <a href="tel:0971133799" className="text-red-600 font-bold hover:underline">
                0971 133 799
              </a>
            </p>
            <p className="text-gray-700">
              💬 <span className="font-semibold">Zalo:</span>{" "}
              <a
                href="https://zalo.me/0971133799"
                className="text-blue-600 font-medium hover:underline"
              >
                0971 133 799
              </a>
            </p>
            <p className="text-gray-700">
              🌐 <span className="font-semibold">Website:</span>{" "}
              <a
                href="https://epbiensohoang.com"
                target="_blank"
                rel="noreferrer"
                className="text-red-600 hover:underline"
              >
                epbiensohoang.com
              </a>
            </p>
            <p className="text-gray-700">
              💎 <span className="font-semibold">Facebook:</span>{" "}
              <a
                href="https://www.facebook.com/share/1aQa3FTwTv/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                fb.com/epbiensodep
              </a>
            </p>
            <p className="text-gray-500 text-sm mt-3">
              🕘 <span className="font-medium text-gray-700">Giờ mở cửa:</span>{" "}
              <br /> 8:00 – 20:00 (Tất cả các ngày trong tuần)
            </p>

            {/* 🔘 Nút chỉ đường */}
            <motion.a
              href="https://www.google.com/maps/dir/?api=1&destination=10.812193,106.626406"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-6 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-red-300 transition"
            >
              📍 Xem chỉ đường
            </motion.a>
          </div>

          {/* 🗺️ Bản đồ Google */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
          >
            <iframe
              title="Địa chỉ cửa hàng"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.988477313886!2d106.62640607476565!3d10.812193289338772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bd6058f3fb1%3A0xd7f509b6d11c48c6!2zw4lwIGJp4buDbiBT4buRIEhvw6BuZw!5e0!3m2!1sen!2s!4v1761359872342!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-2xl"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* viền sáng */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

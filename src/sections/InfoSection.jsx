import React from "react";

export default function InfoSection() {
  return (
    <section className="bg-gray-900 text-white py-8 px-6 text-center">
      <h2 className="text-lg md:text-xl font-semibold mb-2 uppercase tracking-wide">
        Liên hệ <span className="text-red-500">Biển Số Hoàng</span>
      </h2>

      <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
        Địa chỉ: 78-80 Chế Lan Viên, Phường Tây Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
        <br />
        Hotline:{" "}
        <a href="tel:0971133799" className="text-red-500 font-semibold hover:underline">
          0971.133.799
        </a>{" "}
        | Zalo:{" "}
        <a
          href="https://zalo.me/0971133799"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 font-semibold hover:underline"
        >
          Biển Số Hoàng
        </a>
      </p>

      <p className="text-xs text-gray-500">
        © 2025 <span className="text-red-500 font-semibold">Biển Số Hoàng</span> — Tất cả các quyền được bảo lưu.
      </p>
    </section>
  );
}

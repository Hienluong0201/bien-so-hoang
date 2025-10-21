import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-gray-600 mb-6">Trang bạn tìm không tồn tại</p>
      <Link
        to="/"
        className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
      >
        Quay lại trang chủ
      </Link>
    </div>
  );
};

export default NotFound;

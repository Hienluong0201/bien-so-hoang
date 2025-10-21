import React from "react";
import { FaFacebookF, FaYoutube, FaTiktok, FaInstagram, FaPhoneAlt } from "react-icons/fa";

export default function HeaderTop() {
  return (
    <div className="flex justify-between items-center bg-white py-3 px-6 border-b border-red-500">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="Hà Thành Garage" className="h-16 md:h-20 w-auto" />
      </div>

      {/* Mạng xã hội + SĐT */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-3 text-xl text-gray-700">
          <a
            href="https://www.facebook.com/share/1aQa3FTwTv/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-red-600">
            <FaYoutube />
          </a>
          <a
            href="https://www.tiktok.com/@epbiensochuyennghiep?_t=ZS-90jheb8fjsr&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaTiktok />
          </a>
          <a href="#" className="hover:text-pink-600">
            <FaInstagram />
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-red-600 text-white p-3 rounded-full">
            <FaPhoneAlt />
          </div>
          <div>
             <p className="text-[12px] font-semibold text-gray-900 leading-tight">0971 133 799</p>
          </div>
        </div>
      </div>
    </div>
  );
}

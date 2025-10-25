import React, { useState, useEffect } from "react";
import HeroSection from "../sections/HeroSection";
import WelcomeSection from "../sections/WelcomeSection";
import ServicesSection from "../sections/ServicesSection";
import AccessoriesSection from "../sections/AccessoriesSection";
import CustomerReviews from "../sections/CustomerReviews";
import ContactSection from "../sections/ContactSection";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full relative">
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <AccessoriesSection />
      <CustomerReviews />
      <ContactSection />

      {/* 🎉 Modal khuyến mãi */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 max-w-md mx-4 text-center relative animate-fadeInScale border-t-4 border-red-600">
            {/* nút đóng */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-600 text-2xl font-bold"
            >
              ×
            </button>

            {/* tiêu đề */}
            <h2 className="text-1xl md:text-3xl font-extrabold text-red-600 mb-4 drop-shadow-sm tracking-wide">
              🎉 ƯU ĐÃI ĐẶC BIỆT THÁNG NÀY 🎉
            </h2>

            {/* nội dung */}
            <p className="text-gray-700 mb-3 text-base leading-relaxed">
              Giảm <strong className="text-red-600">10%</strong> cho{" "}
              <strong className="text-gray-800">5 khách hàng đầu tiên</strong>{" "}
              khi làm{" "}
              <strong className="text-gray-800">biển số ô tô</strong> hoặc{" "}
              <strong className="text-gray-800">xe máy</strong> trong tuần này.
            </p>

            <p className="text-sm text-gray-500 mb-6 italic">
              Số lượng có hạn – hãy đặt sớm để nhận ưu đãi hấp dẫn nhất!
            </p>

            {/* nút hành động */}
            <a
              href="https://zalo.me/0971133799"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:from-red-700 hover:to-red-600 transition-all duration-200"
            >
              💬 Liên hệ ngay qua Zalo
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

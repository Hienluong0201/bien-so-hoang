import React from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { motion } from "framer-motion";

export default function SocialFloating() {
  // Hiệu ứng nảy lặp vô hạn
  const bounce = {
    animate: {
      y: [0, -18, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed bottom-6 right-4 flex flex-col gap-3 z-50">
      {/* ZALO */}
      <motion.a
        href="https://zalo.me/0971133799"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        variants={bounce}
        animate="animate"
      >
        <SiZalo size={26} />
      </motion.a>

      {/* FACEBOOK */}
      <motion.a
        href="https://www.facebook.com/share/1aQa3FTwTv/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        variants={bounce}
        animate="animate"
        transition={{ delay: 0.3 }}
      >
        <FaFacebook size={26} />
      </motion.a>

      {/* TIKTOK */}
      <motion.a
        href="https://www.tiktok.com/@epbiensochuyennghiep?_t=ZS-90jheb8fjsr&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        variants={bounce}
        animate="animate"
        transition={{ delay: 0.6 }}
      >
        <FaTiktok size={24} />
      </motion.a>
    </div>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderTop from "./components/HeaderTop";
import NavBar from "./components/NavBar";
import InfoSection from "./sections/InfoSection";
import SocialFloating from "./components/SocialFloating"; // 👈 thêm dòng này
import PhuKienChiTiet from "./pages/PhuKienChiTiet"; // 👈 thêm dòng này

// Các trang
import Home from "./pages/Home";
import GioiThieu from "./pages/GioiThieu"; 
import DichVu from "./pages/DichVu";
import SanPham from "./pages/SanPham";
import CuaHang from "./pages/CuaHang";
import Blog from "./pages/Blog"; 
import KhuyenMai from "./pages/KhuyenMai";
import LienHe from "./pages/LienHe";
import TinTuc from "./pages/TinTuc";
function App() {
  return (
    <Router>
      <HeaderTop />
      <NavBar />

   
      <SocialFloating />

      {/* Nội dung từng trang */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<GioiThieu />} />
        <Route path="/dich-vu" element={<DichVu />} /> 
        <Route path="/san-pham" element={<SanPham />} />
        <Route path="/cua-hang" element={<CuaHang />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/khuyen-mai" element={<KhuyenMai />} />
        <Route path="/lien-he" element={<LienHe />} />
        <Route path="/tin-tuc" element={<TinTuc />} />
       <Route path="/phu-kien/:slug" element={<PhuKienChiTiet />} />
      </Routes>

      <InfoSection />
    </Router>
  );
}

export default App;

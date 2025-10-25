import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "TRANG CHỦ" },
  { href: "/gioi-thieu", label: "GIỚI THIỆU" },
  { href: "/dich-vu", label: "DỊCH VỤ" },
  { href: "/san-pham", label: "SẢN PHẨM" },
  { href: "/cua-hang", label: "CỬA HÀNG" },
  { href: "/blog", label: "BLOG" },
  { href: "/khuyen-mai", label: "KHUYẾN MẠI" },
  { href: "/lien-he", label: "LIÊN HỆ" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-[#e8e8e8] border-t border-red-500 shadow-md">

      {/* Desktop menu */}
      <div className="hidden md:flex justify-between items-center px-10 py-3">
        <nav className="flex items-center space-x-8 font-semibold text-sm uppercase text-gray-800">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-red-600 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Ô tìm kiếm */}
        <div className="flex items-center bg-white rounded-full border border-red-500 px-3">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 outline-none bg-transparent text-sm"
          />
          <button className="text-red-600">
            <Search />
          </button>
        </div>
      </div>

      {/* Mobile header */}
     <div className="flex justify-between items-center p-4 md:hidden">
  {/* Nút mở menu */}
  <button onClick={() => setOpen(true)}>
    <Menu className="h-6 w-6 text-red-600" />
  </button>

  {/* Logo + chữ “Biển số Hoàng” */}
<a href="/" className="flex items-center space-x-2">
  <img
    src="/logo.png"
    alt="Biển số Hoàng"
    className="h-10 w-auto"
  />
  <span className="font-bold text-sm text-red-700 uppercase tracking-wide">
    Biển số Hoàng
  </span>
</a>


  {/* Icon Zalo */}
  <a
    href="https://zalo.me/0971133799"
    target="_blank"
    rel="noopener noreferrer"
    
  >
    <img
      src="https://i.postimg.cc/SKnzHyKD/Logo-Zalo-Arc.webp"
      alt="Zalo"
      className="h-5 w-5 "
    />
  </a>
</div>


      {/* Menu trượt mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <input
                type="text"
                placeholder="Nhập từ khóa..."
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              <button onClick={() => setOpen(false)} className="ml-2 text-red-600">
                <X />
              </button>
            </div>

            <div className="flex flex-col space-y-4 text-red-700 font-semibold">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex justify-between items-center border-b pb-2"
                  onClick={() => setOpen(false)}
                >
                  {link.label} <span>›</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

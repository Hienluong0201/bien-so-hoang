export default function SanPham() {
  const items = [
    { truoc: "https://i.postimg.cc/JzxGR85p/truoc1.jpg", sau: "https://i.postimg.cc/9FsyjhC5/sau1.jpg" },
    { truoc: "https://i.postimg.cc/QdmHjDJ4/truoc2.jpg", sau: "https://i.postimg.cc/5ND8MVbJ/sau2.jpg" },
    { truoc: "https://i.postimg.cc/y8sDqxcM/truoc3.jpg", sau: "https://i.postimg.cc/RFn3MP9S/sau34.jpg" },
    { truoc: "https://i.postimg.cc/mgBPxk7x/truoc4.jpg", sau: "https://i.postimg.cc/RFn3MP9S/sau34.jpg" },
    { truoc: "https://i.postimg.cc/vDws8mYR/anh1-1.jpg", sau: "https://i.postimg.cc/3JpSR8WM/anh5.jpg" },
    { truoc: "https://i.postimg.cc/x1wFTrjM/truoc5.jpg", sau: "https://i.postimg.cc/3JpSR8WM/anh5.jpg" },
  ];

  // === Phần ảnh thực tế nữ ===
  const anhThucTeNu = [
    // Thay các link này bằng ảnh thật của bạn
    "https://i.postimg.cc/FsfV8drY/213.jpg",
    "https://i.postimg.cc/zDCQv8xy/1.jpg",
    "https://i.postimg.cc/8PT0r9Yh/10.jpg",
    "https://i.postimg.cc/VLzVbphq/11.jpg",
    "https://i.postimg.cc/TYT4WFsq/12.jpg",
    "https://i.postimg.cc/4NXShq0W/13.jpg",
    "https://i.postimg.cc/FshBJ86C/14.jpg",
    "https://i.postimg.cc/7YqWTdRs/15.jpg",
    "https://i.postimg.cc/vHGN6kKj/16.jpg",
    "https://i.postimg.cc/hPK576wF/17.jpg",
    "https://i.postimg.cc/c4db82zp/18.jpg",
    "https://i.postimg.cc/CLwQfXtT/19.jpg",
    "https://i.postimg.cc/59Brybs6/2.jpg",
    "https://i.postimg.cc/4NwFvwCL/20.jpg",
    "https://i.postimg.cc/4NwFvwCL/20.jpg",
    "https://i.postimg.cc/5Npk5pdV/21.jpg",
    "https://i.postimg.cc/tCDmdDQy/22.jpg",
    "https://i.postimg.cc/65z1VzJ5/23.jpg",
    "https://i.postimg.cc/X7xDKxSJ/24.jpg",
    "https://i.postimg.cc/Yq8yN8K0/25.jpg",
    "https://i.postimg.cc/bNLF0Lcs/26.jpg",
    "https://i.postimg.cc/65z1VzJ8/27.jpg",
    "https://i.postimg.cc/4xd2WtsN/29.jpg",
    "https://i.postimg.cc/bYx5rpmG/3.jpg",
    "https://i.postimg.cc/JznYpJMz/30.jpg",
    "https://i.postimg.cc/RZFpgf4N/31.jpg",
    "https://i.postimg.cc/Cx1rcDSZ/32.jpg",
    "https://i.postimg.cc/L8XQxf2k/33.jpg",
    "https://i.postimg.cc/Gm2gXYdj/34.jpg",
    "https://i.postimg.cc/rwmZfWMf/35.jpg",
    "https://i.postimg.cc/Bn67mD4M/36.jpg",
    "https://i.postimg.cc/0yBWFQyY/37.jpg",
    "https://i.postimg.cc/L8bCwX8D/38.jpg",
    "https://i.postimg.cc/dVxHp1Vn/39.jpg",
    "https://i.postimg.cc/CMG25Sc5/4.jpg",
    "https://i.postimg.cc/dVxHp1V5/40.jpg",
    "https://i.postimg.cc/FHBW8RHC/41.jpg",
    "https://i.postimg.cc/4xSLqdxj/42.jpg",
    "https://i.postimg.cc/P5R39x5B/43.jpg",
    "https://i.postimg.cc/dQ2f3w5R/5.jpg",

    // ... thêm tiếp cho đến 45 ảnh
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* Tiêu đề */}
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Phục Hồi Biển Số
        <div className="flex justify-center mt-3">
          <div className="w-16 h-1 bg-red-600 rounded"></div>
        </div>
      </h1>

      {/* Grid các cặp ảnh */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white border-4 border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <div className="grid grid-cols-2 gap-0">
              {/* Trước */}
              <div className="relative border-r-2 border-gray-100">
                <img
                  src={item.truoc}
                  alt="Ảnh trước"
                  className="w-full h-56 object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute top-2 left-2 bg-blue-700 text-white font-bold text-sm px-4 py-1 rounded-lg shadow">
                  TRƯỚC
                </div>
              </div>

              {/* Sau */}
              <div className="relative">
                <img
                  src={item.sau}
                  alt="Ảnh sau"
                  className="w-full h-56 object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white font-bold text-sm px-4 py-1 rounded-lg shadow">
                  SAU
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 border-t text-center">
              <p className="text-gray-700 text-sm">
                So sánh kết quả trước và sau khi phục hồi biển số tại{" "}
                <span className="text-red-600 font-semibold">Biển Số Hoàng</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* === PHẦN HÌNH ẢNH THỰC TẾ ĐI LẮP BIỂN === */}
<h2 className="text-3xl font-extrabold text-center mb-8 text-gray-900 uppercase tracking-tight">
  Hình Ảnh Thực Tế – Đi Lắp Biển Số Xe
  <div className="flex justify-center mt-3">
    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded"></div>
  </div>
</h2>

<p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
  Những khoảnh khắc thực tế ghi lại quá trình <span className="font-semibold text-red-600">Biển Số Hoàng</span> 
  trực tiếp lắp đặt và phục hồi biển số cho khách hàng — tác phong chuyên nghiệp, tận tâm và chuẩn chỉnh từng chi tiết.
</p>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
  {anhThucTeNu.map((url, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      <img
        src={url}
        alt={`Ảnh thực tế lắp biển số ${index + 1}`}
        className="w-full h-48 object-cover"
      />
      <div className="bg-black bg-opacity-50 text-white text-xs text-center py-1">
        Hình {index + 1}
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

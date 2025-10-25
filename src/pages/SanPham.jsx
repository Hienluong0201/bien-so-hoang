export default function SanPham() {
  const items = [
    { truoc: "https://i.postimg.cc/JzxGR85p/truoc1.jpg", sau: "/anh1.png" },
    { truoc: "https://i.postimg.cc/QdmHjDJ4/truoc2.jpg", sau: "/anh1.png" },
    { truoc: "https://i.postimg.cc/y8sDqxcM/truoc3.jpg", sau: "/anh1.png" },
    { truoc: "https://i.postimg.cc/mgBPxk7x/truoc4.jpg", sau: "/anh1.png" },
    { truoc: "https://i.postimg.cc/vDws8mYR/anh1-1.jpg", sau: "https://i.postimg.cc/3JpSR8WM/anh5.jpg" },
    { truoc: "https://i.postimg.cc/x1wFTrjM/truoc5.jpg", sau: "https://i.postimg.cc/3JpSR8WM/anh5.jpg" },
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white border-4 border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            {/* Khung trên */}
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

            {/* Dòng ghi chú */}
            <div className="p-4 bg-gray-50 border-t text-center">
              <p className="text-gray-700 text-sm">
                So sánh kết quả trước và sau khi phục hồi biển số tại{" "}
                <span className="text-red-600 font-semibold">Biển Số Hoàng</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { useParams, Link } from "react-router-dom";

const accessoriesData = {
  "ep-bien-so-o-to": {
    title: "Ép Biển Số Ô Tô Chuẩn Form",
    img: "https://i.postimg.cc/V5P8sNY3/anh1.jpg",
    content: `
      Dịch vụ **ép biển số ô tô cao cấp** là giải pháp tối ưu giúp bảo vệ biển số của bạn khỏi trầy xước, bong mép, phai màu và gãy vỡ.  
      Với quy trình ép chuyên nghiệp, chuẩn form từng dòng xe, **Biển Số Hoàng** mang đến sản phẩm vừa bền bỉ vừa sang trọng, giúp chiếc xe của bạn luôn nổi bật và đúng chuẩn quy định.

      ### 🚗 Tại sao cần ép biển số ô tô?

      Sau thời gian dài sử dụng, biển số ô tô thường bị:
      - 🌧️ **Tróc sơn hoặc phai màu** do nắng mưa, tia UV.  
      - 🧱 **Bong góc, méo hoặc nứt** do rửa xe, va chạm hoặc sử dụng khung rẻ tiền.  
      - 🪣 **Bám bụi, mờ số**, làm giảm thẩm mỹ và dễ bị phạt khi lưu thông.  
      
      Ép biển số ô tô bằng **mica cao cấp chuẩn form** không chỉ giúp khắc phục những vấn đề này mà còn tạo vẻ ngoài sáng bóng, sang trọng, thể hiện đẳng cấp của chủ xe.

      ### ⚙️ Quy trình ép biển số tại Biển Số Hoàng

      Mỗi tấm biển ô tô đều được ép thủ công kết hợp công nghệ hiện đại, đảm bảo chính xác tuyệt đối. Quy trình gồm 5 bước:

      1. **Làm sạch & kiểm tra biển gốc** – loại bỏ bụi bẩn, dầu, keo và vết sơn cũ.  
      2. **Cắt mica theo form chuẩn từng dòng xe** – đảm bảo khít, không dư mép.  
      3. **Ép nhiệt chân không công nghệ Nhật Bản** – giúp mica bám chặt, không bong dù trong điều kiện khắc nghiệt.  
      4. **Bo viền & đánh bóng mép** – cho bề mặt liền lạc, tinh tế, sáng bóng.  
      5. **Kiểm tra & bàn giao tận tay** – đảm bảo biển ép phẳng tuyệt đối, không bọt khí, không lệch form.

      Toàn bộ quá trình chỉ mất **15–20 phút** cho mỗi biển – khách hàng có thể **ngồi chờ lấy ngay** tại xưởng.

      ### 💎 Ưu điểm của ép biển số ô tô tại Biển Số Hoàng

      - **Chuẩn form 100%** theo kích thước từng loại xe (Sedan, SUV, bán tải…).  
      - **Chống nước tuyệt đối**, không bọt, không đọng hơi sương.  
      - **Chống trầy, chống tia UV**, giữ màu sơn và số luôn như mới.  
      - **Độ trong suốt cao**, không làm mờ số khi chụp ảnh hoặc quét camera.  
      - **Sử dụng mica nhập khẩu cao cấp**, bền gấp 3 lần mica thông thường.  
      - **Thi công nhanh – lấy ngay**, không cần đặt trước.  
      - **Bảo hành 24 tháng**: Nếu bong, hở, nứt – ép lại miễn phí.

      ### 🔧 Vật liệu & công nghệ sử dụng

      Chúng tôi chỉ sử dụng **mica Đài Loan hoặc Nhật Bản loại A+**, có độ dày tiêu chuẩn 2mm – 2.5mm.  
      Lớp mica được **ép bằng máy chân không nhiệt độ ổn định**, giúp keo dính sâu vào bề mặt biển mà không gây cong méo.  

      Ngoài ra, mép biển được xử lý bằng **keo UV trong suốt chuyên dụng** để đảm bảo không hở, không ngấm nước, và không ố vàng theo thời gian.  
      Các chi tiết được bo góc bằng **máy mài chính xác cao**, giúp biển mềm mại và tinh tế hơn.

      ### 🌟 Khách hàng đánh giá

      - “Mình ép biển xe Camry tại Biển Số Hoàng, 2 năm rồi vẫn như mới. Rửa xe, đi mưa gió không bong chút nào.”  
      - “Làm nhanh, đẹp, giá hợp lý. Nhân viên còn hướng dẫn cách vệ sinh bảo quản rất chi tiết.”  
      - “Lần đầu thấy ép biển mà trong veo như vậy. Nhìn xe sáng hơn hẳn, 10 điểm!”

      ### 🧰 Dịch vụ đi kèm

      - Nhận ép biển tại nhà khu vực TP.HCM (Tân Phú, Tân Bình, Quận 12…).  
      - Làm **khung inox, khung titan** theo yêu cầu.  
      - **Phục hồi biển cũ**, ép lại mica, thay form mới.  
      - Combo ép biển + khung bảo vệ giảm ngay 10%.

      ### 📸 Hình ảnh thực tế tại xưởng

      Tất cả hình ảnh trên website và fanpage **Biển Số Hoàng** đều là ảnh thật từ xưởng thi công.  
      Chúng tôi **không sử dụng ảnh mạng**, cam kết khách hàng đến nhận hàng sẽ được trải nghiệm đúng như hình quảng cáo.

      ### 📍 Liên hệ & thông tin cửa hàng

      **Địa chỉ:** 80 Đường Chế Lan Viên, Phường Tây Thạnh, Quận Tân Phú, TP. Hồ Chí Minh  
      ☎️ **Hotline/Zalo:** [0971 133 799](https://zalo.me/0971133799)  
      🌐 **Website:** [epbiensohoang.com](https://epbiensohoang.com)  
      🕒 **Thời gian làm việc:** 8:00 – 20:00 (Tất cả các ngày trong tuần)

      ### ✅ Cam kết dịch vụ

      - Hoàn tiền 100% nếu mica bong, nứt, lệch form trong 7 ngày đầu.  
      - Bảo hành kỹ thuật 24 tháng cho mọi sản phẩm ép.  
      - Sử dụng vật liệu chính hãng, có tem Biển Số Hoàng.  

      ---
      👉 **Biển Số Hoàng** – Nơi ép biển số ô tô **đẹp – chuẩn – bền – sang trọng nhất tại TP.HCM**.  
      Một lần làm – sử dụng trọn đời.
    `,

  },

  // ✅ Bài viết thứ 2 được nâng cấp
  "bien-so-xe-may-inox": {
    title: "Gia Công Biển Số Xe Máy Inox Nguyên Khối – Thực Tế Thi Công",
    images: [
      "https://i.postimg.cc/8zTPsYy0/tt2.jpg",
      "https://i.postimg.cc/pLkVjB7C/tt4.jpg",
      "https://i.postimg.cc/bwLYnRML/tt5.jpg",
      "https://i.postimg.cc/MptZBY49/tt7.jpg",
    ],
   content: `
      Biển số **inox nguyên khối** là lựa chọn hàng đầu hiện nay cho những ai yêu thích sự sang trọng, bền bỉ và tinh tế.  
      Với đặc tính cứng cáp, sáng bóng, không bị oxy hóa hay phai màu, loại biển số này mang đến vẻ đẹp vượt thời gian cho chiếc xe của bạn.  
      Tại **Biển Số Hoàng**, chúng tôi tự hào là đơn vị tiên phong trong việc **gia công và lắp đặt biển số inox nguyên khối cao cấp** tại TP. Hồ Chí Minh.

      ### 🔧 Quy trình gia công biển số inox nguyên khối

      Mỗi tấm biển số đều được xử lý qua quy trình hiện đại gồm 5 bước khép kín:

      1. **Đo form chuẩn từng dòng xe** – Đảm bảo biển khít với khung, không lệch hay cong vênh.
      2. **Cắt CNC inox nguyên khối** – Dùng máy cắt công nghiệp để tạo đường viền chính xác đến từng milimet.
      3. **Đánh bóng thủ công 2 mặt** – Giúp bề mặt phản chiếu ánh sáng đều, sang trọng như gương.
      4. **Khắc số và phủ lớp bảo vệ chống trầy** – Sử dụng công nghệ phủ nano giúp chống bám bụi, chống nước hiệu quả.
      5. **Kiểm định chất lượng & bàn giao cho khách hàng** – Mỗi sản phẩm trước khi lắp đặt đều được kiểm tra tỉ mỉ về độ phẳng, độ bóng và tính thẩm mỹ.

      Tất cả quy trình đều được thực hiện **trực tiếp tại xưởng của Biển Số Hoàng**, dưới sự giám sát của đội ngũ thợ có kinh nghiệm trên 10 năm trong nghề.

      ### 💎 Vì sao nên chọn biển số inox nguyên khối?

      - **Độ bền vượt trội:** Inox  nguyên khối có khả năng chịu va đập cực tốt, không cong, không nứt dù gặp tác động mạnh.  
      - **Chống oxy hóa tuyệt đối:** Không bị rỉ sét, ố vàng kể cả khi tiếp xúc thường xuyên với nắng mưa, nước muối hoặc môi trường bụi bẩn.  
      - **Thẩm mỹ cao:** Bề mặt sáng như gương, đường viền tinh tế giúp chiếc xe trông sang trọng và nổi bật hơn.  
      - **Dễ vệ sinh:** Chỉ cần lau nhẹ bằng khăn mềm là biển luôn sáng bóng như mới.  
      - **Không phai màu chữ số:** Nhờ công nghệ ép nhiệt và phủ bảo vệ, các ký tự số được giữ nguyên sắc nét hàng năm trời.  
      - **Lắp đặt nhanh – lấy ngay:** Quy trình thi công chỉ mất 15–30 phút, khách hàng có thể chờ lấy trực tiếp tại xưởng.  

      Ngoài ra, **Biển Số Hoàng** còn cung cấp **dịch vụ khắc logo, viền màu, ép mica bảo vệ mặt ngoài** cho những ai muốn tạo điểm nhấn riêng mà vẫn đúng quy chuẩn của Bộ GTVT.

      ### ⚙️ Kỹ thuật & chất liệu sử dụng

      Biển inox nguyên khối được làm từ **thép không gỉ nguyên khối **, dày 1.5–2mm.  
      Mỗi sản phẩm được ép thủy lực để đảm bảo độ phẳng tuyệt đối, không cong méo trong quá trình sử dụng.  
      Chúng tôi áp dụng **ép mica trong suốt** ở mặt ngoài để bảo vệ khỏi bụi bẩn và tia UV, giữ biển luôn sáng như gương trong nhiều năm.

      Hệ thống máy móc gồm:
      - Máy cắt CNC công suất cao nhập từ Nhật Bản.  
      - Máy ép thủy lực nhiệt độ ổn định.  
      - Buồng đánh bóng khép kín giúp giảm bụi và tăng độ sáng đồng đều.  
      - Khu vực kiểm tra chất lượng chuyên biệt cho từng loại biển.  

      Mỗi biển trước khi giao đều được dán **tem bảo hành chính hãng Biển Số Hoàng** cùng **phiếu bảo hành 24 tháng**.

      ### 🧰 Dịch vụ đi kèm

      - **Gắn biển tận nơi** trong khu vực TP.HCM.  
      - **Miễn phí kiểm tra và làm sạch biển cũ** trước khi lắp đặt.  
      - **Giảm 10%** cho khách hàng ép thêm biển xe máy thứ 2.  
      - **Bảo hành đổi mới 1-1** nếu bong mép, tróc sơn hoặc ố vàng trong 24 tháng.  

      Ngoài biển inox nguyên khối, chúng tôi còn cung cấp **biển nhôm ép mica**, **biển nhôm chống gãy**, **ép lại biển cũ**, và **phục hồi biển số hư hại** cho cả ô tô và xe máy.

      ### 📍 Địa chỉ & liên hệ

      Quý khách có thể đến trực tiếp:
      **80 Đường Chế Lan Viên, Phường Tây Thạnh, Quận Tân Phú, TP. Hồ Chí Minh**  
      hoặc liên hệ qua Zalo **0971 133 799** để được tư vấn và đặt lịch hẹn trước.

      Tất cả hình ảnh trong bài đều là **thực tế tại xưởng Biển Số Hoàng**, nơi đã phục vụ hàng ngàn khách hàng trong và ngoài TP.HCM.  
      Với phương châm **“Chất lượng làm nên thương hiệu”**, chúng tôi cam kết mang lại cho bạn biển số **bền – đẹp – đúng chuẩn – sang trọng nhất thị trường** hiện nay.

      ---
      👉 Nếu bạn đang tìm nơi ép hoặc làm mới biển số **chuyên nghiệp – nhanh – đẹp – đúng form**,  
      hãy đến ngay **Biển Số Hoàng** – lựa chọn tin cậy số 1 cho biển số inox nguyên khối tại Việt Nam.
    `,

  },

  "phuc-hoi-bien-so-hu-nat": {
    title: "Phục Hồi Biển Số Hư Nát – Thẩm Mỹ Như Mới",
    img: "https://i.postimg.cc/LhFp4s99/anh4.jpg",
    content: `
      Biển số xe sau thời gian dài sử dụng thường bị **cong, tróc sơn, rỉ sét, hoặc mờ số**, gây mất thẩm mỹ và đôi khi khiến chủ xe gặp rắc rối khi bị kiểm tra hành chính.  
      Tại **Biển Số Hoàng**, chúng tôi cung cấp **dịch vụ phục hồi biển số hư nát chuyên nghiệp**, giúp bạn lấy lại vẻ đẹp như mới mà không cần thay toàn bộ biển.

      ### ⚙️ Nguyên nhân khiến biển số bị hư hại

      Sau một thời gian sử dụng, đặc biệt trong điều kiện thời tiết khắc nghiệt của Việt Nam, biển số xe thường gặp phải một số vấn đề phổ biến như:
      - 🚗 **Bị móp hoặc cong vênh** do va chạm nhẹ, hoặc bị ép quá lực khi rửa xe.  
      - 🌧️ **Bị rỉ sét hoặc oxy hóa** do nước mưa, hóa chất hoặc muối đường.  
      - ☀️ **Tróc sơn, phai màu hoặc mờ chữ số** vì nắng nóng và tia UV kéo dài.  
      - 🧱 **Bị nứt, gãy hoặc bong viền** do va đập hoặc sử dụng khung kém chất lượng.  

      Nếu không khắc phục sớm, những hư hại này sẽ **lan rộng**, làm biển số yếu, khó đọc và mất giá trị thẩm mỹ của chiếc xe.

      ### 🔧 Quy trình phục hồi biển số tại Biển Số Hoàng

      Với hơn 10 năm kinh nghiệm, chúng tôi đã hoàn thiện **quy trình phục hồi chuyên nghiệp** gồm 6 bước:

      1. **Tiếp nhận & kiểm tra tình trạng biển:**  
         Kỹ thuật viên kiểm tra độ cong, độ mờ, lớp sơn và bề mặt kim loại để đưa ra phương án xử lý phù hợp.
      
      2. **Làm phẳng & loại bỏ rỉ sét:**  
         Dùng máy ép nhiệt và dụng cụ chuyên dụng để nắn phẳng, loại bỏ hoàn toàn vết cong hoặc gập.  
         Biển được tẩy sạch rỉ bằng dung dịch an toàn, không làm ảnh hưởng đến số gốc.

      3. **Sơn phủ hoặc ép lại bằng mica cao cấp:**  
         Tùy theo tình trạng, chúng tôi tiến hành phủ sơn tĩnh điện hoặc **ép lớp mica bảo vệ** giúp biển sáng bóng như mới, chống trầy và chống nước tuyệt đối.

      4. **Đánh bóng & phủ lớp chống tia UV:**  
         Giúp bề mặt phản sáng đều, không bị ố vàng theo thời gian.

      5. **Kiểm tra kỹ thuật & hiệu chỉnh form chuẩn:**  
         Đảm bảo biển phục hồi đúng kích thước, không méo form, không sai vị trí số.

      6. **Bàn giao & hướng dẫn bảo quản:**  
         Mỗi khách hàng đều được tư vấn cách vệ sinh và bảo quản để giữ biển bền đẹp lâu nhất.

      Toàn bộ quy trình được thực hiện **ngay tại xưởng**, khách hàng có thể **chờ lấy trong 30 phút – 1 tiếng**.

      ### 💎 Lợi ích khi phục hồi biển số tại Biển Số Hoàng

      - **Giữ nguyên số gốc, không phải đăng ký lại.**  
      - **Tiết kiệm chi phí** hơn 60% so với làm mới biển.  
      - **Thẩm mỹ như mới – bền gấp 3 lần so với biển sơn thường.**  
      - **Bảo hành 24 tháng**, miễn phí ép lại nếu bong hoặc tróc mép.  
      - **Dịch vụ tận nơi** trong khu vực Tân Phú, Tân Bình, quận 12, Bình Tân…  
      - **Thợ tay nghề cao**, từng chi tiết được xử lý thủ công kết hợp máy móc hiện đại.

      ### 🧰 Công nghệ & vật liệu sử dụng

      Biển số sau khi phục hồi được ép bằng **mica trong suốt cao cấp**, dày 2mm,  
      có khả năng **chịu nhiệt và chống tia cực tím**, không ngả vàng.  
      Chúng tôi sử dụng sơn **Dupont & Nippon chính hãng**, giúp màu sắc bền đẹp lâu dài,  
      đồng thời phủ thêm một lớp **nano bảo vệ chống bụi, chống nước, chống xước.**

      Hệ thống máy ép nhiệt được nhập khẩu trực tiếp từ Nhật Bản,  
      giúp đảm bảo độ kín khít, phẳng tuyệt đối mà không làm biến dạng số gốc.

      ### 📸 Hình ảnh thực tế tại xưởng

      Khách hàng có thể xem các mẫu biển số **trước và sau khi phục hồi** trực tiếp tại cửa hàng hoặc trên website.  
      Chúng tôi luôn minh bạch – chỉ sử dụng **hình ảnh thật từ quá trình thi công** để khách hàng yên tâm về chất lượng.

      ### 🕘 Thời gian & chính sách bảo hành

      - **Thời gian thực hiện:** 30–60 phút/biển.  
      - **Bảo hành:** 24 tháng cho lớp ép và sơn phủ.  
      - **Miễn phí bảo trì:** 1 lần lau bóng & kiểm tra lại form trong 3 tháng đầu.  

      Mỗi biển số sau khi phục hồi đều được dán **tem Biển Số Hoàng chính hãng** và lưu hồ sơ khách hàng để bảo hành thuận tiện.

      ### 📍 Địa chỉ & liên hệ

      **Biển Số Hoàng** – 80 Đường Chế Lan Viên, Tây Thạnh, Tân Phú, TP. Hồ Chí Minh  
      ☎️ **Hotline/Zalo:** [0971 133 799](https://zalo.me/0971133799)  
      🌐 **Website:** [epbiensohoang.com](https://epbiensohoang.com)  
      📅 Làm việc: **8:00 – 20:00** (Tất cả các ngày trong tuần)

      ### 💬 Cam kết chất lượng

      > “Phục hồi chuẩn – Bền như mới – Đúng form 100%”  
      Chúng tôi tự tin hoàn tiền 100% nếu khách hàng không hài lòng về chất lượng sản phẩm hoặc dịch vụ.

      ---
      👉 **Biển Số Hoàng** – nơi chiếc biển cũ được “tái sinh” sáng đẹp như ngày đầu tiên.  
      Đến một lần – hài lòng trọn đời.
    `,

  },
};

export default function PhuKienChiTiet() {
  const { slug } = useParams();
  const item = accessoriesData[slug];

  if (!item) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h2 className="text-xl font-semibold mb-4">Không tìm thấy sản phẩm!</h2>
        <Link to="/" className="text-red-600 underline">
          Quay lại trang chủ
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
        {/* 🖼️ Hiển thị gallery 4 ảnh nếu có */}
        {item.images ? (
          <div className="grid grid-cols-2 gap-3 mb-6">
            {item.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${item.title} - Ảnh ${i + 1}`}
                className="rounded-lg w-full h-56 object-cover shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        ) : (
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-72 object-cover rounded-lg mb-6 shadow-md"
          />
        )}

        {/* Tiêu đề & nội dung */}
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          {item.title}
        </h1>

        <p
          className="text-gray-700 leading-relaxed whitespace-pre-line mb-6"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />

        {/* 🔘 Nút hành động */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://zalo.me/0971133799"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-md text-sm font-semibold uppercase hover:bg-red-700 transition"
          >
            Liên hệ Zalo
          </a>

          <Link
            to="/"
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md text-sm font-semibold uppercase hover:bg-gray-300 transition"
          >
            Quay lại
          </Link>
        </div>
      </div>
    </section>
  );
}

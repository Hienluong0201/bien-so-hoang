import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Liên hệ với chúng tôi</h2>
      <p className="text-gray-600 mb-8">Gọi ngay: <span className="text-red-600 font-bold">0568 05 0505</span></p>

      <form className="max-w-lg mx-auto text-left bg-white p-8 shadow rounded-2xl">
        <input
          type="text"
          placeholder="Họ và tên"
          className="w-full mb-4 p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg"
        />
        <textarea
          rows="4"
          placeholder="Nội dung"
          className="w-full mb-4 p-3 border rounded-lg"
        ></textarea>
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition w-full">
          Gửi tin nhắn
        </button>
      </form>
    </section>
  );
};

export default Contact;

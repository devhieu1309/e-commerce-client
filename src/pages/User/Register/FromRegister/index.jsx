import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { notification } from "antd";
import { register } from "../../../../services/authServices";

function FromRegister() {
  const [showForgot, setShowForgot] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
    const [apiNoti, contextHolder] = notification.useNotification();

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

    // 🟢 Xử lý thay đổi input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" })); // xóa lỗi khi user gõ lại
    };

    const navigate = useNavigate();

    // 🟢 Xử lý submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);


        try {
            const res = await register(formData);

            if (res.status) {
                apiNoti.success({
                    message: "Thành công",
                    description: "Đăng ký tài khoản thành công!",
                });

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                });
                setTimeout(() => {
                    navigate("/dang-nhap");
                }, 0);
            } else {
                if (res.errors) setErrors(res.errors);

                apiNoti.error({
                    message: "Lỗi",
                    description: res.message || "Đăng ký thất bại!",
                });
            }
        } catch (error) {
            apiNoti.error({
                message: "Lỗi",
                description: "Không thể kết nối đến máy chủ!",
            });
            console.error("Lỗi khi đăng ký:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {contextHolder}
            <div className="flex items-center justify-center mt-5 mb-5 font-sans">
                <div className="bg-white shadow-lg rounded-lg w-96 p-6 border border-gray-100">
                    {/* Tabs */}
                    <div className="flex justify-center border-b border-gray-300">
                        <Link
                            to="/dang-nhap"
                            className="w-1/2 text-center text-gray-600 font-medium py-2 hover:text-blue-700"
                        >
                            ĐĂNG NHẬP
                        </Link>
                        <button className="w-1/2 text-blue-700 font-medium border-b-2 border-blue-700 py-2">
                            ĐĂNG KÝ
                        </button>
                    </div>

                    <h2 className="text-center text-xl font-semibold mt-6 mb-4 text-gray-800">
                        ĐĂNG KÝ
                    </h2>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-3">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Họ và Tên"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full border rounded-md px-3 py-2 ${errors.name ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.name && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {errors.name[0]}
                                    </p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full border rounded-md px-3 py-2 ${errors.email ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.email && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {errors.email[0]}
                                    </p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Số điện thoại"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full border rounded-md px-3 py-2 ${errors.phone ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.phone && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {errors.phone[0]}
                                    </p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Mật khẩu"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`w-full border rounded-md px-3 py-2 ${errors.password ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.password && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {errors.password[0]}
                                    </p>
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-800 text-white py-2 rounded-md font-medium mt-4 hover:bg-blue-900 transition"
                        >
                            {loading ? "Đang xử lý..." : "Đăng ký"}
                        </button>
                    </form>

                    <div className="text-center text-sm text-gray-600 mt-4 mb-3">
                        Hoặc đăng nhập bằng
                    </div>

                    {/* Mạng xã hội */}
                    <div className="flex justify-center space-x-2">
                        <button className="flex items-center bg-[#3b5998] text-white px-4 py-2 rounded-md text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22.675 0h-21.35C.597 0 0 .6 0 1.326v21.348C0 23.4.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.796.144v3.24h-1.92c-1.507 0-1.799.717-1.799 1.77v2.32h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.4 24 22.674V1.326C24 .6 23.403 0 22.675 0z" />
                            </svg>
                            Facebook
                        </button>

                        <button className="flex items-center bg-[#db4437] text-white px-4 py-2 rounded-md text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21.35 11.1H12v2.8h5.4c-.3 1.6-1.8 4.7-5.4 4.7-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.4l2.6-2.5C17.4 3.1 15 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.8 0 9.7-4 9.7-9.6 0-.7-.1-1.3-.3-1.9z" />
                            </svg>
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FromRegister;

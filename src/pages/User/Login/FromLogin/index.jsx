import { Link, useNavigate, useOutletContext } from "react-router-dom";
import React, { useState } from "react";
import { login } from "../../../../services/authServices";



function FromLogin() {

    const [showForgot, setShowForgot] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { setUser } = useOutletContext();


    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = await login(formData.email, formData.password);

        if (data.status) {
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);

            setUser(data.user); // Cập nhật user ngay lập tức

            setError("Đăng nhập thành công!");
            navigate("/thong-tin-khach-hang");
        } else {
            setError(data.message || "Đăng nhập thất bại!");
        }
    };

    return (
        <>
            <div className=" flex items-center justify-center mt-5 mb-5 font-sans">
                {/* Khung chính */}
                <div className="bg-white shadow-lg rounded-lg w-96 p-6 border border-gray-100">
                    {/* Tabs */}
                    <div className="flex justify-center border-b border-gray-300">
                        <button className="w-1/2 text-blue-700 font-medium border-b-2 border-blue-700 py-2">
                            ĐĂNG NHẬP
                        </button>
                        <Link
                            to="/dang-ky"
                            className="w-1/2 text-center text-gray-600 font-medium py-2 hover:text-blue-700"
                        >
                            ĐĂNG KÝ
                        </Link>
                    </div>

                    {/* Tiêu đề */}
                    <h2 className="text-center text-xl font-semibold mt-6 mb-4 text-gray-800">
                        ĐĂNG NHẬP
                    </h2>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 border-b-blue-700"
                        />
                        {errors.email && (
                            <p className="text-red-600 text-sm mb-2">{errors.email[0]}</p>
                        )}

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Mật khẩu"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-1 border-b-blue-700"
                        />
                        {errors.password && (
                            <p className="text-red-600 text-sm mb-2">{errors.password[0]}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-blue-800 text-white py-2 rounded-md font-medium hover:bg-blue-900 transition"
                        >
                            {loading ? "Đang xử lý..." : "Đăng nhập"}
                        </button>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </form>


                    {/* Quên mật khẩu */}
                    <p
                        className="text-center text-sm text-gray-600 mt-3 hover:text-blue-700 cursor-pointer"
                        onClick={() => setShowForgot(!showForgot)}
                    >
                        Quên mật khẩu
                    </p>

                    {/* Form quên mật khẩu */}
                    {showForgot && (
                        <div className="mt-4 transition-all duration-300 ease-in-out">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-blue-700"
                            />
                            <button
                                type="button"
                                className="w-full bg-blue-800 text-white py-2 rounded-md font-medium hover:bg-blue-900 transition"
                            >
                                Lấy lại mật khẩu
                            </button>
                        </div>
                    )}


                    {/* Hoặc */}
                    <div className="text-center text-sm text-gray-600 mt-4 mb-3">
                        Hoặc đăng nhập bằng
                    </div>

                    {/* Nút MXH */}
                    <div className="flex justify-center space-x-2">
                        {/* Facebook */}
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

                        {/* Google */}
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
export default FromLogin;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { notification } from "antd";
import { changePassword } from "../../../../services/userServices";

function FromChangePassword() {
    const [user, setUser] = useState(null);
    const [apiNoti, contextHolder] = notification.useNotification();

    const [formData, setFormData] = useState({
        old_password: "",
        new_password: "",
        confirm_password: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" })); // xóa lỗi khi người dùng gõ lại
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!validateForm()) return;

    //     try {
    //         const res = await changePassword(user.user_id, formData);

    //         if (res.success) {
    //             apiNoti.success({
    //                 message: "Thành công",
    //                 description: "Đổi mật khẩu thành công!",
    //             });

    //             setFormData({
    //                 old_password: "",
    //                 new_password: "",
    //                 confirm_password: "",
    //             });
    //             setErrors({});
    //         } else {
    //             // Nếu BE trả message “Mật khẩu cũ không chính xác”
    //             if (res.message && res.message.includes("Mật khẩu cũ")) {
    //                 setErrors((prev) => ({
    //                     ...prev,
    //                     old_password: "Sai mật khẩu cũ!",
    //                 }));
    //             }

    //             apiNoti.error({
    //                 message: "Lỗi",
    //                 description: res.message || "Đổi mật khẩu thất bại!",
    //             });
    //         }
    //     } catch (err) {
    //         const msg = err?.response?.data?.message || "Không thể đổi mật khẩu, vui lòng thử lại!";

    //         // Nếu lỗi BE trả về có message “Mật khẩu cũ không chính xác”
    //         if (msg.includes("Mật khẩu cũ")) {
    //             setErrors((prev) => ({
    //                 ...prev,
    //                 old_password: "Sai mật khẩu cũ!",
    //             }));
    //         }

    //         apiNoti.error({
    //             message: "Lỗi",
    //             description: msg,
    //         });
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await changePassword(user.user_id, formData);

            if (res.success) {
                apiNoti.success({
                    message: "Thành công",
                    description: res.message || "Đổi mật khẩu thành công!",
                });
                setFormData({ old_password: "", new_password: "", confirm_password: "" });
                setErrors({});
            }
        } catch (err) {
            const data = err?.response?.data;

            // Laravel validation error (422)
            if (data?.errors) {
                const fieldErrors = {};
                Object.entries(data.errors).forEach(([key, val]) => {
                    fieldErrors[key] = val[0];
                });
                setErrors(fieldErrors);
            }

            apiNoti.error({
                message: "Lỗi",
                description: data?.message || "Không thể đổi mật khẩu, vui lòng thử lại!",
            });
        }
    };


    return (
        <>
            {contextHolder}
            <div className="flex justify-center items-start mt-10 mb-10">
                <div className="bg-white shadow-md rounded-lg w-full max-w-[1300px] flex flex-col md:flex-row p-6 md:p-8">
                    {/* --- CỘT TRÁI --- */}
                    <div className="md:w-1/3 w-full mb-8 md:mb-0 md:pr-8">
                        <h5 className="font-semibold uppercase mb-5 text-lg">TRANG TÀI KHOẢN</h5>
                        {user ? (
                            <p className="mb-2">
                                <span className="font-semibold">Xin chào, </span>
                                <span className="text-blue-700 font-semibold">{user.name}</span> !
                            </p>
                        ) : (
                            <p className="text-gray-500 italic">Đang tải thông tin...</p>
                        )}

                        <div className="mt-5 space-y-2">
                            <Link to="/thong-tin-khach-hang" className="block text-black hover:text-yellow-600">
                                Thông tin tài khoản
                            </Link>
                            <Link to="#" className="block text-black hover:text-yellow-600">
                                Đơn hàng của bạn
                            </Link>
                            <p className="text-yellow-500 font-medium">Đổi mật khẩu</p>
                            <Link to="/dia-chi-khach-hang" className="block text-black hover:text-yellow-600">
                                Sổ địa chỉ
                            </Link>
                        </div>
                    </div>

                    {/* --- CỘT PHẢI --- */}
                    <div className="md:w-2/3 w-full md:pl-8">
                        <h5 className="font-semibold uppercase mb-5 text-lg">ĐỔI MẬT KHẨU</h5>
                        <p className="mb-6 text-gray-600">
                            Để đảm bảo tính bảo mật bạn vui lòng đặt lại mật khẩu với ít nhất 8 kí tự
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">
                                    Mật khẩu cũ <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    name="old_password"
                                    value={formData.old_password}
                                    onChange={handleChange}
                                    className={`w-[520px] border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${errors.old_password ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.old_password && (
                                    <p className="text-red-500 text-sm mt-1">{errors.old_password}</p>
                                )}
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">
                                    Mật khẩu mới <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    name="new_password"
                                    value={formData.new_password}
                                    onChange={handleChange}
                                    className={`w-[520px] border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${errors.new_password ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.new_password && (
                                    <p className="text-red-500 text-sm mt-1">{errors.new_password}</p>
                                )}
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">
                                    Xác nhận lại mật khẩu <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    name="confirm_password"
                                    value={formData.confirm_password}
                                    onChange={handleChange}
                                    className={`w-[520px] border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${errors.confirm_password ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.confirm_password && (
                                    <p className="text-red-500 text-sm mt-1">{errors.confirm_password}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="bg-[#1E1E9B] text-white font-semibold px-6 py-2 rounded border border-transparent 
                                transition duration-200 ease-in-out 
                                hover:bg-[#ffffff] hover:text-[#1E1E9B] hover:border-[#1E1E9B]"
                            >
                                ĐẶT LẠI MẬT KHẨU
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FromChangePassword;

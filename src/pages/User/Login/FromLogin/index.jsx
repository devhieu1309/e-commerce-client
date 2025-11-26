import React, { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { notification, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { login, forgotPassword } from "../../../../services/authServices";

function FromLogin() {
  const [apiNoti, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const { setUser } = useOutletContext();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // loading khi đăng nhập
  const [loadingForgot, setLoadingForgot] = useState(false); // loading khi gửi email
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  //  Đăng nhập
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const data = await login(formData.email, formData.password);

      if (data.status) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        setUser(data.user);

        apiNoti.success({
          message: "Thành công",
          description: "Đăng nhập thành công!",
        });

        //  Thêm phân quyền tại đây
        if (data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }


      } else {
        // GÁN LỖI XUỐNG INPUT EMAIL
        setErrors({ email: [data.message] });

        apiNoti.error({
          message: "Lỗi",
          description: data.message || "Đăng nhập thất bại!",
        });

        return;
      }
    } catch (error) {
      apiNoti.error({
        message: "Lỗi",
        description: "Không thể kết nối đến máy chủ!",
      });
      console.error("Lỗi khi đăng nhập:", error);
    } finally {
      setLoading(false);
    }
  };


  // Quên mật khẩu
  const [forgotErrorText, setForgotErrorText] = useState("");

  const handleForgotPassword = async () => {
    // Clear lỗi cũ
    setForgotErrorText("");

    // FE kiểm tra rỗng
    if (!forgotEmail.trim()) {
      apiNoti.warning({
        message: "Thiếu thông tin",
        description: "Vui lòng nhập email để khôi phục mật khẩu!",
      });
      setForgotErrorText("Vui lòng nhập email.");
      return;
    }

    setLoadingForgot(true);

    try {
      const res = await forgotPassword(forgotEmail);

      // Nếu Laravel trả validation lỗi (FE tự nhận qua res.errors)
      if (res?.errors) {
        const errorMsg = res.errors.email?.[0];
        if (errorMsg) {
          setForgotErrorText(errorMsg);
          apiNoti.error({
            message: "Lỗi",
            description: errorMsg,
          });
        }
        return;
      }

      // Trường hợp OK
      if (res.status) {
        apiNoti.success({
          message: "Thành công",
          description: res.message || "Mật khẩu mới đã được gửi tới email!",
        });
        setForgotEmail("");
        setShowForgot(false);
      } else {
        apiNoti.error({
          message: "Lỗi",
          description: res.message || "Không thể gửi email khôi phục!",
        });
      }
    } catch (error) {
      // Laravel trả lỗi validation qua axios catch
      if (error.response?.status === 422) {
        const errorMsg = error.response.data.errors?.email?.[0];
        if (errorMsg) {
          setForgotErrorText(errorMsg);
          apiNoti.error({
            message: "Lỗi",
            description: errorMsg,
          });
        }
        return;
      }

      // Các lỗi khác (mạng / server die)
      apiNoti.error({
        message: "Lỗi",
        description: "Không thể kết nối đến máy chủ!",
      });
    } finally {
      setLoadingForgot(false);
    }
  };



  return (
    <>
      {contextHolder}
      <div className="flex items-center justify-center mt-5 mb-5 font-sans">
        <Spin spinning={loading} tip="Đang xử lý...">
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
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full border rounded-md px-3 py-2 mb-3 ${errors.email ? "border-red-500" : "border-gray-300"
                  }`}
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
                className={`w-full border rounded-md px-3 py-2 mb-3 ${errors.password ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.password && (
                <p className="text-red-600 text-sm mb-2">{errors.password[0]}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-800 text-white py-2 rounded-md font-medium hover:bg-blue-900 transition flex justify-center items-center"
              >
                {loading ? (
                  <>
                    <LoadingOutlined className="mr-2" /> Đang đăng nhập...
                  </>
                ) : (
                  "Đăng nhập"
                )}
              </button>
            </form>

            {/* Quên mật khẩu */}
            <p
              className="text-center text-sm text-gray-600 mt-3 hover:text-blue-700 cursor-pointer"
              onClick={() => setShowForgot(!showForgot)}
            >
              Quên mật khẩu
            </p>

            {showForgot && (
              <div className="mt-4 transition-all duration-300 ease-in-out">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-blue-700"
                />
                {forgotErrorText && (
                  <p className="text-red-600 text-sm mt-1">{forgotErrorText}</p>
                )}

                <button
                  type="button"
                  onClick={handleForgotPassword}
                  disabled={loadingForgot}
                  className="w-full bg-blue-800 text-white py-2 rounded-md font-medium hover:bg-blue-900 transition flex justify-center items-center"
                >
                  {loadingForgot ? (
                    <>
                      <LoadingOutlined className="mr-2" /> Đang gửi...
                    </>
                  ) : (
                    "Gửi mật khẩu mới"
                  )}
                </button>
              </div>
            )}

            {/* Hoặc */}
            <div className="text-center text-sm text-gray-600 mt-4 mb-3">
              Hoặc đăng nhập bằng
            </div>

            {/* MXH */}
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
        </Spin>
      </div>
    </>
  );
}

export default FromLogin;

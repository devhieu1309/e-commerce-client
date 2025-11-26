const API_URL = "http://127.0.0.1:8000/api";

// ===============================
//  Đăng ký
// ===============================
export const register = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    // Nếu lỗi validation (Laravel 422)
    if (response.status === 422) {
      return {
        status: false,
        message: "Vui lòng kiểm tra lại thông tin!",
        errors: result.errors || {},
      };
    }

    // Nếu lỗi khác (400, 500,...)
    if (!response.ok) {
      return {
        status: false,
        message: result.message || "Đăng ký thất bại!",
      };
    }

    // Thành công
    return {
      status: true,
      message: result.message || "Đăng ký thành công!",
      user: result.user || null,
    };
  } catch (error) {
    console.error(" Lỗi khi gọi API đăng ký:", error);
    return {
      status: false,
      message: "Không thể kết nối tới máy chủ!",
    };
  }
};

// ===============================
//  Đăng nhập
// ===============================
export const login = async (email, password) => {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    // Nếu server trả lỗi (422, 401, v.v)
    if (!res.ok) {
      throw data; // ném về để FE xử lý toast
    }

    return data;
  } catch (error) {
    // Nếu BE trả về lỗi JSON
    if (error?.message || error?.errors) {
      return {
        status: false,
        message: error.message || "Dữ liệu không hợp lệ!",
        errors: error.errors || {},
      };
    }

    //  Nếu thật sự không kết nối được server
    console.error("Lỗi khi gọi API:", error);
    return {
      status: false,
      message: "Không thể kết nối đến máy chủ!",
    };
  }
};

// ===============================
//  Đăng xuất
// ===============================
export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

// ===============================
//  Quên mật khẩu
// ===============================
export const forgotPassword = async (email) => {
  try {
    const res = await fetch(`${API_URL}/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    // Nếu Laravel trả lỗi (422, 404, 500) → response.ok = false
    if (!res.ok) {
      const errorData = await res.json();
      return errorData; // gửi về FE để hiển thị lỗi từ ForgotPasswordRequest
    }

    // Thành công
    return await res.json();

  } catch (error) {
    console.error(" Lỗi khi gọi API forgot-password:", error);
    return { status: false, message: "Không thể kết nối tới server!" };
  }
};




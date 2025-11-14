// const API_BASE = "http://localhost:8000/api"; // đổi nếu backend Laravel của bạn chạy port khác

// // Đăng ký người dùng 
// export const register = async (data) => {
//   const payload = {
//     name: data.name,
//     email: data.email,
//     phone: data.phone,
//     password: data.password,
//   };

//   const response = await fetch(`${API_BASE}/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(payload),
//   });

//   const result = await response.json();
//   if (!response.ok) throw result; // ném lỗi để bắt trong try/catch frontend
//   return result;
// };

// // Đăng nhập người dùng
// export const login = async (data) => {
//   const payload = {
//     email: data.email,
//     password: data.password,
//   };

//   const response = await fetch(`${API_BASE}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(payload),
//   });

//   const result = await response.json();
//   if (!response.ok) throw result;
//   return result;
// };




// const API_URL = "http://127.0.0.1:8000/api";

// //Dang Ky
// export const register = async (formData) => {
//   const response = await fetch("http://127.0.0.1:8000/api/register", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(formData),
//   });
//   return response.json();
// };

// //Dang Nhap
// export const login = async (email, password) => {
//   try {
//     const res = await fetch(`${API_URL}/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Lỗi khi gọi API:", error);
//     return { status: false, message: "Không thể kết nối tới server" };
//   }
// };

// //Dang Xuat
// export const logout = () => {
//   localStorage.removeItem("user");
//   localStorage.removeItem("token");
// };


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
    console.error("❌ Lỗi khi gọi API đăng ký:", error);
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

    // ✅ Nếu server trả lỗi (422, 401, v.v)
    if (!res.ok) {
      throw data; // ném về để FE xử lý toast
    }

    return data;
  } catch (error) {
    // ✅ Nếu BE trả về lỗi JSON
    if (error?.message || error?.errors) {
      return {
        status: false,
        message: error.message || "Dữ liệu không hợp lệ!",
        errors: error.errors || {},
      };
    }

    // ❌ Nếu thật sự không kết nối được server
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
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("❌ Lỗi khi gọi API forgot-password:", error);
    return { status: false, message: "Không thể kết nối tới server!" };
  }
};



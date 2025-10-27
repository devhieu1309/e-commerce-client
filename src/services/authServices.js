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




const API_URL = "http://127.0.0.1:8000/api";

//Dang Ky
export const register = async (formData) => {
  const response = await fetch("http://127.0.0.1:8000/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  return response.json();
};

//Dang Nhap
export const login = async (email, password) => {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    return { status: false, message: "Không thể kết nối tới server" };
  }
};

//Dang Xuat
export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};
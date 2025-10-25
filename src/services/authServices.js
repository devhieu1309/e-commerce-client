const API_BASE = "http://localhost:8000/api"; // đổi nếu backend Laravel của bạn chạy port khác

// Đăng ký người dùng 
export const register = async (data) => {
  const payload = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    password: data.password,
  };

  const response = await fetch(`${API_BASE}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  if (!response.ok) throw result; // ném lỗi để bắt trong try/catch frontend
  return result;
};

// Đăng nhập người dùng
export const login = async (data) => {
  const payload = {
    email: data.email,
    password: data.password,
  };

  const response = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  if (!response.ok) throw result;
  return result;
};

const API_URL = "http://127.0.0.1:8000/api"; // Đường dẫn Laravel API

// Đăng ký
export async function registerUser(userData) {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return res.json();
}

// Đăng nhập
export async function loginUser(credentials) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  return res.json();
}

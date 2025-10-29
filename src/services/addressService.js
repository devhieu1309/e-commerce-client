// src/services/addressService.js
const API_URL = "http://127.0.0.1:8000/api"; // chỉnh nếu cần

async function handleResponse(res) {
  // Nếu không phải JSON (ví dụ 404 trả HTML) -> ném để FE xử lý
  const text = await res.text();
  try {
    const json = JSON.parse(text);
    if (!res.ok) throw json;
    return json;
  } catch (err) {
    // Nếu text là JSON-parsed error, err là object; ngược lại err là SyntaxError
    if (!res.ok) {
      // trả về object error mặc định nếu server trả HTML
      throw {
        message: `Server trả lỗi: ${res.status} ${res.statusText}`,
        raw: text,
      };
    }
    // nếu ok nhưng không phải json -> trả về text
    return text;
  }
}

// Lấy danh sách địa chỉ của user
export const getAddresses = async (userId) => {
  const res = await fetch(`${API_URL}/addresses/${userId}`);
  return await handleResponse(res);
};

// Thêm địa chỉ
export const addAddress = async (data) => {
  const res = await fetch(`${API_URL}/addresses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await handleResponse(res);
};

// Cập nhật địa chỉ
export const updateAddress = async (id, data) => {
  const res = await fetch(`${API_URL}/addresses/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await handleResponse(res);
};

// Xóa địa chỉ
export const deleteAddress = async (id) => {
  const res = await fetch(`${API_URL}/addresses/${id}`, {
    method: "DELETE",
  });
  return await handleResponse(res);
};

// Danh sách provinces/districts/wards để điền select
export const getProvinces = async () => {
  const res = await fetch(`${API_URL}/provinces`);
  return await handleResponse(res);
};

export const getDistricts = async (provinceId) => {
  const res = await fetch(`${API_URL}/districts?province_id=${provinceId}`);
  return await handleResponse(res);
};

export const getWards = async (districtId) => {
  const res = await fetch(`${API_URL}/wards?district_id=${districtId}`);
  return await handleResponse(res);
};

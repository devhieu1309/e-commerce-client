import { get, post, del, patch, put } from "../utils/request";

// Lấy danh sách Tỉnh/Thành
export const getProvinces = () => {
  return get("provinces");
};

// Lấy danh sách Phường/Xã theo provinces_id
export const getWardsByProvince = (provinceId) => {
  return get(`wards/${provinceId}`);
};

// Lấy địa chỉ theo user_id
export const getAddressesByUser = (userId) => {
  return get(`addresses?user_id=${userId}`);
};

// Thêm địa chỉ mới
export const addAddress = (data) => {
  return post("addresses", data);
};

// Cập nhật địa chỉ
export const updateAddress = (id, data) => {
  return put(`addresses/${id}`, data);
};

// Xóa địa chỉ
export const deleteAddress = (id) => {
  return del(`addresses/${id}`);
};

// Set mặc định
export const setDefaultAddress = (id) => {
  return patch(`addresses/${id}/default`);
};

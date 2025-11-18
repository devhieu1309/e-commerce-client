import { get } from "../utils/request";

// 🗺️ Lấy danh sách quốc gia
export const getCountries = async () => {
  return await get("countries");
};

// 🏙️ Lấy danh sách tỉnh/thành
export const getProvinces = async () => {
  const res = await get("provinces"); // ✅ CHỈ gọi provinces, KHÔNG truyền id
  return res.data || res; // nếu backend trả { data: [...] } thì lấy res.data
};

// 🏘️ Lấy danh sách quận/huyện theo tỉnh
export const getDistricts = async (provinceId) => {
  if (!provinceId) return [];
  const res = await get(`districts/${provinceId}`);
  return res.data || res;
};

// 🏡 Lấy danh sách phường/xã theo quận
export const getWards = async (districtId) => {
  if (!districtId) return [];
  const res = await get(`wards/${districtId}`);
  return res.data || res;
};

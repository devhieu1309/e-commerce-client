import { del, edit, get, post } from "../utils/request";

const API_BASE_URL = "https://e-commerce-server.app/api/banner";
// const API_BASE_URL = "http://127.0.0.1:8000/api/banner";

//  Lấy danh sách banner
// export const getBanner = async () => {
//   const res = await fetch(API_BASE_URL);
//   const data = await res.json();
//   return data.reverse();
// };

export const getBanner = async () => {
  const result = await get("banner");
  return result.reverse();
};

//  Thêm mới banner
// export const storeBanner = async (formData) => {
//   const res = await fetch(API_BASE_URL, {
//     method: "POST",
//     body: formData,
//   });
//   return await res.json();
// };
export const storeBanner = async (option) => {
  const result = await post(`banner`, option);
  return result;
};

//  Cập nhật banner
// export const editBanner = async (id, formData) => {
//   const res = await fetch(`${API_BASE_URL}/${id}?_method=PATCH`, {
//     method: "POST",
//     body: formData,
//   });
//   return await res.json();
// };

export const editBanner = async (id, option) => {
  const result = await edit(`banner/${id}`, option);
  return result;
};

//  Xóa banner
// export const deleteBanner = async (id) => {
//   const res = await fetch(`${API_BASE_URL}/${id}`, {
//     method: "DELETE",
//   });
//   return await res.json();
// };
export const deleteBanner = async (id) => {
  const result = await del(`banner/${id}`);
  return result;
};

//tìm kiếm baneer theo tiêu đề
export const searchBanner = async (title) => {
  const res = await fetch(
    `${API_BASE_URL}/search?title=${encodeURIComponent(title)}`
  );
  return await res.json();
};

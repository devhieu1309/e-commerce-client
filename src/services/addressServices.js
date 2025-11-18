// import { get, post, edit, del, patch, put } from "../utils/request";

// //  Lấy danh sách địa chỉ theo user_id (dạng query ?user_id=)
// export const getAddressesByUser = async (userId) => {
//   const result = await get(`addresses?user_id=${userId}`);
//   return result;
// };

// //  Thêm địa chỉ mới
// export const addAddress = async (option) => {
//   const result = await post(`addresses`, option);
//   return result;
// };

// export const updateAddress = async (id, option) => {
//   const result = await put(`addresses/${id}`, option);
//   return result;
// };

// //  Xóa địa chỉ
// export const deleteAddress = async (id) => {
//   const result = await del(`addresses/${id}`);
//   return result;
// };

// //  Đặt địa chỉ mặc định
// export const setDefaultAddress = async (id) => {
//   const result = await patch(`addresses/${id}/default`);
//   return result;
// };

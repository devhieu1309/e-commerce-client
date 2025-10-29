import { postFormData } from "../utils/request";

// export const getCategoryList = async () => {
//   const result = await get("categories");
//   return result;
// };

// export const getVariationByCategoryId = async (id) => {
//   const result = await get(`categories/${id}/variations`);
//   return result;
// };

export const storeProduct = async (formData) => {
  const result = await postFormData(`products`, formData);
  return result;
};

// export const editCategory = async (id, option) => {
//   const result = await edit(`categories/${id}`, option);
//   return result;
// };

// export const deleteCategory = async (id) => {
//   const result = await del(`categories/${id}`);
//   return result;
// };

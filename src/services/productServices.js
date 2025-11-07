import { del, edit, editFormData, get, postFormData } from "../utils/request";

export const getProductList = async () => {
  const result = await get("products");
  return result;
};

export const getProductDetail = async (id) => {
  const result = await get("products/" + id);
  return result;
};

// export const getVariationByCategoryId = async (id) => {
//   const result = await get(`categories/${id}/variations`);
//   return result;
// };

export const storeProduct = async (formData) => {
  const result = await postFormData(`products`, formData);
  return result;
};

export const editProduct = async (id, option) => {
  const result = await editFormData(`products/${id}`, option);
  return result;
};

export const deleteProduct = async (id) => {
  const result = await del(`products/${id}`);
  return result;
};

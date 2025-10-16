import { del, edit, get, post,  } from "../utils/request";

export const getCategoryList = async () => {
   const result = await get('categories');
    return result;
}

export const storeCategory = async (option) => {
  const result = await post(`categories`, option);
  return result;
};

export const editCategory = async (id, option) => {
  const result = await edit(`categories/${id}`, option);
  return result;
};

export const deleteCategory = async (id) => {
  const result = await del(`categories/${id}`);
  return result;
};


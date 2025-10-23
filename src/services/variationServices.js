import { del, edit, get, post,  } from "../utils/request";

export const getVariationList = async () => {
   const result = await get('variations');
    return result;
}

export const storeVariation = async (option) => {
  const result = await post(`variations`, option);
  return result;
};

export const editVariation = async (id, option) => {
  const result = await edit(`variations/${id}`, option);
  return result;
};

export const deleteVariation = async (id) => {
  const result = await del(`variations/${id}`);
  return result;
};


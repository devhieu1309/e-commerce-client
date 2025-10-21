import { del, edit, get, post,searchPost,  } from "../utils/request";

export const getPromotionList = async () => {
   const result = await get('promotions');
    return result;
}

export const storePromotion = async (option) => {
  const result = await post(`promotions`, option);
  return result;
};

export const editPromotion = async (id, option) => {
  const result = await edit(`promotions/${id}`, option);
  return result;
};

export const deletePromotion = async (id) => {
  const result = await del(`promotions/${id}`);
  return result;
};

export const searchPromotion = async (keyword) => {
  const result = await searchPost("promotions/search", { keyword });
  return result;
};
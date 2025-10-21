import { del, edit, get, post,  } from "../utils/request";

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


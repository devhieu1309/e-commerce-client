import { del, edit, get, post, postFormData } from "../utils/request";

export const getShoppingOrder= async () => {
  const result = await get(`shopping-order`);
  return result;
};

export const getOrderDetail = async (id) => {
  const result = await get(`shopping-order/${id}`);
  return result;
}



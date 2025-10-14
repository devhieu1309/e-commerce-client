import { del, edit, get, post } from "../utils/request";

export const getOrderStatusList = async () => {
  const result = await get("order-status");
  return result.reverse();
};

export const storeOrderStatus = async (option) => {
  const result = await post(`order-status`, option);
  return result;
};

export const editOrderStatus = async (id, option) => {
  const result = await edit(`order-status/${id}`, option);
  return result;
};

export const deleteOrderStatus = async (id) => {
  const result = await del(`order-status/${id}`);
  return result;
};

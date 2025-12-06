import { del, edit, get, post, postFormData } from "../utils/request";

export const getShoppingOrder= async () => {
  const result = await get(`shopping-order`);
  return result;
};

export const getOrderDetail = async (id) => {
  const result = await get(`shopping-order/${id}`);
  return result;
}

export const getOrdersByUser = async (userId) => {
  const result = await get(`shopping-order/user/${userId}`);
  return result;
}

export const updateOrderStatus = async (orderId, statusId) => {
  const result = await edit(`shopping-order/${orderId}`, {
    order_status_id: statusId
  });
  return result;
};

export const createShoppingOrder = async (data) => {
  const result = await post(`shopping-order`, data);
  return result;
};

export const getAddressCustomerList = async (userId) => {
  const result = await get(`customer-addresses/${userId}`);
  return result;
};




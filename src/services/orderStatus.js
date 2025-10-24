import { del, edit, get, post } from "../utils/request";

export const getOrderStatusList = async () => {
  const result = await get("orderStatus");
  return result;
};

export const storeOrderStatus = async (option) => {
  const result = await post(`orderStatus`, option);
  return result;
};

export const editOrderStatus = async (id, option) => {
  const result = await edit(`orderStatus/${id}`, option);
  return result;
};

export const deleteOrderStatus = async (id) => {
  const result = await del(`orderStatus/${id}`);
  return result;
};

export const searchOrderStatus = async (status) => {
  try {
    const response = await fetch(
      `https://e-commerce-server.app/api/orderStatus/search?status=${encodeURIComponent(
        status
      )}`
    );

    if (!response.ok) {
      throw new Error(`HTTP lỗi : ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Lỗi khi tìm kiếm Phương thanh toán: ", error);
    throw error;
  }
};

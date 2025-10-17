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

export const searchOrderStatus = async (status) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/order-status/search?status=${encodeURIComponent(
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

import { del, edit, get, post,  } from "../utils/request";

export const getShippingMethodList = async () => {
   const result = await get("shipping_methods");
    return result;
}

export const storeShippingMethod = async (option) => {
  const result = await post(`shipping_methods`, option);
  return result;
};

export const editShippingMethod = async (id, option) => {
  const result = await edit(`shipping_methods/${id}`, option);
  return result;
};

export const deleteShippingMethod = async (id) => {
  const result = await del(`shipping_methods/${id}`);
  return result;
};

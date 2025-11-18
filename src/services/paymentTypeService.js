import { del, editFormData, get, postFormData } from "../utils/request";

export const getPayment = async () => {
  const result = await get("payment-type");
  return result;
};

export const storePayment = async (formData) => {
  const result = await postFormData("payment-type", formData);
  return result;
};

export const editPayment = async ($id, option) => {
  const result = await editFormData(`payment-type/${$id}`, option);
  return result;
};

export const deletePayment = async ($id) => {
  const result = await del(`payment-type/${$id}`);
  return result;
};

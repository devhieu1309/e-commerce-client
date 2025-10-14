import { del, edit, get, post } from "../utils/request";

export const getBanner = async () => {
  const result = await get("banner");
  return result.reverse();
};

export const storeBanner = async (option) => {
  const result = await post(`banner`, option);
  return result;
};

export const editBanner = async (id, option) => {
  const result = await edit(`banner/${id}`, option);
  return result;
};

export const deleteBanner = async (id) => {
  const result = await del(`banner/${id}`);
  return result;
};

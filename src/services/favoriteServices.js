import { get, post, del } from "../utils/request";

export const getFavorite = async () => {
  const result = await get("favorite");
  return result;
};

export const postFavorite = async (option) => {
  const result = await post("favorite", option);
  return result;
};

export const deleteFavorite = async (id) => {
  const result = await del(`favorite/${id}`);
  return result;
};

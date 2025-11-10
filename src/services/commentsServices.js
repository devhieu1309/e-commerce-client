import { get, post } from "../utils/request";

export const getComments = async () => {
  const result = await get("comments");
  return result;
};

export const storeComment = async (option) => {
  const result = await post("comments", option);
  return result;
};

import { del, edit, get, post } from "../utils/request";

export const getComments = async () => {
  const result = await get("comments");
  return result;
};

export const storeComment = async (option) => {
  const result = await post("comments", option);
  return result;
};

// export const deleteComment = async ($id) => {
//   const result = await del("comments", $id);
//   return result;
// };

import { get, post, del } from "../utils/request";

export const getAllCompare = async () => {
  const result = await get("compare");
  return result;
};

export const postCompare = async (option) => {
  const result = await post("compare", option);
  return result;
};

export const deleteCompare = async (id) => {
  const result = await del(`compare/${id}`);
  return result;
};

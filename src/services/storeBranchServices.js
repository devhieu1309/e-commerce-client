import { del, edit, get, post, } from "../utils/request";

export const getStoreBranchList = async () => {
   const result = await get('store_branches');
    return result;
}

export const storeStoreBranch = async (option) => {
  const result = await post(`store_branches`, option);
  return result;
};

export const editStoreBranch = async (id, option) => {
  const result = await edit(`store_branches/${id}`, option);
  return result;
};

export const deleteStoreBranch = async (id) => {
  const result = await del(`store_branches/${id}`);
  return result;
};
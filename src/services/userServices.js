import { del, edit, get, post, patch } from "../utils/request";

export const getUserList = async () => {
  const result = await get('users');
  return result;
}

export const storeUser = async (option) => {
  const result = await post(`users`, option);
  return result;
};

export const editUser = async (id, option) => {
  const result = await edit(`users/${id}`, option);
  return result;
};

export const deleteUser = async (id) => {
  const result = await del(`users/${id}`);
  return result;
};

export const searchUser = async (keyword) => {
  const result = await get(`users/search?query=${keyword}`);
  return result;
};

export const changePassword = async (id, data) => {
  const result = await patch(`users/${id}/change-password`, data);
  return result;
};



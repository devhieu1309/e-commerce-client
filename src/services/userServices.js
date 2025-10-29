import { del, edit, get, post } from "../utils/request";

export const getUserList = async () => {
  const result = await get('users');
  return result;
}

// Lấy thông tin 1 user theo ID (cho phần Thông tin tài khoản)
export const getUserById = async (id) => {
  const result = await get(`users/${id}`);
  return result;
};


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

export const searchUser = async (query) => {
  const result = await get(`users/search?query=${encodeURIComponent(query)}`);
  return result;
};


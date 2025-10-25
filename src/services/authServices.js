import { post } from "../utils/request";

export const register = async (data) => {
  const payload = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    password: data.password,
  };

  const result = await post("register", payload);
  return result;
};

export const login = async (data) => {
  const payload = {
    email: data.email,
    password: data.password,
  };
  const result = await post("login", payload);
  return result;
};
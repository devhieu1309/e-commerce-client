import { del, edit, get, post } from "../utils/request";
// const API_DOMAIN = "https://e-commerce-server.app/api/";

export const getBanner = async () => {
  const result = await get("banner");
  return result.reverse();
};

// export const storeBanner = async (data) => {
//   const result = await post(`banner`, data);
//   return result;
// };

export const storeBanner = async (formData) => {
  const response = await post("banner", {
    method: "POST",
    body: formData, // Gửi FormData trực tiếp
  });

  const result = await response.json();
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

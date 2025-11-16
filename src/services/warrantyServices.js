import { del, edit, get, post, } from "../utils/request";
// const API_DOMAIN = "https://e-commerce-server.app/api/warranty";
const API_DOMAIN = "http://127.0.0.1:8000/api/warranty";

export const searchWarrantyBySerial = async (serial) => {
  if (!serial) return { success: false, data: null };

  try {
    const response = await fetch(`${API_DOMAIN}/search/${serial}`);

    if (!response.ok) {
      return { success: false, data: null, message: "API error" };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fail to fetch: ", error);
    return { success: false, data: null, message: error.message };
  }
};

export const getGuaranteeList = async () => {
   const result = await get('warranty');
    return result;
}

export const storeGuarantee = async (option) => {
  const result = await post(`warranty`, option);
  return result;
};

export const editGuarantee = async (id, option) => {
  const result = await edit(`warranty/${id}`, option);
  return result;
};

export const deleteGuarantee = async (id) => {
  const result = await del(`warranty/${id}`);
  return result;
};

export const getGuaranteeById = async (id) => {
  const result = await get("warranty/" + id);
  return result;
}

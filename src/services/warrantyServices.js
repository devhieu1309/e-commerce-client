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

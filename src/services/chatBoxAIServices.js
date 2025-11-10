// import { post } from "../utils/request";

// const API_DOMAIN = "https://e-commerce-server.app/api/";
const API_DOMAIN = "http://127.0.0.1:8000/api/";
export const chatBox = async (message) => {
  try {
    const response = await fetch(`${API_DOMAIN}chat`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error;
  }
};

// export const chatBox = async (option) => {
//   const result = await post(`chat`, option);
//   return result;
// };

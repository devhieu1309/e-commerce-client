import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/banner";

//  Lấy danh sách banner
export const getBanner = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    // Đảo ngược để banner mới nhất lên đầu
    return response.data.reverse();
  } catch (error) {
    console.error("Lỗi khi lấy danh sách banner:", error.response?.data);
    throw error;
  }
};

//  Thêm mới banner
export const storeBanner = async (formData) => {
  try {
    const response = await axios.post(API_BASE_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Lỗi khi thêm banner:", error.response?.data);
    throw error;
  }
};

//  Cập nhật banner
export const editBanner = async (id, formData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/${id}?_method=PATCH`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi cập nhật banner:", error.response?.data);
    throw error;
  }
};

//  Xóa banner
export const deleteBanner = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi xóa banner:", error.response?.data);
    throw error;
  }
};

//tìm kiếm baneer theo tiêu đề
export const searchBanner = async (title) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/banner/search?title=${encodeURIComponent(
        title
      )}`
    );

    if (!response.ok) {
      throw new Error(`HTTP lỗi : ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Lỗi khi tìm kiếm Banner: ", error);
    throw error;
  }
};

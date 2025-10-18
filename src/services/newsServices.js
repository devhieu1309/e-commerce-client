import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/news";

//  Lấy danh sách tin tuc
export const getNews = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    // Đảo ngược để banner mới nhất lên đầu
    return response.data.reverse();
  } catch (error) {
    console.error("Lỗi khi lấy danh sách tin tuc:", error.response?.data);
    throw error;
  }
};

//  Thêm mới tin tức
export const storeNews = async (formData) => {
  try {
    const response = await axios.post(API_BASE_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Lỗi khi thêm tin tức: ", error.response?.data);
    throw error;
  }
};

//  Cập nhật tin tức
export const editNews = async (id, formData) => {
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
    console.error("Lỗi khi cập nhật tin tức: ", error.response?.data);
    throw error;
  }
};

//  Xóa tin tức
export const deleteNews = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi xóa tin tức:", error.response?.data);
    throw error;
  }
};

//tìm kiếm tin tức theo tiêu đề
export const searchNews = async (title) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/news/search?title=${encodeURIComponent(title)}`
    );

    if (!response.ok) {
      throw new Error(`HTTP lỗi : ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Lỗi khi tìm kiếm tin tức: ", error);
    throw error;
  }
};

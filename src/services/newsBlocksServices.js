import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/newsBlocks";

//  Lấy danh sách bài viết
export const getNewsBlocks = async () => {
  try {
    const response = await axios.get(API_BASE_URL);

    return response.data.reverse();
  } catch (error) {
    console.error("Lỗi khi lấy danh sách bài viết:", error.response?.data);
    throw error;
  }
};

//  Thêm mới bài viết
export const storeNewsBlocks = async (formData) => {
  try {
    const response = await axios.post(API_BASE_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Lỗi khi thêm bài viết: ", error.response?.data);
    throw error;
  }
};

//  Cập nhật tin tức
export const editNewsBlocks = async (id, formData) => {
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
    console.error("Lỗi khi cập nhật bài viết: ", error.response?.data);
    throw error;
  }
};

//  Xóa bài viết
export const deleteNewsBlocks = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi xóa bài viết:", error.response?.data);
    throw error;
  }
};

//tìm kiếm bài viết theo tiêu đề
export const searchNewsBlocks = async (title) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/newsBlocks/search?title=${encodeURIComponent(
        title
      )}`
    );

    if (!response.ok) {
      throw new Error(`HTTP lỗi : ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Lỗi khi tìm kiếm bài viết: ", error);
    throw error;
  }
};

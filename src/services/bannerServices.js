// const API_BASE_URL = "https://e-commerce-server.app/api/banner";
const API_BASE_URL = "http://127.0.0.1:8000/api/banner";

//  Lấy danh sách banner
export const getBanner = async () => {
  try {
    const response = await fetch(API_BASE_URL);

    const data = await response.json();

    return data.reverse();
  } catch (error) {
    console.error("Lỗi khi lấy danh sách Banner:", error.response?.data);
    throw error;
  }
};
export const getDetailBanner = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách Banner:", error.response?.data);
    throw error;
  }
};

export const storeBanner = async (formData) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Lỗi khi thêm tin tức: ", error.response?.data);
    throw error;
  }
};

//  Cập nhật banner
export const editBanner = async (id, formData) => {
  try {
    const url = `${API_BASE_URL}/${id}?_method=PATCH`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    return await response.json();
  } catch (error) {
    console.error("Lỗi khi cập nhật Banner: ", error.response?.data);
    throw error;
  }
};

//  Xóa banner
export const deleteBanner = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Lỗi khi xóa tin tức:", error.response?.data);
    throw error;
  }
};

//tìm kiếm baneer theo tiêu đề
export const searchBanner = async (title) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search?title=${encodeURIComponent(title)}`
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

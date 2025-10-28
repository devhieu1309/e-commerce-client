const API_BASE_URL = "http://127.0.0.1:8000/api/news";
// const API_BASE_URL = "https://e-commerce-server.app/api/news";

//  Lấy danh sách tin tuc
export const getNews = async () => {
  try {
    const response = await fetch(API_BASE_URL);

    const data = await response.json();

    return data.reverse();
  } catch (error) {
    console.error("Lỗi khi lấy danh sách tin tuc:", error.response?.data);
    throw error;
  }
};

//  Thêm mới tin tức
export const storeNews = async (formData) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      body: formData, // gửi FormData trực tiếp, KHÔNG cần JSON.stringify
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Lỗi khi thêm tin tức: ", error.response?.data);
    throw error;
  }
};

//  Cập nhật tin tức
export const editNews = async (id, formData) => {
  try {
    const url = `${API_BASE_URL}/${id}?_method=PATCH`;

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    return await response.json();
  } catch (error) {
    console.error("Lỗi khi cập nhật tin tức: ", error.response?.data);
    throw error;
  }
};

//  Xóa tin tức
export const deleteNews = async (id) => {
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

//Hien thi tin tuc noi bat moi nhat
export const getNewsFeatured = async (limit = null) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    // Chuyển dữ liệu sang JSON
    const data = await response.json();

    // Sắp xếp theo ngày tạo mới nhất
    const sortedData = data.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    // Trả về số lượng giới hạn (nếu có)
    return limit ? sortedData.slice(0, limit) : sortedData;
  } catch (error) {
    console.log("Loi khi lay danh sach: ", error);
    return [];
  }
};

export const getDetailNews = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}/blocks`);
  return await response.json();
};

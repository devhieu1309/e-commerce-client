// const API_DOMAIN = "https://e-commerce-server.app/api/";
const API_DOMAIN = "http://127.0.0.1:8000/api/";

export const get = async (path) => {
  const response = await fetch(API_DOMAIN + path);

  const result = await response.json();



  return result;
};



export const post = async (path, options) => {
  const isFormData = options instanceof FormData;
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: isFormData
      ? {}
      : {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    body: isFormData ? options : JSON.stringify(options),
  });

  const result = await response.json();


  if (!response.ok) {
    const error = new Error(result.message || "Request failed");
    error.response = {
      status: response.status,
      data: result,
    };
    throw error;
  }

  return result;
};

export const del = async (path) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "DELETE",
  });
  const result = await response.json();


  return result;
};


// export const edit = async (path, options) => {
//   try {
//     const isFormData = options instanceof FormData;

//     if (isFormData && !options.has("_method")) {
//       options.append("_method", "PATCH");
//     }

//     console.log("Options being sent in edit:", `${API_DOMAIN}${path}`);
//     const response = await fetch(`${API_DOMAIN}${path}`, {
//       method: "POST",
//       headers: isFormData
//         ? { Accept: "application/json" }
//         : {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//       body: isFormData ? options : JSON.stringify(options),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.log("Lỗi khi fetch API: ", error);
//   }
// };

export const edit = async (path, options) => {
  const response = await fetch(`${API_DOMAIN}${path}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  const result = await response.json();



  return result;
};

// export const searchPost = async (path, options) => {
//   const response = await fetch(API_DOMAIN + path, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(options),
//   });

//   const result = await response.json();

//   if (!response.ok) {
//     const error = new Error(result.message || "Search request failed");
//     error.response = {
//       status: response.status,
//       data: result,
//     };
//     throw error;
//   }

//   return result;
// };


export const postFormData = async (path, formData) => {
  const res = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  const raw = await res.text();
  let data;
  try {
    data = raw ? JSON.parse(raw) : null;
  } catch (e) {
    data = raw;
  }



  if (!res.ok) {
    console.error("API error:", res.status, data);
    const err = new Error((data && data.message) || `Status ${res.status}`);
    err.response = { status: res.status, data, raw };
    throw err;
  }
  return data;
};

export const editFormData = async (path, formData, method = "PUT") => {
  formData.append("_method", "PUT");
  const res = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  const raw = await res.text();
  let data;
  try {
    data = raw ? JSON.parse(raw) : null;
  } catch (e) {
    data = raw;
  }


  if (!res.ok) {
    console.error("API error:", res.status, data);
    const err = new Error((data && data.message) || `Status ${res.status}`);
    err.response = { status: res.status, data, raw };
    throw err;
  }

  return data;
};


/* ============================================================
   Bùi Thẩm Kỳ
   ============================================================ */

/* PATCH chuẩn cho đổi mật khẩu */
export const patch = async (path, options = {}) => {

  // Kiểm tra tài khoản bị khóa ngay tại client
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.is_active === false) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/dang-nhap";
    return null;
  }

  const response = await fetch(API_DOMAIN + path, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  let result = null;
  try {
    result = await response.json();
  } catch (e) {
    result = null;
  }

  // (xử lý tài khoản bị khóa)
  if (response.status === 403 && result?.message?.includes("khóa")) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/dang-nhap";
    return null;
  }

  if (!response.ok) {
    const error = new Error(result?.message || "PATCH request failed");
    error.response = { status: response.status, data: result };
    throw error;
  }

  return result;
};

/* PUT update địa chỉ */
export const put = async (path, options = {}) => {

  // Kiểm tra tài khoản bị khóa ngay tại client
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.is_active === false) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/dang-nhap";
    return null;
  }

  const response = await fetch(API_DOMAIN + path, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  let result = null;
  try {
    result = await response.json();
  } catch { }

  // (xử lý tài khoản bị khóa)
  if (response.status === 403 && result?.message?.includes("khóa")) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/dang-nhap";
    return null;
  }

  if (!response.ok) {
    const error = new Error(result?.message || "PUT request failed");
    error.response = { status: response.status, data: result };
    throw error;
  }

  return result;
};

/* DELETE để xoá địa chỉ */
export const deleteItem = async (path) => {

  // Kiểm tra tài khoản bị khóa ngay tại client
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.is_active === false) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/dang-nhap";
    return null;
  }

  const response = await fetch(API_DOMAIN + path, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  let result = null;
  try {
    result = await response.json();
  } catch { }

  // (xử lý tài khoản bị khóa)
  if (response.status === 403 && result?.message?.includes("khóa")) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/dang-nhap";
    return null;
  }

  if (!response.ok) {
    const error = new Error(result?.message || "DELETE request failed");
    error.response = { status: response.status, data: result };
    throw error;
  }

  return result;
};

/* POST SEARCH */
export const searchPost = async (path, options) => {

  // Kiểm tra tài khoản bị khóa ngay tại client
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.is_active === false) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/dang-nhap";
    return null;
  }

  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  let result = null;
  try {
    result = await response.json();
  } catch { }

  // (xử lý tài khoản bị khóa)
  if (response.status === 403 && result?.message?.includes("khóa")) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/dang-nhap";
    return null;
  }

  if (!response.ok) {
    const error = new Error(result?.message || "Search request failed");
    error.response = { status: response.status, data: result };
    throw error;
  }

  return result;
};

/* ============================================================
   Bùi Thẩm Kỳ
   ============================================================ */
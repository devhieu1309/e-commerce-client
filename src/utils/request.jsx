//const API_DOMAIN = "https://e-commerce-server.app/api/";
const API_DOMAIN = "http://127.0.0.1:8000/api/";

export const get = async (path, params = {}) => {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(API_DOMAIN + path + (query ? `?${query}` : ""));
  const result = await response.json();
  return result;
};

// export const post = async (path, options) => {
//     const response = await fetch(API_DOMAIN + path , {
//         method: 'POST',
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(options)
//     });
//     const result = await response.json();
//     return result;
// }

export const post = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
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

export const searchPost = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  const result = await response.json();

  if (!response.ok) {
    const error = new Error(result.message || "Search request failed");
    error.response = {
      status: response.status,
      data: result,
    };
    throw error;
  }

  return result;
};

export const postFormData = async (path, formData) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    body: formData,
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

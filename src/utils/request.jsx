const API_DOMAIN = "https://e-commerce-server.app/api/";
// const API_DOMAIN = "http://127.0.0.1:8000/api/";

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
//   const response = await fetch(`${API_DOMAIN}${path}`, {
//     method: "PATCH",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(options),
//   });
//   const result = await response.json();
//   return result;
// };

export const edit = async (path, options) => {
  try {
    const isFormData = options instanceof FormData;

    if (isFormData && !options.has("_method")) {
      options.append("_method", "PATCH");
    }

    const response = await fetch(`${API_DOMAIN}${path}`, {
      method: "POST",
      headers: isFormData
        ? { Accept: "application/json" }
        : {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
      body: isFormData ? options : JSON.stringify(options),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log("Lỗi khi fetch API: ", error);
  }
};

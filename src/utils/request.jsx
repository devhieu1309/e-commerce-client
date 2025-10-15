//const API_DOMAIN = "https://e-commerce-server.app/api/";
const API_DOMAIN = "http://127.0.0.1:8000/api/";

export const get = async (path) => {
  const response = await fetch(API_DOMAIN + path);
  const result = await response.json();
  return result;
};
<<<<<<< HEAD
=======

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
>>>>>>> a6d1ae3179102933a62168c386f785d6cf786151

export const post = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
<<<<<<< HEAD
  const result = await response.json();
=======

  const result = await response.json();

  if (!response.ok) {
    const error = new Error(result.message || "Request failed");
    error.response = {
      status: response.status,
      data: result,
    };
    throw error;
  }

>>>>>>> a6d1ae3179102933a62168c386f785d6cf786151
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

import { del, edit, get, post, postFormData } from "../utils/request";

export const getVideoReview = async (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const result = await get(`video-reviews${queryString ? `?${queryString}` : ''}`);
  return result;
};

export const storeVideoReview = async (formData) => {
  const result = await postFormData(`video-reviews`, formData);
  return result;
};


export const editVideoReview = async (id, formData) => {
  formData.append("_method", "PUT");
  const result = await postFormData(`video-reviews/${id}`, formData);
  return result;
};

export const deleteVideoReview = async (id) => {
  const result = await del(`video-reviews/${id}`);
  return result;
};

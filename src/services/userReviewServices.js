import { get, del, post } from "../utils/request";

export const getUserReviews = async () => {
  const result = await get("user-reviews");
  return result;
};

export const storeUserReview = async (option) => {
  const result = await post("user-reviews", option);
  return result;
};

export const deleteUserReview = async (id) => {
  const result = await del(`user-reviews/${id}`);
  return result;
};

import { get } from "../utils/request";

export const getProvinces = () => {
  return get("provinces");
};

export const getWardsByProvince = (provinceId) => {
  return get(`wards/by-province/${provinceId}`);
};


import adminAPI from "src/services/axiosAdmin";

export const getBrandList = async () => {
  const { data } = await adminAPI.get("brands");
  return data;
};

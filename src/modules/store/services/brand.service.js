import api from "src/services/axios";

export const getBrandList = async () => {
  const { data } = await api.get("brands");
  return data;
};

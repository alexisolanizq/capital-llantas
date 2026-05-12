import api from "src/services/axios";

export const loginRequest = async (body) => {
  const res = await api.post("/login", body);
  return res.data;
};

export const signUpRequest = async (body) => {
  const res = await api.post("/register", body);
  return res.data;
};

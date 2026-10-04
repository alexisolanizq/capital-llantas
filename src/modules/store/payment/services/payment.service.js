import api from "src/services/axios";

export const checkoutService = {
  createCheckout: async (values) => {
    const { data } = await api.post("/auth/checkout", values);
    return data;
  },
  payment: async (uuid) => {
    const { data } = await api.post(`/auth/payments/${uuid}/checkout`);
    return data;
  },
};

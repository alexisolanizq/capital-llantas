import api from "src/services/axios";

export const checkoutService = {
  createCheckout: async (values) => {
    const { data } = await api.post("/checkout", values);
    return data;
  },
  payment: async (uuid) => {
    const { data } = await api.post(`/payments/${uuid}/checkout`);
    return data;
  },
};

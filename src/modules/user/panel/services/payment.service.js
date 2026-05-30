import api from "src/services/axios";

export const paymentService = {
  checkout: async (uuid) => {
    const { data } = await api.post(`/payments/${uuid}/checkout`);
    return data;
  },
};

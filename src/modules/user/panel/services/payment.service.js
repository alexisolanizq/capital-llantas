import api from "src/services/axios";

export const paymentService = {
  paymentConfirm: async () => {
    const { data } = await api.post("/payment/confirm");
    return data;
  },
};

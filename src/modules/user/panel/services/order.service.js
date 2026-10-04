import api from "src/services/axios";

const orderService = {
  orders() {
    return api.get("/auth/orders");
  },
};

export default orderService;

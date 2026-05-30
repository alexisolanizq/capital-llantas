import api from "src/services/axios";

const orderService = {
  orders() {
    return api.get("/orders");
  },
};

export default orderService;

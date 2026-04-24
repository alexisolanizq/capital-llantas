import api from "src/services/axios";

const adminBrandService = {
  brandList() {
    return api.get("brands");
  },
};

export default adminBrandService;

import adminAPI from "src/services/axiosAdmin";

const adminBrandService = {
  brandList: async () => {
    const { data } = await adminAPI.get("admin/brands");
    return data
  },
  createBrand: async (brand) => {
    const { data } = await adminAPI.post("admin/brands", brand, { skipToast: true })
    return data?.data?.brand
  },
  updateBrand: async ({ id, body }) => {
    const { data } = await adminAPI.put(`admin/brands/${id}`, body)
    return data?.data?.brand
  }
};

export default adminBrandService;

import adminAPI from "src/services/axiosAdmin";

const adminTireService = {
  tireList() {
    return adminAPI.get("admin/tires");
  },
  createTire: async (body) => {
    const { data } = await adminAPI.post("admin/tires", body, { skipToast: true })
    return data
  },
  updateBrand: async (tire) => {
    const { data } = await adminAPI.put("admin/tires", tire, { skipToast: true })
    return data
  },
  tireBulkUpload: async (formData) => {
    const { data } = await adminAPI.post("tires/import", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    return data
  }
};

export default adminTireService;

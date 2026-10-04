import api from "src/services/axios";

const tireService = {
  getAll: async (filters) => {
    const params = {};

    Object.entries(filters || {}).forEach(([key, value]) => {
      if (!value || value.length === 0) return;
      params[key] = Array.isArray(value) ? value.join(",") : value;
    });

    const { data } = await api.get("/tires", {
      params,
    });
    return data;
  },
  getBySlug(slug) {
    return api.get(`tires/${slug}`);
  },
};

export default tireService;

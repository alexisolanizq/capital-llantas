import api from "src/services/axios";

const authService = {
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials, {
      skipToast: true,
    });

    return response.data;
  },

  register: async (data) => {
    const response = await api.post("/auth/register", data, {
      skipToast: true,
    });

    return response.data;
  },

  me: async () => {
    const response = await api.get("/auth/me", {
      skipToast: true,
    });

    return response.data;
  },

  logout: async () => {
    const response = await api.post("/auth/logout", null, {
      skipToast: true,
    });

    return response.data;
  },
};

export default authService;
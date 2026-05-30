import api from "src/services/axios";

const authService = {
  login: async (credentials) => {
    const response = await api.post("/login", credentials, {
      skipToast: true,
    });

    return response.data;
  },

  register: async (data) => {
    const response = await api.post("/register", data, {
      skipToast: true,
    });

    return response.data;
  },

  me: async () => {
    const response = await api.get("/me", {
      skipToast: true,
    });

    return response.data;
  },

  logout: async () => {
    const response = await api.post("/logout", null, {
      skipToast: true,
    });

    return response.data;
  },
};

export default authService;
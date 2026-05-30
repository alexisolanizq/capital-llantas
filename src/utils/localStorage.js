import useAuthStore from "src/store/authStore";

export const authStorage = {
  setToken(token) {
    localStorage.setItem("token", token);
  },

  getToken() {
    return localStorage.getItem("token");
  },

  removeToken() {
    localStorage.removeItem("token");
  },

  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  },

  getUser() {
    try {
      return JSON.parse(localStorage.getItem("user") || "null");
    } catch {
      return null;
    }
  },

  removeUser() {
    localStorage.removeItem("user");
  },
};

export const handleAuthSuccess = (data, navigate, location) => {
  const { token, user } = data;

  // Guardar en Zustand + localStorage
  useAuthStore.getState().setAuth({
    token,
    user,
  });

  // Redirigir a la ruta original o al panel
  const from = location.state?.from?.pathname || "/auth/perfil";

  navigate(from, {
    replace: true,
  });
};

export const clearAuthStorage = () => {
  useAuthStore.getState().clearAuth();
};

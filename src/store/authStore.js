import { create } from "zustand";
import authService from "src/modules/user/auth/services/auth.service";

const getStoredToken = () => localStorage.getItem("token");

const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user") || "null");
  } catch {
    return null;
  }
};

const useAuthStore = create((set, get) => ({
  token: getStoredToken(),
  user: getStoredUser(),
  isAuthenticated: !!getStoredToken(),
  loading: true,

  setAuth: ({ token, user }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    set({
      token,
      user,
      isAuthenticated: true,
      loading: false,
    });
  },

  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },

  clearAuth: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    set({
      token: null,
      user: null,
      isAuthenticated: false,
      loading: false,
    });
  },

  // Verificar token y obtener usuario actual
  checkAuth: async () => {
    const token = get().token;

    if (!token) {
      set({
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
      });
      return;
    }

    try {
      const response = await authService.me();

      localStorage.setItem("user", JSON.stringify(response.user));

      set({
        user: response.user,
        isAuthenticated: true,
        loading: false,
      });
    } catch (error) {
      get().clearAuth();
    }
  },

  // Cerrar sesión
  logout: async () => {
    try {
      await authService.logout();
    } catch (error) {
      // Ignorar errores del backend
    }

    get().clearAuth();
  },
}));

export default useAuthStore;
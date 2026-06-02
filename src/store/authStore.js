import { create } from "zustand";
import { authStorage } from "src/utils/localStorage";
import authService from "src/modules/user/auth/services/auth.service";

const useAuthStore = create((set, get) => ({
  token: authStorage.getToken(),
  user: authStorage.getUser(),
  isAuthenticated: !!authStorage.getToken(),
  loading: true,

  setAuth: ({ token, user }) => {
    authStorage.setToken(token);
    authStorage.setUser(user);

    set({
      token,
      user,
      isAuthenticated: true,
      loading: false,
    });
  },

  setUser: (user) => {
    authStorage.setUser(user);
    set({ user });
  },

  clearAuth: () => {
    authStorage.removeToken();
    authStorage.removeUser();

    set({
      token: null,
      user: null,
      isAuthenticated: false,
      loading: false,
    });
  },

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

      authStorage.setUser(response.user);

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

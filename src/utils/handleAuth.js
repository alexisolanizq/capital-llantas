import useAuthStore from "src/store/authStore";

export const handleAuthSuccess = (data, navigate, location) => {
  const { token, user } = data;

  useAuthStore.getState().setAuth({
    token,
    user,
  });

  const from = location.state?.from?.pathname || "/auth/perfil";

  navigate(from, {
    replace: true,
  });
};

export const clearAuthStorage = () => {
  useAuthStore.getState().clearAuth();
};

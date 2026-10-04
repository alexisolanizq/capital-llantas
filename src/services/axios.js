import axios from "axios";
import router from "src/router";
import { getCartId } from "src/utils/cartId";
import { authStorage } from "src/utils/localStorage";
import { showError } from "src/utils/toast";

const AUTH_REDIRECT_KEY = "postLoginRedirect";
const AUTH_EXCEPTION = "Illuminate\\Auth\\AuthenticationException";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://todo-terreno-backend-api-6lhern-07838a-147-93-114-242.traefik.me/api",
  headers: {
    "Accept": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});

const isUnauthenticated = (error) => {
  const data = error?.response?.data;
  const status = error?.response?.status;

  return (
    status === 401 ||
    data?.exception === AUTH_EXCEPTION ||
    (data?.error_global === true && data?.message === 'Unauthenticated.')
  );
};

api.interceptors.request.use(
  (config) => {
    // Corregido: se manda a llamar sin parámetros
    const token = authStorage.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const cartId = getCartId();
    if (cartId) {
      config.headers["X-Cart-Id"] = cartId;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    // 1. Interceptar errores de autenticación (401)
    if (isUnauthenticated(error)) {
      authStorage.removeToken();
      authStorage.removeUser();

      const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      const isAuthPage = currentPath.startsWith("/login") || currentPath.startsWith("/register");

      if (!isAuthPage) {
        sessionStorage.setItem(AUTH_REDIRECT_KEY, currentPath);

        router.navigate("/login", {
          replace: true,
        });
      }

      return Promise.reject(error);
    }

    // 2. Interceptar y mostrar otros errores (403, 500, etc.)
    if (!error.config?.skipToast) {
      if (status === 403) {
        showError({ response: { data: { message: "No tienes permisos para realizar esta acción." } } });
      } else if (status === 500) {
        showError({ response: { data: { message: "Error del servidor 😵" } } });
      } else {
        showError(error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;

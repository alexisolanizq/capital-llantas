import axios from "axios";
import { getCartId } from "src/utils/cartId";
import { authStorage } from "src/utils/localStorage";
import { showError } from "src/utils/toast";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://todo-terreno-backend-api-6lhern-07838a-147-93-114-242.traefik.me/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  try {
    const token = authStorage.getToken("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const cartId = getCartId();

    if (cartId) {
      config.headers["X-Cart-Id"] = cartId;
    }
  } catch (e) {
    console.warn("Interceptor error:", e);
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      // Limpiar autenticación
      authStorage.removeToken("token");
      authStorage.removeToken("user");

      // Evitar redirección infinita si ya estamos en login
      if (
        window.location.pathname !== "/login" &&
        window.location.pathname !== "/register"
      ) {
        window.location.href = "/login";
      }

      return Promise.reject(error);
    }

    if (!error.config?.skipToast) {
      switch (status) {
        case 403:
          showError({
            response: {
              data: {
                message: "No tienes permisos 🚫",
              },
            },
          });
          break;

        case 500:
          showError({
            response: {
              data: {
                message: "Error del servidor 😵",
              },
            },
          });
          break;

        default:
          showError(error);
          break;
      }
    }

    return Promise.reject(error);
  },
);

export default api;

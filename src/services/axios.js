import axios from "axios";
import { getCartId } from "src/utils/cartId";
import { showError } from "src/utils/toast";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://todo-terreno-backend-api-6lhern-07838a-147-93-114-242.traefik.me/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("token");

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

    if (!error.config?.skipToast) {
      switch (status) {
        case 403:
          showError({
            response: { data: { message: "No tienes permisos 🚫" } },
          });
          break;

        case 500:
          showError({
            response: { data: { message: "Error del servidor 😵" } },
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

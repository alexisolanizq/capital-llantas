import axios from "axios";
import router from "src/router";
import { adminAuthStorage } from "src/utils/localStorage";
import { showError } from "src/utils/toast";

const AUTH_REDIRECT_KEY = "postLoginRedirect";
const AUTH_EXCEPTION = "Illuminate\\Auth\\AuthenticationException";

const adminAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://todo-terreno-backend-api-6lhern-07838a-147-93-114-242.traefik.me/api",
    headers: {
        "Accept": "application/json",
        "ngrok-skip-browser-warning": "true",
    },
});

const isUnauthenticated = (error) => {
    console.log(error);

    const data = error?.response?.data;
    const status = error?.response?.status;

    return (
        status === 401 ||
        data?.exception === AUTH_EXCEPTION ||
        (data?.error_global === true && data?.message === 'Unauthenticated.')
    );
};

adminAPI.interceptors.request.use(
    (config) => {
        const token = adminAuthStorage.getToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

adminAPI.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error);
        const status = error?.response?.status;


        if (isUnauthenticated(error)) {
            adminAuthStorage.removeToken();
            adminAuthStorage.removeUser();

            const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
            const isAuthPage = currentPath.startsWith("/admin/login")

            if (!isAuthPage) {
                sessionStorage.setItem(AUTH_REDIRECT_KEY, currentPath);

                router.navigate("/admin/login", {
                    replace: true,
                });
            }

            return Promise.reject(error);
        }

        if (!error.config?.skipToast) {
            if (status === 403) {
                showError({ response: { data: { message: "No tienes permisos para realizar esta acción." } } });
            } else if (status === 500) {
                showError({ response: { data: { message: "Error interno del servidor 😵" } } });
            } else {
                showError(error);
            }
        }

        return Promise.reject(error);
    }
);

export default adminAPI;

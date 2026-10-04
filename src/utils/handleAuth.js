import useAuthStore from "src/store/authStore";

const AUTH_REDIRECT_KEY = "postLoginRedirect";

const isInternalPath = path => typeof path === 'string' && path.startsWith("/") && !path.startsWith("//")

const getPathFromLocation = from => {
  if (typeof from === "string") {
    return form
  }

  if (!from?.pathname) {
    return null
  }

  return `${from.pathname}${from.search || ""}${from.hash || ""}`;
}

export const handleAuthSuccess = (data, navigate, location) => {
  const { token, user } = data;

  useAuthStore.getState().setAuth({
    token,
    user,
  });

  const pathFromState = getPathFromLocation(location.state?.from)
  const pathFromStorage = sessionStorage.getItem(AUTH_REDIRECT_KEY)

  const destination =
    (isInternalPath(pathFromState) && pathFromState) || (isInternalPath(pathFromStorage) && pathFromStorage) ||
    "/auth/perfil"

  sessionStorage.removeItem(AUTH_REDIRECT_KEY)

  navigate(destination, {
    replace: true,
  });
};

export const clearAuthStorage = () => {
  useAuthStore.getState().clearAuth();
  sessionStorage.removeItem(AUTH_REDIRECT_KEY)
};

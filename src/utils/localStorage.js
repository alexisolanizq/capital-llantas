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
};

export const handleAuthSuccess = (data, navigate, location) => {
  authStorage.setToken(data.token);
  const from = location.state?.from?.pathname || "/auth/panel";
  navigate(from, { replace: true });
};

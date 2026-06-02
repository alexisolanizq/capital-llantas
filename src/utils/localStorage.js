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

  clear() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
};
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

export const adminAuthStorage = {
  setToken(token) {
    localStorage.setItem("admin-token", token);
  },
  getToken() {
    return localStorage.getItem("admin-token");
  },
  removeToken() {
    localStorage.removeItem("admin-token");
  },
  setAdmin(admin) {
    localStorage.setItem("admin", JSON.stringify(admin));
  },
  getAdmin() {
    try {
      return JSON.parse(localStorage.getItem("admin") || "null");
    } catch {
      return null;
    }
  },
  removeAdmin() {
    localStorage.removeItem("admin");
  },
  clear() {
    localStorage.removeItem("admin-token");
    localStorage.removeItem("admin");
  },
};
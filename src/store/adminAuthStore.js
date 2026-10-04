import { create } from "zustand";
import { adminAuthStorage } from "src/utils/localStorage";
import adminAuthService from "src/modules/admin/auth/services/admin.auth.service";

const useAdminAuthStore = create((set, get) => ({
    token: adminAuthStorage.getToken(),
    admin: adminAuthStorage.getAdmin(),
    isAuthenticated: !!adminAuthStorage.getToken(),
    loading: true,

    setAuth: ({ token, admin }) => {
        console.log(token, admin);

        adminAuthStorage.setToken(token);
        adminAuthStorage.setAdmin(admin);
        set({
            token,
            admin,
            isAuthenticated: true,
            loading: false,
        });
    },
    setAdmin: (admin) => {
        adminAuthStorage.setAdmin(admin);
        set({ admin });
    },
    clearAuth: () => {
        adminAuthStorage.clear();
        set({
            token: null,
            admin: null,
            isAuthenticated: false,
            loading: false,
        });
    },
    checkAuth: async () => {
        const token = get().token;
        if (!token) {
            set({
                token: null,
                admin: null,
                isAuthenticated: false,
                loading: false,
            });
            return;
        }
        try {
            const response = await adminAuthService.me();
            adminAuthStorage.setAdmin(response.admin);
            set({
                admin: response.admin,
                isAuthenticated: true,
                loading: false,
            });
        } catch {
            get().clearAuth();
        }
    },
    logout: async () => {
        await get().clearAuth();
    },
}));

export default useAdminAuthStore;
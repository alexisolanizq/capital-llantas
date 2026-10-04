import adminAPI from "src/services/axiosAdmin"
import { adminAuthStorage } from "src/utils/localStorage"

const adminAuthService = {
    login: async (data) => {
        const response = await adminAPI.post("admin/login", data, {
            skipToast: true
        })

        return response.data
    },
    me: async () => {
        const response = await adminAPI.get("admin/me")
        return response.data
    },
    logout: async () => {
        const response = await adminAPI.post("admin/logout", {}, {
            headers: {
                'Authorization': `Bearer ${adminAuthStorage.getToken()}`
            }
        })
        return response.data
    }
}

export default adminAuthService
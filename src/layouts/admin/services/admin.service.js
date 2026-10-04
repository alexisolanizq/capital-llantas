import adminAPI from "src/services/axiosAdmin"

export const adminServices = {
    fetchSidebar() {
        return adminAPI.get('/admin/admin-sidebar')
    }
}
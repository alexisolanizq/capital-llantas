import adminAPI from "src/services/axiosAdmin"

const adminCategoryAttributeService = {
    categoryAttributes: async () => {
        return adminAPI.get("admin/category-attributes")
    }
}
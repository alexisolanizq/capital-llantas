import adminAPI from "src/services/axiosAdmin"

const adminCategoryService = {
    categoryList() {
        return adminAPI.get('admin/categories')
    },
    createCategory: async (body) => {
        const { data } = await adminAPI.post('admin/categories', body, { skipToast: true })
        return data
    },
    updateCategory: async ({ id, body }) => {
        const { data } = await adminAPI.put(`admin/categories/${id}`, body, { skipToast: true })
        return data
    }
}

export default adminCategoryService
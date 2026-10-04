import adminAPI from "src/services/axiosAdmin"

const adminProductService = {
    productList() {
        return adminAPI.get('admin/products')
    },
    createProduct: async (product) => {
        const { data } = adminAPI.post('admin/products', product, { skipToast: true })
        return data
    },
    productBulkUpload: async (formData) => {
        const { data } = await adminAPI.post("admin/products/import", formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        )

        return data
    }
}

export default adminProductService
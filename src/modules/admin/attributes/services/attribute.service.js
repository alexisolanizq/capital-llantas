import adminAPI from "src/services/axiosAdmin"

const adminAttributeService = {
    attributeList: async () => {
        const { data } = await adminAPI.get('admin/attributes')
        return data
    },
    attributeTypeList: async () => {
        const { data } = await adminAPI.get('admin/attributes/types')
        return data
    },
    createAttribute: async (body) => {
        const { data } = adminAPI.post('admin/attributes', body, { skipToast: true })
        return data
    },
    updateAttribute: async ({ id, body }) => {
        const { data } = adminAPI.put(`admin/attributes/${id}`, body, { skipToast: true })
        return data
    }
}

export default adminAttributeService
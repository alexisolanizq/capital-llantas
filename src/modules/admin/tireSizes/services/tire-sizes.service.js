import adminAPI from "src/services/axiosAdmin"

const adminTireSizeService = {
    tireSizes: async () => {
        return adminAPI.get("tire-sizes")
    },
    createTireSize: async (tireSize) => {
        const { data } = await adminAPI.post("tire-sizes", tireSize,)
        return data
    }
}

export default adminTireSizeService
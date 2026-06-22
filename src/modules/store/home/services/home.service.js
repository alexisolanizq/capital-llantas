import api from "src/services/axios"


export const homeService = {
    index() {
        return api.get('store/home')
    }
}
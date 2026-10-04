import api from "src/services/axios"


const userProfileService = {
    profile() {
        return api.get("/auth/profile");
    }
}

export default userProfileService
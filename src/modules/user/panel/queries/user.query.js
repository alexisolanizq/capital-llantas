import { useFetchQuery } from "src/shared/hooks/useQueries"
import userProfileService from "../services/user.service"


export const useUserProfileQuery = () => {
    return useFetchQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const { data } = await userProfileService.profile();
            return data
        }
    })
}
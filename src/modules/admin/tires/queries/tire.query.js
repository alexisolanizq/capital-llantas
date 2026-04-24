import { useFetchQuery } from "src/shared/hooks/useQueries"
import adminTireService from "../services/tire.service"

export const useTireListQuery = () => {
    return useFetchQuery({
        queryKey: ['tires'],
        queryFn: async () => {
            const { data } = await adminTireService.tireList()
            return data
        }
    })
}
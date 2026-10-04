import { useFetchQuery } from "src/shared/hooks/useQueries";
import adminTireSizeService from "../services/tire-sizes.service";

export const useTireSizeListQuery = () => useFetchQuery({
    queryKey: ["tire-sizes"],
    queryFn: async () => {
        const { data } = await adminTireSizeService.tireSizes()
        return data
    }
})
import { useFetchQuery, useMutationQuery } from "src/shared/hooks/useQueries"
import adminTireService from "../services/tire.service"

export const useTireListQuery = () => {
    return useFetchQuery({
        queryKey: ["tires"],
        queryFn: async () => {
            const { data } = await adminTireService.tireList()
            return data
        }
    })
}

export const useTireBulkUploadMutation = () => {
    return useMutationQuery({
        mutationFn: adminTireService.tireBulkUpload,
        invalidateKeys: ["tires"],
        successMessage: 'Modelos agregados correctamente'
    })
}

export const useCreateTireMutation = () => useMutationQuery({
    mutationFn: adminTireService.createTire,
    invalidateKeys: ["tires"],
    successMessage: "Registro realizado correctamente"
})
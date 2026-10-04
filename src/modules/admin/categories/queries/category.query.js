import { useFetchQuery, useMutationQuery } from "src/shared/hooks/useQueries";
import adminCategoryService from "../services/category.service";


export const useCategoryListQuery = () => useFetchQuery({
    queryKey: ["categories"],
    queryFn: async () => {
        const { data } = await adminCategoryService.categoryList()
        return data
    }
})

export const useCreateCategoryMutation = () => useMutationQuery({
    mutationFn: adminCategoryService.createCategory,
    invalidateKeys: ["categories"],
    successMessage: "Categoria agregada correctamente"
})

export const useUpdateCategoryMutation = () => useMutationQuery({
    mutationFn: adminCategoryService.updateCategory,
    invalidateKeys: ["categories"],
    successMessage: "Categoria actualizada correctamente"
})
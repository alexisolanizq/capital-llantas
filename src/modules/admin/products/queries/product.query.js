import { useFetchQuery, useMutationQuery } from "src/shared/hooks/useQueries";
import adminProductService from "../services/product.service";


export const useProductQuery = () => useFetchQuery({
    queryKey: ['products'],
    queryFn: async () => {
        const { data } = await adminProductService.productList()
        return data
    }
})

export const useCreateProductMutation = () => useMutationQuery({
    mutationFn: adminProductService.createProduct,
    invalidateKeys: ['products'],
    successMessage: "Producto agregado correctamente"
})

export const useProductBulkUploadMutation = () => useMutationQuery({
    mutationFn: adminProductService.productBulkUpload,
    invalidateKeys: ["products"],
    successMessage: "Productos importados de manera exitosa"
})
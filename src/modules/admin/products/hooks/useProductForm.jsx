import { useForm, useWatch } from "react-hook-form"
import { useCreateProductMutation } from "../queries/product.query"
import { useCategoryListQuery } from "../../categories/queries/category.query"
import { useBrandListQuery } from "../../brands/queries/brand.query"
import { useTireSizeListQuery } from "../../tireSizes/queries/tire-sizes.query"

const useProductForm = ({ row, isUpdate, onEnd }) => {

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: row ?? {}
    })

    const selectedCategoryId = useWatch({
        control,
        name: "category_id"
    })

    const { data: categories, isLoading: isLoadingCategories } = useCategoryListQuery()
    const { data: brands, isLoading: isLoadingBrands } = useBrandListQuery()
    const { data: tireSizes, isLoading: isLoadingTireSizes } = useTireSizeListQuery()

    const addProductMutation = useCreateProductMutation()

    const onSubmit = async (body) => {
        if (isUpdate) {
            return
        } else {
            await addProductMutation.mutateAsync(body)
        }

        onEnd?.()
    }

    return {
        errors,
        control,
        onSubmit,
        handleSubmit,
        categories,
        isLoadingCategories,
        brands,
        isLoadingBrands,
        tireSizes,
        isLoadingTireSizes
    }
}

export default useProductForm
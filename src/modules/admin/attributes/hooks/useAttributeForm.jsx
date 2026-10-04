import { useFieldArray, useForm } from 'react-hook-form'
import { useAttributeTypeListQuery, useCreateAttributeMutation, useUpdateAttributeMutation } from '../queries/attribute.query'
import { useCategoryListQuery } from '../../categories/queries/category.query'
import { useEffect } from 'react'

const useAttributeForm = ({ row = null, onEnd, isUpdate }) => {

    const normalizeCategories = (categories = []) => {
        return categories.map(category => ({
            category_id: category.pivot?.category_id ?? category.id,
            is_required: Boolean(category.pivot?.is_required),
        }))
    }

    const {
        reset,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: row ?? {
            name: "",
            code: "",
            type: "text",
            categories: [],
        }
    })

    useEffect(() => {
        if (!row) {
            reset({
                name: "",
                code: "",
                type: "text",
                categories: [],
            })
            return
        }
        reset({
            name: row.name ?? "",
            code: row.code ?? "",
            type: row.type ?? "text",
            categories: normalizeCategories(
                row.categories
            ),
        })
    }, [row, reset])

    const { data: categories, isLoading: isLoadingCategories } = useCategoryListQuery()


    const { data: types, isLoading: isLoadingTypes } = useAttributeTypeListQuery()
    const addAttributeMutation = useCreateAttributeMutation()
    const updateAttributeMutation = useUpdateAttributeMutation()

    const onSubmit = async (body) => {
        if (isUpdate) {
            await updateAttributeMutation.mutateAsync({ id: row?.id, body })
        } else {
            await addAttributeMutation.mutateAsync(body)
        }
        onEnd?.()
    }

    return {
        types,
        errors,
        control,
        onSubmit,
        categories,
        handleSubmit,
        normalizeCategories,
        isLoadingMutation: addAttributeMutation.isPending || updateAttributeMutation.isPending
    }
}

export default useAttributeForm
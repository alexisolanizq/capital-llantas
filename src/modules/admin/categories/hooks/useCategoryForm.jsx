import { useForm } from "react-hook-form"
import { useCreateCategoryMutation, useUpdateCategoryMutation } from "../queries/category.query"
import { objectToFormData } from "src/utils/formData"

const useCategoryForm = ({ row, isUpdate, onEnd }) => {

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        values: row ?? {}
    })

    const addCategoryMutation = useCreateCategoryMutation()
    const updateCategoryMutation = useUpdateCategoryMutation()

    const onSubmit = async (body) => {

        const payload = { ...body };

        if (typeof payload.default_image === 'string') {
            delete payload.default_image;
        }

        const data = objectToFormData(payload)
        if (isUpdate) {
            await updateCategoryMutation.mutateAsync({ id: row?.id, body: data })
        } else {
            await addCategoryMutation.mutateAsync(data)
        }

        onEnd?.()

    }

    return {
        errors,
        control,
        onSubmit,
        handleSubmit,
        isLoading: addCategoryMutation.isPending || updateCategoryMutation.isPending
    }
}

export default useCategoryForm
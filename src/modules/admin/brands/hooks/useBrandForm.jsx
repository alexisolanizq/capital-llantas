import { useForm } from "react-hook-form"
import { useCreateBrandMutation, useUpdateBrandMutation } from "../queries/brand.query"
import { objectToFormData } from "src/utils/formData"

const useBrandForm = ({ row, isUpdate, onEnd }) => {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        values: row ?? {}
    })

    const addBrandMutation = useCreateBrandMutation()
    const updateBrandMutation = useUpdateBrandMutation()

    const onSubmit = async (body) => {
        const payload = { ...body };

        console.log(payload);


        if (typeof payload.logo === 'string') {
            delete payload.logo;
        }

        if (isUpdate && payload.logo == null || payload.logo.length <= 0) {
            payload.remove_logo = true;
        }

        const data = objectToFormData(payload)
        if (isUpdate) {
            await updateBrandMutation.mutateAsync({ id: row?.id, body: data })
        } else {
            await addBrandMutation.mutateAsync(data)
        }
        onEnd?.()
    }

    return {
        errors,
        control,
        onSubmit,
        handleSubmit,
    }
}

export default useBrandForm
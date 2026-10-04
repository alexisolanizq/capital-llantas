import React from 'react'
import { useForm } from 'react-hook-form'
import { useProductBulkUploadMutation } from '../queries/product.query'
import { objectToFormData } from 'src/utils/formData'

const useProductBulkUploadForm = ({ onEnd }) => {

    const productBulkUploadMutation = useProductBulkUploadMutation()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (body) => {
        const payload = { ...body }

        if (typeof payload.file === 'string') {
            delete payload.file;
        }

        const data = objectToFormData(payload)

        await productBulkUploadMutation.mutateAsync(data)

        onEnd?.()
    }

    return {
        errors,
        control,
        onSubmit,
        handleSubmit,
    }
}

export default useProductBulkUploadForm
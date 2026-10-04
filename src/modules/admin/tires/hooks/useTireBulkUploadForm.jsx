import { useForm } from 'react-hook-form'
import { useTireStore } from 'src/features/inventory/tires/store/useTireStore'
import { objectToFormData } from 'src/utils/formData'
import { useTireBulkUploadMutation } from '../queries/tire.query'

const useTireBulkUploadForm = ({ onEnd }) => {

    const importTireBulkUploadMutation = useTireBulkUploadMutation()

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

        await importTireBulkUploadMutation.mutateAsync(data)

        onEnd?.()
    }

    return {
        errors,
        control,
        onSubmit,
        handleSubmit,
    }
}

export default useTireBulkUploadForm
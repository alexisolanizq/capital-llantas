import { useForm } from 'react-hook-form'
import { useTireStore } from 'src/features/inventory/tires/store/useTireStore'

const useTireBulkUploadForm = () => {

    const importTires = useTireStore((state) => state.importTires)

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data.file, data, data.file[0]);

        const formData = new FormData()

        formData.append('file', data.file[0])

        const response = await importTires(formData)

        // console.log(response)
    }

    return {
        errors,
        control,
        onSubmit,
        handleSubmit,
    }
}

export default useTireBulkUploadForm
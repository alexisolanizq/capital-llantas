import { useForm } from "react-hook-form"

const useBrandForm = ({ row, isUpdate, onEnd }) => {

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: row ?? {}
    })

    const onSubmit = () => {

        if (isUpdate) {
            return
        } else {

        }

        onEnd?.()
    }

    return {
        errors,
        control,
        onSubmit,
        handleSubmit,
        // isLoadingBrands,
    }
}

export default useBrandForm
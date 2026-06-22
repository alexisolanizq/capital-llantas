import { useForm } from 'react-hook-form'
import { useBrandListQuery } from '../../brands/queries/brand.query'

const useTireForm = ({ row, isUpdate, onEnd }) => {

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: row ?? {}
    })

    const {
        data: brands,
        isLoading: isLoadingBrands
    } = useBrandListQuery()

    const onSubmit = () => {

        if (isUpdate) {
            return
        } else {

        }

        onEnd?.()
    }

    return {
        errors,
        brands,
        control,
        onSubmit,
        handleSubmit,
    }
}

export default useTireForm
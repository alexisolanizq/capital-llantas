import { useForm } from 'react-hook-form'
import { useBrandListQuery } from '../../brands/queries/brand.query'
import { useCreateTireMutation } from '../queries/tire.query'
import { useTireSizeListQuery } from '../../tireSizes/queries/tire-sizes.query'

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

    const { data: tireSizes, isLoading: isLoadingTireSizes } = useTireSizeListQuery()

    const addTireMutation = useCreateTireMutation()

    const onSubmit = async (body) => {
        if (isUpdate) {
            return
        } else {
            await addTireMutation.mutateAsync(body)
        }

        onEnd?.()
    }

    return {
        errors,
        brands,
        control,
        onSubmit,
        tireSizes,
        handleSubmit,
    }
}

export default useTireForm
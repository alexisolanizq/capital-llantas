import { useForm } from 'react-hook-form'
import { useAdminLoginMutation } from '../queries/admin.login.query'

const useAdminLogin = () => {

    const { control, handleSubmit, formState: { errors } } = useForm()

    const adminLoginMutation = useAdminLoginMutation()

    const onSubmit = async (data) => {
        await adminLoginMutation.mutateAsync(data)
    }

    return {
        errors,
        control,
        onSubmit,
        handleSubmit
    }
}

export default useAdminLogin
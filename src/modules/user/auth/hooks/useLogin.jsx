import { useLoginQuery } from '../queries/auth.query'
import { useForm } from 'react-hook-form'

const useLogin = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const loginQuery = useLoginQuery()

    const loginGoogle = () => {
        window.location.href = `${import.meta.env.VITE_API_URL}/auth/google?origin=${window.location.origin}`
    }

    const onSubmit = async (data) => {
        return loginQuery.mutateAsync(data)
    }

    return {
        errors,
        control,
        onSubmit,
        sLoading: loginQuery.isPending,
        loginGoogle,
        handleSubmit,

    }
}

export default useLogin
import React from 'react'
import { useLoginQuery } from '../queries/auth.query'
import { useForm } from 'react-hook-form'

const useLogin = () => {

    const { control, handleSubmit, formState: { errors } } = useForm();
    const loginQuery = useLoginQuery()

    const loginGoogle = () => {
        window.location.href = `${import.meta.env.VITE_API_URL}/auth/google?origin=${window.location.origin}`
    }

    const loginApple = () => {
        window.location.href = `${import.meta.env.VITE_API_URL}/auth/apple`
    }

    const onSubmit = async (data) => {
        loginQuery.mutateAsync(data)
    }

    const isLoading = loginQuery.isPending

    return {
        errors,
        control,
        onSubmit,
        isLoading,
        loginGoogle,
        handleSubmit,

    }
}

export default useLogin
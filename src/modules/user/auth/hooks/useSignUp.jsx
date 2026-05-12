import React from 'react'
import { useForm } from 'react-hook-form'
import { useSignUpQuery } from '../queries/auth.query'

const useSignUp = () => {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const signUpQuery = useSignUpQuery()

    const onSubmit = (data) => {
        signUpQuery.mutateAsync(data)
    }

    return {
        errors,
        control,
        onSubmit,
        handleSubmit
    }
}

export default useSignUp
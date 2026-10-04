import {
    useMutation,
    useQuery,
    useQueryClient
} from "@tanstack/react-query"

import {
    showSuccess,
    showError
} from "src/utils/toast"


export const useFetchQuery = ({
    queryKey,
    queryFn,
    enabled = true,
    options = {}
}) => {

    return useQuery({
        enabled,
        queryKey,
        queryFn,

        staleTime: 1000 * 60 * 5,

        retry: 1,
        refetchOnWindowFocus: false,

        ...options
    })
}


export const useMutationQuery = ({
    mutationFn,
    invalidateKeys = [],
    onSuccess,
    onError,

    successMessage,
    showSuccessToast = true,
    showErrorToast = true,

    options = {}
}) => {

    const queryClient = useQueryClient()

    return useMutation({

        mutationFn,

        onSuccess: (data, variables, context) => {

            invalidateKeys.forEach(key => {

                queryClient.invalidateQueries({
                    queryKey: Array.isArray(key)
                        ? key
                        : [key]
                })
            })

            if (
                showSuccessToast &&
                successMessage
            ) {

                const message =
                    typeof successMessage === "function"
                        ? successMessage(
                            data,
                            variables
                        )
                        : successMessage

                showSuccess(message)
            }

            if (onSuccess) {
                onSuccess(
                    data,
                    variables,
                    context
                )
            }
        },

        onError: (
            error,
            variables,
            context
        ) => {

            if (showErrorToast) {
                showError(error)
            }

            if (onError) {
                onError(
                    error,
                    variables,
                    context
                )
            }
        },

        ...options
    })
}
import {
    useEffect
} from "react"

import {
    useQueryClient
} from "@tanstack/react-query"

import {
    useFetchQuery
} from "src/shared/hooks/useQueries"

import paymentService from "../services/payment.service"


export const useVerifyPaymentQuery = (
    paymentID,
    externalReference,
    isEnabled
) => {
    const queryClient = useQueryClient()

    const query = useFetchQuery({
        queryKey: ["verifyPayment", paymentID, externalReference],

        queryFn: async () => {
            const { data } =
                await paymentService.verify({
                    payment_id: paymentID,
                    external_reference: externalReference,
                })
            return data
        },
        enabled: Boolean(
            isEnabled &&
            paymentID &&
            externalReference
        ),
        options: {
            retry: false,
            refetchOnWindowFocus: false,
        }
    })

    useEffect(() => {
        if (query.data?.order_status === "paid") {
            queryClient.invalidateQueries({
                queryKey: ["cart"],
            })
        }
    }, [query.data?.order_status, queryClient])

    return query
}
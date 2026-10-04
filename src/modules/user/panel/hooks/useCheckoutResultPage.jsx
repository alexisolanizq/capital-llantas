import { useNavigate, useSearchParams } from "react-router-dom"
import { useVerifyPaymentQuery } from "../queries/payment.query"


const useCheckoutResultPage = () => {

    const [searchParam] = useSearchParams()
    const navigate = useNavigate()

    const paymentID = searchParam.get("payment_id")
    const externalReference = searchParam.get("external_reference")

    const isUrlValid = Boolean(paymentID && externalReference)

    const { data, isLoading, isError, error } = useVerifyPaymentQuery(paymentID, externalReference, isUrlValid)

    const actions = {
        goToOrders: () => navigate('/auth/ordenes'),
        goToStore: () => navigate('/catalogo'),
        goToCheckout: () => navigate('/checkout'),
    }

    return {
        isUrlValid,
        isLoading,
        isError,
        data,
        error,
        actions
    }
}

export default useCheckoutResultPage
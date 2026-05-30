import { useCartQuery } from "../../cart/queries/cart.query"
import { usePaymentMutation } from "../queries/payment.query"

const useCheckoutPayment = () => {

    const { data: cart, isLoading: isCartLoading } = useCartQuery()

    const mutation = usePaymentMutation()

    const handleCheckout = async (uuid) => {

        try {
            const response = await mutation.mutateAsync(uuid)

            window.location.href = response.init_point

        } catch (error) {
            console.error(error);
        }

    }

    return {
        handleCheckout,
        isLoading: mutation.isPending,
        cart,
        isCartLoading
    }
}

export default useCheckoutPayment
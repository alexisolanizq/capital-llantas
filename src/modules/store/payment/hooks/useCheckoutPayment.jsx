import useShippingStore from "src/store/shippingStore"
import { useCartQuery } from "../../cart/queries/cart.query"
import { usePaymentMutation } from "../queries/payment.query"

const useCheckoutPayment = () => {

    const { data: cart, isLoading: isCartLoading } = useCartQuery()
    const { shipping } = useShippingStore()

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
        cart,
        shipping,
        isCartLoading,
        handleCheckout,
        isLoading: mutation.isPending,
    }
}

export default useCheckoutPayment
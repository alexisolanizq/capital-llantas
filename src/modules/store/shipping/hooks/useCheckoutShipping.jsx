import { useForm } from "react-hook-form"
import { useCheckoutQuery } from "../../payment/queries/payment.query"
import { useNavigate } from "react-router-dom"
import { useCartQuery } from "../../cart/queries/cart.query"
import useShippingStore from "src/store/shippingStore"
import { useEffect } from "react"

const useCheckoutShipping = () => {

    const navigate = useNavigate()

    const { data: cart, isLoading: isCartLoading } = useCartQuery()

    const createOrderMutation = useCheckoutQuery()

    const {
        shipping,
        setShipping
    } = useShippingStore()

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: shipping
    })

    useEffect(() => {
        reset(shipping)
    }, [])

    const handleCheckout = async (values) => {

        setShipping(values)

        const response = await createOrderMutation.mutateAsync(values)

        navigate(`/checkout/payment/${response.order.uuid}`)
    }

    return {
        control,
        handleSubmit,
        handleCheckout,
        cart,
        isCartLoading,
        isLoading: createOrderMutation.isPending
    }
}

export default useCheckoutShipping
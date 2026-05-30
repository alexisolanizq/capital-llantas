import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useShippingStore from "src/store/shippingStore";

const useMercadoPagoSuccessPayment = () => {

    const [params] = useSearchParams()

    const orderId = params.get("external_reference");

    const {
        clearShipping
    } = useShippingStore()

    useEffect(() => {
        clearShipping()
    }, [])

    return {
        orderId
    }
}

export default useMercadoPagoSuccessPayment
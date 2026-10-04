import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useShippingStore from "src/store/shippingStore";

const useMercadoPagoSuccessPayment = () => {
    const [searchParams] = useSearchParams()

    const orderId = searchParams.get("external_reference");
    const paymentId = searchParams.get('payment_id')
    const status = searchParams.get('status')
    const externalReference = searchParams.get('external_reference')
    const merchantOrderId = searchParams.get('merchant_order_id')

    console.log(orderId, paymentId, status, externalReference, merchantOrderId);


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
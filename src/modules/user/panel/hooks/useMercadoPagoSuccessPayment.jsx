import { useSearchParams } from "react-router-dom";

const useMercadoPagoSuccessPayment = () => {

    const [params] = useSearchParams()

    const orderId = params.get("external_reference");

    return {
        orderId
    }
}

export default useMercadoPagoSuccessPayment
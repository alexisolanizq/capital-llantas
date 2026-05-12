import Section from "src/components/store-ui/Section"
import useMercadoPagoSuccessPayment from "../hooks/useMercadoPagoSuccessPayment"
import { Link } from "react-router-dom"
import Button from "src/shared/components/ui/Button"

const MercadoPagoSuccessPayment = () => {

    const { orderId } = useMercadoPagoSuccessPayment()

    return (
        <Section densityX="large" densityY="large">
            <div className="rounded-full bg-success/20 w-fit p-4 mx-auto mb-4">
                <i className="ri-check-line text-5xl text-success" />
            </div>
            <p className="text-center text-3xl font-black mb-4">¡Gracias por tu compra!</p>
            <p className="text-center text-muted mb-4">Tu pedido ha sido procesado exitosamente.</p>
            <p className="text-center text-muted mb-4">Número de pedido: <span className="font-semibold uppercase">{orderId ?? ''}</span></p>
            <div className="flex gap-x-6">
                <Button variant="outline" link="/catalogo">Seguir comprando</Button>
                <Button link="/auth/panel">Mis Pedidos</Button>
            </div>
        </Section>
    )
}

export default MercadoPagoSuccessPayment
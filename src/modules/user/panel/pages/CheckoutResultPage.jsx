import Section from "src/components/store-ui/Section"
import { Card } from "src/shared/components/ui/Card"
import useCheckoutResultPage from "../hooks/useCheckoutResultPage"
import Button from "src/shared/components/ui/Button"
import Flex from "src/shared/components/ui/Flex"
import { formatPrice } from "src/utils/format"

const CheckoutResultPage = () => {

    const {
        actions, data, error, isError, isLoading, isUrlValid
    } = useCheckoutResultPage()

    console.log(data);


    if (!isUrlValid) {
        return (
            <Section densityY="large">
                <div className="max-w-xl mx-auto text-center">
                    <h1 className="text-2xl font-bold">Información no disponible</h1>
                    <p className="text-muted mt-2">No pudimos encontrar los detalles de tu pedido.</p>
                    <Button className="mt-4" onClick={actions.goToStore}>Volver a la tienda</Button>
                </div>
            </Section>
        )
    }

    return (
        <Section densityX="large" densityY="compact">
            <div className="max-w-2xl mx-auto mt-10">
                <div>
                    <div className="p-8 text-center space-y-6">

                        {isLoading && (
                            <Flex direction="col" items="center" gap="md" className="py-10">
                                <i className="ri-loader-4-line text-4xl text-accent animate-spin" />
                                <p className="text-lg font-semibold animate-pulse">Verificando estado del pago...</p>
                                <p className="text-sm text-muted">Comunicándonos con Mercado Pago</p>
                            </Flex>
                        )}
                        {data?.payment_status === 'approved' && !isLoading && (
                            // <Flex direction="col" items="center" gap="md" className="py-5">
                            //     <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mb-2">
                            //         <i className="ri-check-line text-4xl text-success" />
                            //     </div>
                            //     <h1 className="text-2xl font-bold text-slate-800">¡Pago Confirmado!</h1>
                            //     <p className="text-muted mb-4">{data.message}</p>

                            //     <Flex fullWidth justify="between">
                            //         <p className="text-muted">ID Mercado Pago:</p>
                            //         <p className="font-semibold">#{data.mercado_pago_id}</p>
                            //     </Flex>
                            //     <Flex fullWidth justify="between">
                            //         <p className="text-muted">Estatus de pago:</p>
                            //         <p className="font-semibold">{data.payment_status}</p>
                            //     </Flex>
                            //     <Flex fullWidth justify="between">
                            //         <p className="text-muted">Orden número:</p>
                            //         <p className="font-semibold truncate">{data.order_number}</p>
                            //     </Flex>
                            //     <Flex fullWidth justify="between">
                            //         <p className="text-muted">Total cobrado:</p>
                            //         <p className="font-semibold truncate">
                            //             {
                            //                 formatPrice(data.amount)
                            //             }
                            //         </p>
                            //     </Flex>

                            //     <div className="mt-6 w-full">
                            //         <Button fullWidth onClick={actions.goToOrders}>
                            //             Ver mis pedidos
                            //         </Button>
                            //     </div>
                            // </Flex>
                            <div className="max-w-2xl w-full">
                                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                                    <div className="bg-linear-to-r from-emerald-500 to-emerald-600 px-8 py-10 text-center text-white">
                                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-2 mx-auto">
                                            <i className="ri-check-line text-4xl text-white" />
                                        </div>
                                        <h1 className="text-2xl font-black text-surface">¡Pago Confirmado!</h1>
                                        <p className="text-surface">{data?.message}</p>
                                    </div>
                                    <div className="px-8 py-10 space-y-3">
                                        <Flex fullWidth justify="between" className="border-b border-sunken">
                                            <p className="text-muted">ID Mercado Pago:</p>
                                            <p className="font-semibold">#{data?.mercado_pago_id}</p>
                                        </Flex>
                                        <Flex fullWidth justify="between" className="border-b border-sunken">
                                            <p className="text-muted">Estatus de pago:</p>
                                            <p className="font-semibold">{data?.payment_status}</p>
                                        </Flex>
                                        <Flex fullWidth justify="between" className="border-b border-sunken">
                                            <p className="text-muted">Orden número:</p>
                                            <p className="font-semibold truncate">{data?.order_number}</p>
                                        </Flex>
                                        <Flex fullWidth justify="between" className="border-b border-sunken">
                                            <p className="text-muted">Total cobrado:</p>
                                            <p className="font-semibold truncate">
                                                {
                                                    formatPrice(data?.amount)
                                                }
                                            </p>
                                        </Flex>
                                    </div>
                                    <div className="px-8 pb-8 flex gap-3 flex-wrap">
                                        <Button fullWidth onClick={actions.goToOrders}>
                                            Ver mis pedidos
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {
                            data?.payment_status === 'pending' && !isLoading && (
                                <Flex direction="col" items="center" gap="md" className="py-5">
                                    <div className="w-16 h-16 rounded-full bg-warning/20 flex items-center justify-center mb-2">
                                        <i className="ri-time-line text-4xl text-warning" />
                                    </div>
                                    <h1 className="text-2xl font-bold text-slate-800">Pago Pendiente</h1>
                                    <p className="text-muted">{data.message}</p>
                                    <p className="text-sm text-slate-500">
                                        Puede tardar hasta 1 día hábil en reflejarse dependiendo del método de pago.
                                    </p>
                                    <div className="mt-6 w-full">
                                        <Button variant="outline" fullWidth onClick={actions.goToOrders}>
                                            Ir a mis pedidos
                                        </Button>
                                    </div>
                                </Flex>
                            )
                        }

                        {(data?.payment_status === 'rejected' || isError) && !isLoading && (
                            <Flex direction="col" items="center" gap="md" className="py-5">
                                <div className="w-16 h-16 rounded-full bg-danger/20 flex items-center justify-center mb-2">
                                    <i className="ri-error-warning-line text-4xl text-danger" />
                                </div>
                                <h1 className="text-2xl font-bold text-slate-800">El pago no fue procesado</h1>
                                <p className="text-muted">
                                    {data?.message || 'Ocurrió un error al verificar la transacción.'}
                                </p>
                                <div className="mt-6 w-full flex gap-3">
                                    <Button variant="outline" fullWidth onClick={actions.goToCheckout}>
                                        Intentar de nuevo
                                    </Button>
                                </div>
                            </Flex>
                        )}

                    </div>
                </div>
            </div>
        </Section>
    )
}

export default CheckoutResultPage
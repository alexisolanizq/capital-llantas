import Button from 'src/shared/components/ui/Button'
import Flex from 'src/shared/components/ui/Flex'
import useUserOrders from '../hooks/useUserOrders'
import { dateFormat, formatPrice, formatString } from 'src/utils/format'
import Badge from 'src/shared/components/ui/Badge'
import { ORDER_ICON_STATUS } from 'src/utils/constant'
import tire_webp from '/public/barum-bravuris-5.webp'

const UserOrders = () => {

    const { orders } = useUserOrders()

    return (
        <>
            <Flex direction="row" justify="between" className="mb-6">
                <h3 className="font-bold text-2xl">Mis Pedidos</h3>
                <Button leftIcon='loop-right' variant='flat'>
                    Actualizar
                </Button>
            </Flex>
            <div className="space-y-6">
                {
                    orders?.map((order) => (
                        <div key={order.id} className="bg-inverse rounded-lg border border-line overflow-hidden shadow-sm">
                            <div className="bg-sunken px-6 py-4 border-b border-line flex flex-wrap items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm text-muted">
                                        Pedido: {order?.order_number}
                                    </p>
                                    <p className="text-sm text-muted">
                                        {
                                            dateFormat(order?.created_at)
                                        }
                                    </p>
                                </div>
                                <Badge leftIcon={ORDER_ICON_STATUS[order?.status].icon} variant={order?.status}>
                                    {order?.status}
                                </Badge>
                            </div>
                            <div className="p-6">
                                <div className="mt-6 space-y-4">
                                    {
                                        order?.items?.map((item) => (
                                            <Flex key={item?.id} gap="xl" items='center'>
                                                <img src={tire_webp} className="w-16 h-16 rounded-lg object-contain" />
                                                <div className="flex-1">
                                                    <p className="font-medium">
                                                        {
                                                            formatString(item?.tire?.size?.label)
                                                        }
                                                    </p>
                                                    <p className="text-sm text-muted">
                                                        {
                                                            `${item?.tire?.brand?.name} - Cantidad: ${item?.quantity}`
                                                        }
                                                    </p>
                                                </div>
                                                <p className="font-medium">
                                                    {
                                                        formatPrice(item?.price * item?.quantity)
                                                    }
                                                </p>
                                            </Flex>
                                        ))
                                    }
                                </div>
                                <div className="mt-6 pt-6 border-t border-line grid sm:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <i className="ri-truck-line text-secondary text-xl shrink-0" />
                                        <div>
                                            <p className="text-sm font-medium">
                                                Número de rastreo:
                                            </p>
                                            <p className="text-sm text-muted">
                                                {order?.shipping || 'Pendiente de envío'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <i className="ri-map-pin-line text-secondary text-xl shrink-0" />
                                        <div>
                                            <p className="text-sm font-medium">
                                                Dirección de envío:
                                            </p>
                                            <p className="text-sm text-muted">
                                                {order?.shipping_address || 'Pendiente de envío'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-line flex items-center justify-between">
                                    <p className="text-sm text-muted">
                                        {
                                            `ID Pago: MP-${order?.payments?.[0]?.payment_id}`
                                        }
                                    </p>
                                    <div className="text-right">
                                        <p className="text-sm text-muted">Total:</p>
                                        <p className="font-bold text-2xl text-primary">
                                            {
                                                formatPrice(order?.total_amount)
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default UserOrders
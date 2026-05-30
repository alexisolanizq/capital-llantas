import React from 'react'
import Section from 'src/components/store-ui/Section'
import Button from 'src/shared/components/ui/Button'
import Flex from 'src/shared/components/ui/Flex'
import useUserOrders from '../hooks/useUserOrders'
import { dateFormat, formatPrice, formatString } from 'src/utils/format'
import Badge from 'src/shared/components/ui/Badge'
import { ORDER_ICON_STATUS } from 'src/utils/constant'
import tire_webp from '/public/barum-bravuris-5.webp'
import Avatar from 'src/shared/components/ui/Avatar'

const UserOrders = () => {

    const { user, orders, location } = useUserOrders()

    return (
        <Section densityY='compact'>
            <div className="grid lg:grid-cols-4 gap-8 items-start">
                <div className="lg:col-span-1">
                    <div className="bg-inverse shadow-sm rounded-lg border border-line p-4 overflow-hidden">
                        <div className="text-center mb-6 pb-6 border-b border-line">
                            <Avatar user={user} size='xl' />
                            <h2 className="text-lg text-center font-semibold">
                                {user?.name}
                            </h2>
                            <p className="text-sm text-muted truncate w-3/4 mx-auto">
                                {user?.email}
                            </p>
                        </div>
                        <nav className="space-y-2">
                            <Button link="/auth/perfil" leftIcon="user" variant="ghost" className="w-full text-left">
                                Mi cuenta
                            </Button>
                            <Button link="/auth/ordenes" leftIcon="box-3" variant="ghost" className="w-full text-left">
                                Mis Pedidos
                            </Button>
                            <Button variant="danger" className="w-full text-left">
                                Cerrar sesión
                            </Button>
                        </nav>
                    </div>
                </div>
                <div className="lg:col-span-3">
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
                </div>
            </div>
        </Section>
    )
}

export default UserOrders
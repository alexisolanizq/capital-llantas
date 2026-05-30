import React from 'react'
import Section from 'src/components/store-ui/Section'
import Form from 'src/shared/components/form/Form'
import TextFieldController from 'src/shared/components/form/TextFieldController'
import useCheckoutShipping from '../hooks/useCheckoutShipping'
import Flex from 'src/shared/components/ui/Flex'
import tire_webp from '/public/barum-bravuris-5.webp'
import { formatPrice, formatString } from 'src/utils/format'
import Button from 'src/shared/components/ui/Button'

const CheckoutShippingPage = () => {

    const { control, handleSubmit, handleCheckout, cart } = useCheckoutShipping()

    return (
        <Section densityY='compact'>
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-inverse rounded-lg border border-line p-6 shadow-sm">
                        <h2 className='font-semibold text-xl mb-6'>
                            Información de Envío
                        </h2>
                        <Form onSubmit={handleSubmit(handleCheckout)}>
                            <Flex>
                                <TextFieldController className='mb-4' control={control} name="customer_name" label="Nombre completo" placeholder='Nombre' />
                                <TextFieldController className='mb-4' control={control} name="email" type='email' label="Correo" placeholder='Correo' />
                            </Flex>
                            <TextFieldController className='mb-4' control={control} name="customer_phone" label="Teléfono" type='phone' placeholder='Número de contacto' />
                            <TextFieldController className='mb-4' control={control} name="shipping_address" label="Dirección" placeholder='Dirección' />
                            <TextFieldController className='mb-4' control={control} name="shipping_neighborhood" label="Colonia" placeholder='Colonia' />
                            <Flex>
                                <TextFieldController className='mb-4' control={control} name="shipping_postal_code" label="Código postal" placeholder='Código postal' />
                                <TextFieldController className='mb-4' control={control} name="shipping_city" label="Ciudad" placeholder='Ciudad' />
                                <TextFieldController className='mb-4' control={control} name="shipping_state" label="Estado" placeholder='Estado' />
                            </Flex>
                            <TextFieldController className='mb-4' control={control} name="shipping_references" label="Referencias" placeholder='Referencias' />
                            <Button type='submit' variant='secondary' fullWidth>Continuar con el pago</Button>
                        </Form>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <div className="bg-inverse rounded-lg border border-line p-6 shadow-sm">
                        <h2 className='font-semibold text-xl mb-6'>
                            Resumen del Pedido
                        </h2>
                        <div className="space-y-4 mb-6">
                            {
                                cart?.items.map((item) => (
                                    <div key={item?.id} className="flex gap-3">
                                        <img src={tire_webp} className='w-16 h-16 object-contain rounded' alt="tire" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium truncate">
                                                {
                                                    formatString(
                                                        item?.tire?.size?.label
                                                    )
                                                }
                                            </p>
                                            <p className="text-xs text-muted">
                                                {item?.tire?.model_name}
                                            </p>
                                            <p className="text-sm">
                                                {
                                                    `${item?.quantity} x ${item?.tire?.price}`
                                                }
                                            </p>
                                        </div>
                                    </div>
                                )
                                )
                            }
                        </div>
                        <div className="border-t border-line pt-4 space-y-2">
                            <Flex justify='between' className="text-sm">
                                <span className='text-muted'>Subtotal</span>
                                <span>
                                    {
                                        formatPrice(
                                            cart?.subtotal
                                        )
                                    }
                                </span>
                            </Flex>
                            <Flex justify='between' className="text-sm">
                                <span className='text-muted'>Envío</span>
                                <span>
                                    {
                                        cart?.shipping === 0 || cart?.shipping === "0.00" ? 'Gratis' : cart?.shipping
                                    }
                                </span>
                            </Flex>
                            <div className="flex justify-between font-semibold text-lg pt-2 border-t border-line">
                                <span>
                                    Total
                                </span>
                                <span>
                                    {
                                        formatPrice(
                                            cart?.total
                                        )
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default CheckoutShippingPage
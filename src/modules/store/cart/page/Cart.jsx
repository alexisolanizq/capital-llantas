import React from 'react'
import Section from 'src/components/store-ui/Section'
import TextField from 'src/shared/components/form/TextField'
import Button from 'src/shared/components/ui/Button'
import Flex from 'src/shared/components/ui/Flex'
import CartItem from '../components/CartItem'
import useCart from '../hooks/useCart'
import { formatPrice } from 'src/utils/format'
import EmptyCart from '../components/EmptyCart'
import useCheckoutPayment from '../../payment/hooks/useCheckoutPayment'

const Cart = () => {

  const { cart, removeItem } = useCart()
  const { handleCheckout, isLoading } = useCheckoutPayment()

  return (
    <Section>

      {
        cart?.items?.length <= 0 ? (
          <EmptyCart />
        ) : (
          <>
            <h2 className='text-2xl font-semibold mb-4'>Carrito de compras</h2>
            <div className="grid lg:grid-cols-3 gap-8 relative">
              <div className='lg:col-span-2 space-y-4 order-2 lg:order-1'>
                {cart?.items?.length > 0 && cart.items.map((item) => (
                  <CartItem key={item.id} item={item} onDelete={removeItem} />
                ))}
              </div>
              <div className='lg:col-span-1 h-fit shadow-sm rounded-xl bg-surface p-4 space-y-4 order-1 lg:order-2'>
                <p>Resumen del pedido</p>
                <Flex justify='between'>
                  <TextField name='coupon' placeholder='Código de descuento' withIcon={false} />
                  <Button>
                    <i className='ri-price-tag-3-line' />
                  </Button>
                </Flex>
                <Flex justify='between'>
                  <p>
                    Subtotal
                  </p>
                  <p>
                    {formatPrice(cart?.subtotal)}
                  </p>
                </Flex>
                <Flex justify='between'>
                  <p>
                    Envío
                  </p>
                  <p>
                    Gratis
                  </p>
                </Flex>
                <Flex justify='between'>
                  <p>
                    Total
                  </p>
                  <p>
                    {formatPrice(cart?.total)}
                  </p>
                </Flex>
                <Button className='w-full' onClick={handleCheckout}>
                  Proceder al pago
                </Button>
              </div>
            </div>
          </>
        )
      }

    </Section>
  )
}

export default Cart
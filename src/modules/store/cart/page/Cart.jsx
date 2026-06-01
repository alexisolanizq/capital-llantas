import React from 'react'
import Section from 'src/components/store-ui/Section'
import TextField from 'src/shared/components/form/TextField'
import Button from 'src/shared/components/ui/Button'
import Flex from 'src/shared/components/ui/Flex'
import CartItem from '../components/CartItem'
import useCart from '../hooks/useCart'
import { formatPrice } from 'src/utils/format'
import EmptyCart from '../components/EmptyCart'
import SkeletonGroup from 'src/shared/components/ui/SkeletonGroup'
import CartItemSkeleton from 'src/shared/components/ui/CardItemSkeleton'

const Cart = () => {

  const { cart, removeItem, handleContinue, isLoading, updateItem } = useCart()


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
                {
                  isLoading && (
                    <SkeletonGroup count={2}>
                      <CartItemSkeleton />
                    </SkeletonGroup>
                  )
                }
                {
                  !isLoading && cart?.items?.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onDelete={removeItem}
                      onUpdate={updateItem}
                    />
                  ))
                }
              </div>
              <div className='lg:col-span-1 h-fit shadow-sm rounded-xl bg-surface p-4 space-y-4 order-1 lg:order-2'>
                <p>Resumen del pedido</p>
                <Flex justify='between'>
                  <TextField name='coupon' placeholder='Código de descuento' />
                  <Button
                    icon="price-tag-3"
                    variant="secondary"
                    size="lg"
                    className="h-11 w-11 lg:h-11 lg:w-11 rounded-xl"
                    aria-label="Aplicar cupón"
                  />
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
                <Button fullWidth variant='secondary' onClick={handleContinue}>
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
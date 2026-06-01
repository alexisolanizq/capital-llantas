import tire_webp from '/public/barum-bravuris-5.webp'
import Section from 'src/components/store-ui/Section'
import { Card } from 'src/shared/components/ui/Card'
import Flex from 'src/shared/components/ui/Flex'
import Grid from 'src/shared/components/ui/Grid'
import GridItem from 'src/shared/components/ui/GridItem'
import useCheckoutPayment from '../hooks/useCheckoutPayment'
import { formatPrice, formatString } from 'src/utils/format'
import Badge from 'src/shared/components/ui/Badge'
import Button from 'src/shared/components/ui/Button'
import { useParams } from 'react-router-dom'

const CheckoutPaymentPage = () => {

  const { uuid } = useParams()
  const { cart, isCartLoading, handleCheckout, isLoading, shipping } = useCheckoutPayment()

  return (
    <Section
      isLoading={isCartLoading}
      densityY={{ base: "xsmall", lg: "large" }}
      densityX={{ base: "xsmall", lg: "normal" }}
    >
      <Grid cols={{ base: 1, lg: 5 }} gap={{ base: "lg", lg: "2xl" }}>
        <GridItem colSpan={{ lg: 3 }} className="space-y-5">
          <Card>
            <Card.Header title="Completa tu pago de forma segura" />
            <Card.Header description="Al continuar, serás redirigido al entorno protegido de Mercado Pago para elegir cómo quieres pagar." />
            <Card.Content>
              <div className='relative rounded-2xl p-5 border border-line bg-primary/5 mt-4'>
                <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Total a pagar</p>
                <p className='text-4xl font-black tabular-nums leading-none text-accent mb-2'>{formatPrice(cart?.total)} <span className='text-muted text-2xl font-semibold'>MXN</span> </p>
                <p className='text-muted font-light mb-1 text-sm'>Hasta 12 meses sin intereses con tarjetas participantes*</p>
              </div>
              <Button fullWidth leftIcon="lock" loading={isLoading} onClick={() => handleCheckout(uuid)}>Pagar con Mercado Pago</Button>
            </Card.Content>
          </Card>
          <Card>
            <Card.Header title="¿Qué pasa después de pagar?" />
            <Card.Content>
              <ol className="space-y-3 text-sm text-slate-600">
                <Flex gap='sm'>
                  <Badge variant='enviado'>1</Badge>
                  <p>
                    Recibirás un correo de confirmación con tu número de pedido y detalles.
                  </p>
                </Flex>
                <Flex gap='sm'>
                  <Badge variant='enviado'>2</Badge>
                  <p>
                    Procesaremos tu pedido y te avisaremos cuando salga del almacén.
                  </p>
                </Flex>
                <Flex gap='sm'>
                  <Badge variant='enviado'>3</Badge>
                  <p>
                    Podrás seguir el envío desde tu perfil con el número de tracking.
                  </p>
                </Flex>
              </ol>
            </Card.Content>
          </Card>
        </GridItem>
        <GridItem colSpan={{ lg: 2 }}>
          <div className="lg:sticky lg:top-36 space-y-5">
            <Card>
              <Card.Content>
                <Flex items='start' gap='md'>
                  <Flex className="w-10 h-10 rounded-2xl bg-success/20" items="center" justify='center'>
                    <i className="ri-map-pin-line text-xl text-success" />
                  </Flex>
                  <div className="flex-1 min-w-0">
                    <p className="tracking-wider mb-1 uppercase font-bold text-success/80 text-xs">Enviar a</p>
                    <p className="font-semibold truncate">
                      {shipping.customer_name}
                    </p>
                    <p className="text-sm text-muted truncate">
                      {
                        `${shipping.shipping_address}, ${shipping.shipping_neighborhood}, ${shipping.shipping_city} ${shipping.shipping_state} ${shipping.shipping_postal_code}`
                      }
                    </p>
                    <p className="text-xs text-muted truncate">
                      {shipping.customer_phone}
                    </p>
                  </div>
                </Flex>
              </Card.Content>
            </Card>
            <Card>
              <Card.Header title="Resumen del Pedido" />
              <Card.Content>
                {
                  cart?.items.map((item) => (
                    <Flex key={item?.id} gap='3'>
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
                    </Flex>
                  )
                  )
                }
              </Card.Content>
            </Card>
          </div>
        </GridItem>
      </Grid>
    </Section>
  )
}

export default CheckoutPaymentPage
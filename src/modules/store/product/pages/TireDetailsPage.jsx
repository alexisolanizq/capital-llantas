import React from 'react'
import Flex from 'src/shared/components/ui/Flex'
import Label from 'src/shared/components/ui/Label'
import Button from 'src/shared/components/ui/Button'
import Section from 'src/components/store-ui/Section'
import useTireDetail from '../../hooks/useTireDetail'
import tire_webp from '/public/barum-bravuris-5.webp'
import { formatPrice, formatString } from 'src/utils/format'
import RelatedModels from '../../home/components/RelatedModels'
import ProductSkeleton from 'src/shared/components/ui/ProductSkeleton'
import QuantityInput from '../../home/components/QuantityInput'

const ProductDetailPage = () => {

  const {
    tire,
    related,
    quantity,
    isLoading,
    handleChange,
    handleAddToCart,
    isLoadingChangeQty,
  } = useTireDetail()

  if (isLoading) {
    return (
      <Section>
        <ProductSkeleton />
      </Section>
    )
  }

  return (
    <Section actions={['Regresar']} >
      <div className="flex flex-col lg:flex-row gap-10">
        <div className='flex-1 bg-surface rounded-2xl flex justify-center items-center shadow-sm'>
          <img src={tire_webp} alt="Truck" className='w-56 py-6' />
        </div>
        <div className='flex flex-col flex-1 gap-y-2 w-full self-start'>
          <p className='text-secondary font-medium text-sm'>{tire?.brand?.name}</p>
          <h1 className='text-3xl font-bold uppercase'>{formatString(tire?.size?.label)}</h1>
          <Label hideLabel title="Medida" value={tire?.model_name} />
          <div className='rounded-xl flex gap-2 items-center'>
            <p className='font-bold text-3xl'>{formatPrice(tire?.price)}</p>
            <span className='text-neutral-500'>MXN - C/U</span>
          </div>
          <p className='font-semibold mt-4'>Caracteristicas</p>
          <Label title="Indice de carga" value="" />
          <Label title="Indice de velocidad" value="" />
          <Flex
            direction={{
              base: "col",
              lg: "row",
            }}
            items={{
              base: "stretch",
              lg: "end",
            }}
            gap={{
              base: "sm",
              lg: "md",
            }}
          >
            <QuantityInput
              onChange={handleChange}
              quantity={quantity}
              max={tire?.stock}
            />
            <Button
              onClick={handleAddToCart}
              disabled={isLoadingChangeQty}
              loading={isLoadingChangeQty}
              fullWidth
              variant='secondary'
            >
              Agregar al carrito
            </Button>
          </Flex>
        </div>
      </div>
      <Flex className='mt-14'>
        <RelatedModels className='' items={related} />
      </Flex>
    </Section>
  )
}

export default ProductDetailPage
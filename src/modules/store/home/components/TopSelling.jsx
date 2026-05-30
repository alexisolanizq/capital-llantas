import React from 'react'
import Section from 'src/components/store-ui/Section'
import ProductCard from 'src/modules/store/home/components/ProductCard'
import Skeleton from 'src/shared/components/ui/Skeleton'
import useTopSellings from '../hooks/useTopSellings'
import useCart from '../../cart/hooks/useCart'
import Button from 'src/shared/components/ui/Button'
import SkeletonGroup from 'src/shared/components/ui/SkeletonGroup'
import CartItemSkeleton from 'src/shared/components/ui/CardItemSkeleton'
import ProductCardSkeleton from 'src/shared/components/ui/ProductCardSkeleton'

const TopSelling = () => {

  const { topSellings, isLoading } = useTopSellings()
  const { addItem, isLoading: isAdding } = useCart()

  return (
    <Section densityY='compact' title="Productos Destacados" description='No te pierdas nuestras ofertas' actions={
      <Button variant='flat' fullWidth
        className="lg:w-fit">
        Ver más
      </Button>
    }>
      <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-4">
        {
          isLoading && (
            <SkeletonGroup count={4}>
              <ProductCardSkeleton className="size-10" />
            </SkeletonGroup>
          )
        }
        {
          !isLoading && topSellings?.map((tire) => (
            <ProductCard product={tire} key={tire?.id} onBuy={() => addItem(tire?.id)} isAdding={isAdding} />
          ))
        }
      </div>
    </Section>
  )
}

export default TopSelling
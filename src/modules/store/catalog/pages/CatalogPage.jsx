import Section from 'src/components/store-ui/Section'
import Skeleton from 'src/shared/components/ui/Skeleton'
import ProductCard from '../../home/components/ProductCard'
import DropdownMenu from 'src/shared/components/ui/DropdownMenu'
import useCatalog from 'src/modules/store/catalog/hooks/useCatalog'
import DropdownController from 'src/shared/components/form/DropdownController'
import { mapToOptions } from 'src/utils/mapToOptions'
import useCart from '../../cart/hooks/useCart'
import Accordion from 'src/shared/components/ui/Accordion'
import SkeletonGroup from 'src/shared/components/ui/SkeletonGroup'
import CartItemSkeleton from 'src/shared/components/ui/CardItemSkeleton'
import GradientBlock from 'src/shared/components/ui/GradientBlock'
import Flex from 'src/shared/components/ui/Flex'
import Button from 'src/shared/components/ui/Button'

const CatalogPage = () => {

    const {
        data,
        brandTab,
        isLoading,
        categoryTab,
        setBrandTab,
        setCategoryTab,
        control,
        tireSizes,
        brands,

        rimDiameterTab, setRimDiameterTab,
        profileTab, setProfileTab,
        widthTab, setWidthTab,
        showFilters, setShowFilters,
        cleanParams
    } = useCatalog()

    const { addItem, isLoading: isAdding } = useCart()


    return (
        <>
            <GradientBlock legend="Encuentra La Llanta Perfecta" />
            <Section
                densityY={{ base: "xsmall", lg: "large" }}
                className="max-w-7xl"
            >
                <div className="my-10">
                    <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
                        {
                            showFilters && (
                                <div className='col-span-1 flex flex-col gap-4'>
                                    <p className='font-semibold'>Filtros</p>
                                    <DropdownController
                                        control={control}
                                        name="width"
                                        items={mapToOptions(tireSizes?.widths)}
                                        placeholder='Ancho'
                                        isActive={widthTab}
                                        onToggle={setWidthTab}
                                    />
                                    <DropdownController
                                        control={control}
                                        name="profile"
                                        items={mapToOptions(tireSizes?.aspect_ratio)}
                                        placeholder='Perfil'
                                        isActive={profileTab}
                                        onToggle={setProfileTab}
                                    />
                                    <DropdownController
                                        control={control}
                                        name="rim"
                                        items={mapToOptions(tireSizes?.rim_diameters)}
                                        placeholder='Rin'
                                        isActive={rimDiameterTab}
                                        onToggle={setRimDiameterTab}
                                    />
                                    <DropdownController
                                        keyLabel='name'
                                        keyValue='slug'
                                        control={control}
                                        name="brand"
                                        items={brands}
                                        placeholder='Marcas'
                                        isActive={brandTab}
                                        onToggle={setBrandTab}
                                    />
                                    <Accordion activeTab={false} onActiveTab={() => { }} className="flex-1" />
                                    {/* <DropdownMenu
                                        placeholder='Categorías'
                                        isActive={categoryTab}
                                        onClick={setCategoryTab}
                                    /> */}
                                    {/* {
                                        (brandTab || rimDiameterTab || widthTab) && (
                                        )
                                    } */}
                                    <Button variant='outline' size='sm' onClick={cleanParams}>Limpiar</Button>
                                </div>
                            )
                        }
                        <div className='col-span-1 lg:col-span-4 flex flex-col gap-4 w-full'>
                            <div className='flex flex-col lg:flex-row gap-4 justify-between items-start'>
                                <p className='text-sm font-semibold'>
                                    {data?.length}
                                    <span className='font-normal'>
                                        {" "}productos encontrados
                                    </span>
                                </p>
                                <button className='flex lg:hidden items-center gap-2' onClick={() => setShowFilters(!showFilters)}>
                                    <i className='ri-filter-line text-xl' /> <p className='text-sm'>Filtros</p>
                                </button>
                            </div>
                            <div className='w-full grid grid-cols-1 lg:grid-cols-4 gap-4'>
                                {
                                    isLoading && (
                                        <SkeletonGroup count={8}>
                                            <CartItemSkeleton />
                                        </SkeletonGroup>
                                    )
                                }
                                {
                                    data?.map((item) => (
                                        <ProductCard key={item.id} product={item} onBuy={() => addItem(item?.id)} isAdding={isAdding} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default CatalogPage
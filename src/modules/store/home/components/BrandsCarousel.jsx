import Section from "src/components/store-ui/Section"
import { brands } from "src/utils/brands"
import useBrandsCarousel from "src/modules/store/hooks/useBrandsCarousel"

const BrandsCarousel = () => {

    const { distance, trackRef, viewportRef } = useBrandsCarousel()

    return (
        <Section title="Marcas Premium" description="Explora nuestra selección de marcas top y encuentra los productos que necesitas, de los mejores fabricantes." actions={[{ label: 'Ver más' }]}>
            <div
                ref={viewportRef}
                className="relative overflow-hidden container mx-auto py-20 select-none mask-fade-x"
            >
                <div
                    ref={trackRef}
                    className="flex w-max will-change-transform animate-marquee"
                    style={{
                        "--marquee-distance": `-${distance}px`,
                    }}
                >
                    <div className="flex items-center gap-x-12 px-6">
                        {brands.map((item) => (
                            <img
                                key={item.name}
                                src={item.url}
                                alt={item.name}
                                className="h-6 lg:h-8 object-contain filter grayscale dark:drop-shadow dark:drop-shadow-amber-50 transition-all duration-400"
                                draggable={false}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default BrandsCarousel
import { Link } from "react-router-dom"
import tire_webp from '/public/barum-bravuris-5.webp'
import { formatPrice, formatString } from "src/utils/format"

const ProductCard = ({ product, onBuy, isAdding, onToggleFavorite, hideFooter = false, ...props }) => {
    return (
        <div className="bg-surface w-full px-6 py-4 shadow rounded-2xl flex flex-col items-start group">
            <Link to={`/modelo/${product?.slug}`} className='self-center'>
                <img src={tire_webp} className='w-38 group-hover:scale-105 group-hover:-rotate-6 transition-transform' alt="Tire" />
            </Link>
            <div className='flex flex-col gap-y-2 w-full mb-3'>
                <p className='text-sm text-secondary'>{product?.brand?.name}</p>
                <Link to={`/${product?.slug}`} className='text-lg font-medium'>{formatString(product?.size?.label)}</Link>
                <p className='text-muted text-sm'>{product?.model_name}</p>
                <div className="flex items-center gap-x-2">
                    <h2 className='text-lg font-semibold'>{formatPrice(product?.price)}</h2>
                    <p className='text-secondary text-xs'>{product.stock <= 5 && "(Pocas piezas)"}</p>
                </div>
            </div>
            {
                !hideFooter && (
                    <div className='flex gap-4 w-full'>
                        <button onClick={onToggleFavorite} className="rounded-full outline-1 outline-line hover:bg-line w-10 h-10">
                            <i className='ri-heart-line text-muted font-medium text-xl' />
                        </button>
                        <button className="flex flex-1 items-center justify-center gap-4 rounded-full bg-secondary text-inverse hover:bg-secondary-hover w-10 h-10 disabled:bg-secondary/40" onClick={onBuy} disabled={isAdding}>
                            <i className='ri-shopping-cart-line font-medium text-lg' />
                            <p>Agregar</p>
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default ProductCard
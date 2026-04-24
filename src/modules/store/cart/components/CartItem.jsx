import React from 'react'
import QuantityCart from '../../home/components/QuantityCart'
import { Link } from 'react-router-dom'
import tire_webp from '/public/barum-bravuris-5.webp'
import { formatPrice, formatString } from 'src/utils/format'

const CartItem = ({ item, onDelete = () => { } }) => {

    return (
        <div className='bg-surface shadow-sm flex flex-col lg:flex-row items-center w-full rounded-xl p-4'>
            <Link to={`/modelo/${item?.tire?.slug}`} className='p-4'>
                <img src={tire_webp} className='w-30 self-center' alt="Tire" />
            </Link>
            <div className='w-full p-2'>
                <div className='flex justify-between items-start'>
                    <div className='space-y-1'>
                        <p className='text-secondary font-medium'>
                            {item?.tire?.brand?.name}
                        </p>
                        <p className='font-semibold'>
                            {item?.tire?.model_name}
                        </p>
                        <p className='text-neutral-500'>
                            {formatString(item?.tire?.size?.label)}
                        </p>
                        <p className='font-semibold'>
                            {formatPrice(item?.tire?.price)}
                        </p>
                    </div>
                    <button onClick={() => onDelete(item?.tire?.id)}>
                        <i className='ri-delete-bin-5-line text-xl' />
                    </button>

                </div>
                <div className='flex justify-between items-center w-full mt-2'>
                    <QuantityCart quantity={item?.quantity} hideLabel />
                    <div className='flex flex-col items-center justify-center'>
                        
                        <p className='text-xl font-semibold'>
                            {formatPrice(item?.total)}
                        </p>
                        <p className='self-end text-sm text-neutral-500 font-light'>
                            {formatPrice(item?.price)} c/u
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
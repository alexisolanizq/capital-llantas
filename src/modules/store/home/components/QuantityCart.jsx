import React from 'react'
import useQuantity from '../hooks/useQuantity'

const QuantityCart = ({
    quantity,
    onChange = () => { },
    min = 1,
    max = 8,
    hideLabel = false,
    className = ''
}) => {

    const {
        quantity: qty,
        increment,
        decrement,
        isMin,
        isMax,
    } = useQuantity({
        value: quantity,
        onChange,
        min,
        max,
    });

    return (
        <div className={`flex flex-col gap-2 w-full lg:w-fit`}>
            {
                !hideLabel && (
                    <p>Cantidad:</p>
                )
            }
            <div className={`flex items-center w-fit rounded-xl outline-1 outline-line overflow-hidden font-medium bg-surface`}>
                <button onClick={decrement} disabled={isMin} className='w-10 h-10 text-main text-2xl'>-</button>
                <span className='w-10 h-10 text-main flex items-center justify-center'>{qty}</span>
                <button onClick={increment} disabled={isMax} className='w-10 h-10 text-main text-xl'>+</button>
            </div>
        </div>
    )
}

export default QuantityCart
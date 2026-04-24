import React from 'react'
import Flex from 'src/shared/components/ui/Flex'

const Label = ({ title, value, justify = 'start', isBold = false, hideLabel = false }) => {
    return (
        <Flex justify={justify}>
            {
                !hideLabel && (<p className='text-lg text-muted'>{title}:</p>)
            }
            <p className={`text-lg ${isBold ? 'font-bold' : ''}`}>{value}</p>
        </Flex >
    )
}

export default Label
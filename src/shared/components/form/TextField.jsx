import React from 'react'

const TextField = ({
    placeholder = 'Buscar',
    name = '',
    withIcon = true,
    type = "text",
    ...props
}) => {
    return (
        <div className='w-full mb-4'>
            <label htmlFor={name} className='font-medium text-neutral-500'>{placeholder}</label>
            <div className='relative'>
                {
                    withIcon && (
                        <i className="absolute ri-search-line text-xl top-1/2 -translate-y-1/2 left-3 text-neutral-400" />
                    )
                }
                <input type={type} id={name} name={name} className={`bg-surface ${ !withIcon ? 'pl-4' : 'pl-10'} py-3 rounded-lg text-neutral-500 outline outline-neutral-100 w-full shadow-sm`} />
            </div>
        </div>
    )
}

export default TextField
import React from 'react'

const Accordion = ({ onActiveTab, activeTab }) => {
    return (
        <div className='relative w-48 text-primary-active'>
            <div className={`bg-surface shadow-sm ${activeTab ? "rounded-t-lg" : "rounded-lg"}`}>
                <button
                    className='w-full flex items-center justify-between px-3 py-2'
                    type='button'
                    onClick={() => onActiveTab(!activeTab)}
                >
                    <div className="flex items-center gap-x-1">
                        <i className='ri-arrow-up-down-fill' />
                        <p>Ordenar por</p>
                    </div>

                    <i
                        className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${activeTab ? "rotate-180" : ""
                            }`}
                    />
                </button>
            </div>

            {activeTab && (
                <div className="absolute w-full bg-surface shadow-sm rounded-b-lg overflow-hidden z-10">
                    <p className='px-3 py-2 hover:bg-gray-100 cursor-pointer'>
                        Precio mayor
                    </p>
                    <p className='px-3 py-2 hover:bg-gray-100 cursor-pointer'>
                        Precio menor
                    </p>
                </div>
            )}
        </div>
    )
}

export default Accordion
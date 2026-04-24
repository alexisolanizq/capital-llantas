import React from 'react'

const ProductSkeleton = () => (
    <div className='flex flex-col lg:flex-row w-full gap-4 animate-pulse lg:my-10'>
        <div className="flex-1">
            <div className="h-80 lg:h-full w-full bg-border rounded-xl"></div>
        </div>
        <div className="flex-1 flex flex-col gap-y-4">
            <div className="h-12 w-full bg-border rounded-xl"></div>
            <div className="h-12 w-1/2 bg-border rounded-xl"></div>
            <div className="h-12 w-full bg-border rounded-xl"></div>
            <div className="h-12 w-3/12 bg-border rounded-xl"></div>
            <div className="h-12 w-1/2 bg-border rounded-xl"></div>
            <div className="h-12 w-3/4 bg-border rounded-xl"></div>
        </div>
    </div>
)

export default ProductSkeleton
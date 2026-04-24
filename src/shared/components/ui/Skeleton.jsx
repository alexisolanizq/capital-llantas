import React from 'react'

const Skeleton = () => (
    <div className="bg-surface outline-1 outline-line p-4 rounded-2xl animate-pulse">
        <div className="bg-line h-40 rounded-t-2xl mb-4"></div>
        <div className="bg-line h-4 w-full mb-2 rounded"></div>
        <div className="bg-line h-4 w-3/4 mb-2 rounded"></div>
        <div className="bg-line h-4 w-1/2 mb-2 rounded"></div>
        <div className="bg-line h-4 w-full mb-2 rounded"></div>
    </div>
)

export default Skeleton
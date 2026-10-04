import React, { cloneElement } from 'react'

const AdminGeneralLayout = ({ children, title = '', description = '', actions }) => (
    <main className='w-full px-4 py-2'>
        <div className="flex justify-between items-center mb-4">
            <div className='space-y-2'>
                <h2 className='text-primary text-3xl font-bold'>
                    {title}
                </h2>
                {
                    description && (<p className='text-sm text-muted'>{description}</p>)
                }
            </div>
            <div className="flex items-center space-x-2">
                {
                    actions && actions.map((children, index) =>
                        cloneElement(children, { key: `action-element-${index}` })
                    )
                }
            </div>
        </div>
        {children}
    </main>
)

export default AdminGeneralLayout
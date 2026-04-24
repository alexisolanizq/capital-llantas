import React from 'react'

const AdminGeneralLayout = ({ children, title, description, actions }) => {
    return (
        <main className='w-full'>
            <div className="flex justify-between items-center mb-4">
                <h2 className='text-primary font-semibold'>
                    {title}
                </h2>

                {actions && actions.length > 0 ? (
                    <div className='flex flex-col lg:flex-row items-center'>
                        {actions?.map((action) => (
                            <button>
                                {action.label}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div>
                        <button onClick={() => actions?.onClick}>
                            {actions?.label}
                        </button>
                    </div>
                )}
            </div>
            <div className='bg-surface p-4 rounded-xl'>
                {description && (<p className='text-backbg-admin-background-100 text-sm mb-4'>{description}</p>)}
                {children}
            </div>
        </main>
    )
}

export default AdminGeneralLayout
import React, { useState } from 'react'
import logo from "/public/logo.svg"
import useAdminSidebar from '../hooks/useAdminSidebar'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {

    const { data, isOpen } = useAdminSidebar()

    return (
        <aside className={`flex flex-col justify-between transition-all duration-300 ease-in-out bg-depth-800 overflow-y-auto ${isOpen ? 'w-64' : 'w-0 lg:w-20'}`}>
            <div className='flex flex-col gap-y-2'>
                <div className='mx-auto py-4'>
                    <p className='text-inverse font-black text-2xl'>Todo Terreno</p>
                    {/* <img src={logo} alt="Logo" /> */}
                </div>
                <div>
                    <ul className='text-inverse'>
                        {
                            data?.length > 0 && data?.map((item) => (
                                <li key={item.id}>
                                    {item.link ? (
                                        <Link className='py-2.5 px-4 text-sm flex items-center gap-x-4' to={`/${item.link}`}>
                                            <i className={item.icon} />
                                            <p>{item.title}</p>
                                        </Link>
                                    ) : (
                                        <>
                                            <button className='py-2.5 px-4 text-sm flex items-center gap-x-4 font-light'>
                                                <i className={item.icon} />
                                                <p>{item.title}</p>
                                            </button>
                                            <div>
                                                {
                                                    item?.children?.map((children) => (
                                                        <div className='flex flex-col ml-8' key={children.id}>
                                                            <Link className='py-2.5 px-4 text-sm flex items-center gap-x-4' to={`/${children.link}`} key={children.id}>
                                                                <i className={children.icon} />
                                                                <p>
                                                                    {children.title}
                                                                </p>
                                                            </Link>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </>
                                    )}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div>

            </div>

        </aside>
    )
}

export default AdminSidebar
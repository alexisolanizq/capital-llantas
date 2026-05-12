import { Link } from 'react-router-dom';
import useAdminSidebar from '../hooks/useAdminSidebar';

const AdminSidebar = () => {

    const {
        isOpen,
        sidebarMenu,
        closeSidebar,
        openMenus,
        toggleMenu
    } = useAdminSidebar()

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={closeSidebar}
                />
            )}

            <aside
                className={`
                    fixed lg:static top-0 left-0 z-50 h-full
                    bg-depth-800 overflow-y-auto
                    transition-all duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                    lg:translate-x-0
                    w-64
                `}
            >
                <div className='flex flex-col h-full'>

                    <div className='w-full py-4 border-b border-depth-700'>
                        <p className='text-inverse text-center font-black text-2xl lg:text-xl'>
                            Todo Terreno
                        </p>
                    </div>

                    <ul className='text-inverse py-4 flex flex-1 flex-col gap-y-1'>

                        {sidebarMenu?.map((item) => (
                            <li key={item.id}>

                                {item.link ? (
                                    <Link
                                        to={`/${item.link}`}
                                        onClick={closeSidebar}
                                        className='py-2.5 px-4 flex items-center text-sm font-light gap-x-4 hover:bg-white/10'
                                    >
                                        <i className={item.icon} />
                                        <span>
                                            {item.title}
                                        </span>
                                    </Link>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => toggleMenu(item.id)}
                                            className='w-full py-2.5 px-4 flex items-center justify-between text-sm hover:bg-white/10'
                                        >
                                            <div className='flex items-center gap-x-4'>
                                                <i className={item.icon} />
                                                <span>
                                                    {item.title}
                                                </span>
                                            </div>

                                            <span className={`${openMenus[item.id] ? 'rotate-90' : ''}`}>
                                                <i className='ri-arrow-right-s-line' />
                                            </span>
                                        </button>

                                        <div className={`
                                            overflow-hidden transition-all duration-300
                                            ${openMenus[item.id] ? 'max-h-96' : 'max-h-0'}
                                        `}>
                                            {item.children?.map((child) => (
                                                <Link
                                                    key={child.id}
                                                    to={`/${child.link}`}
                                                    onClick={() => {
                                                        if (window.innerWidth < 1024) {
                                                            closeSidebar();
                                                        }
                                                    }}
                                                    className='flex items-center gap-x-4 text-sm font-light py-2 px-10 hover:bg-white/10'
                                                >
                                                    <i className={child.icon} />
                                                    <span>
                                                        {child.title}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                )}

                            </li>
                        ))}

                    </ul>

                    <div className='w-full border-t border-muted flex flex-col justify-center items-start p-2'>
                        <Link to='/' className='py-2 px-4 text-inverse space-x-4'>
                            <i className="ri-external-link-line text-lg" />
                            <span className='text-sm font-light'>
                                Ver Tienda
                            </span>
                        </Link>
                        <button className='py-2 px-4 text-inverse space-x-4'>
                            <i className="ri-logout-box-r-line text-lg" />
                            <span className='text-sm font-light'>
                                Cerrar sesión
                            </span>
                        </button>
                    </div>

                </div>
            </aside>
        </>
    );
};

export default AdminSidebar;
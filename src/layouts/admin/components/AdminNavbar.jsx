import React from 'react'
import useNavbar from 'src/shared/hooks/useNavbar'
import { useAdminSidebarStore } from 'src/store/useAdminSidebar'

const AdminNavbar = () => {

    const { setTheme, theme } = useNavbar()
    const { toggleSidebar } = useAdminSidebarStore()

    return (
        <div className='bg-surface dark:bg-depth-950 z-10 shrink-0 flex lg:hidden items-center justify-between p-4 shadow-xl'>
            <button onClick={() => toggleSidebar()}>
                <i className='ri-menu-4-line text-xl text-primary' />
            </button>
            <nav className="container flex gap-x-4 justify-end">
                <button onClick={() => setTheme(!theme)}>
                    <i className='ri-moon-line text-xl text-primary' />
                </button>
                <button>
                    <i className='ri-logout-box-r-line text-primary' />
                </button>
            </nav>
        </div>
    )
}

export default AdminNavbar
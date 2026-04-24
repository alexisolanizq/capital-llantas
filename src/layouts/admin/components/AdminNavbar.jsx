import React from 'react'
import useNavbar from 'src/shared/hooks/useNavbar'

const AdminNavbar = () => {

    const { setTheme, theme } = useNavbar()

    return (
        <div className='bg-depth-950 z-10 shrink-0 flex items-center justify-between p-4 shadow-xl'>
            <nav className="container flex gap-x-4 justify-end">
                <button onClick={() => setTheme(!theme)}>
                    <i className='ri-moon-line text-xl text-inverse' />
                </button>
                <button>
                    <i className='ri-logout-box-r-line text-inverse' />
                </button>
            </nav>
        </div>
    )
}

export default AdminNavbar
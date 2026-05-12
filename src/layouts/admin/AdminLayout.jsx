import { Outlet } from 'react-router-dom'
import ScrollTop from 'src/shared/components/ui/ScrollTop'
import AdminNavbar from './components/AdminNavbar'
import AdminSidebar from './components/AdminSidebar'

const AdminLayout = () => (
    <>
        <ScrollTop />
        <div className="flex h-dvh w-full overflow-hidden bg-page">
            <AdminSidebar
            />

            <div className='flex flex-col flex-1 min-w-0 overflow-hidden'>
                <AdminNavbar />
                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>

            </div>
        </div>
    </>
)

export default AdminLayout
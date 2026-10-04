import { Outlet } from "react-router-dom"

const AdminAuthLayout = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminAuthLayout
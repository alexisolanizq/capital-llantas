import AdminLayout from "src/layouts/admin/AdminLayout";
import Dashboard from "src/modules/admin/dashboard/pages/Dashboard";
import TireBulkUpload from "src/modules/admin/tires/pages/TireBulkUpload";
import TireList from "src/modules/admin/tires/pages/TireList";
import BrandList from "./brands/pages/BrandList";


const AdminRoutes = {
    path: '/admin',
    element: <AdminLayout />,
    children: [
        {
            path: 'dashboard',
            element: <Dashboard />
        },
        {
            path: 'tires',
            children: [
                {
                    path: 'list',
                    element: <TireList />,
                },
                {
                    path: 'import',
                    element: <TireBulkUpload />
                },

            ]
        },
        {
            path: 'brands',
            children: [
                {
                    path: 'list',
                    element: <BrandList />,
                },
                {
                    path: 'import',
                    element: <TireBulkUpload />
                },

            ]
        }
    ]
}

export default AdminRoutes
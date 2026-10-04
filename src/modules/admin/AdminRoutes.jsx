import AdminLayout from "src/layouts/admin/AdminLayout";
import Dashboard from "src/modules/admin/dashboard/pages/Dashboard";
import TireBulkUpload from "src/modules/admin/tires/pages/TireBulkUpload";
import TireList from "src/modules/admin/tires/pages/TireList";
import BrandList from "./brands/pages/BrandList";
import RequireAuth from "../user/auth/components/RequireAuth";
import AdminAuthLayout from "./auth/components/AdminAuthLayout";
import AdminLogin from "./auth/components/AdminLogin";
import { Navigate } from "react-router-dom";
import ProductList from "./products/pages/ProductList";
import CategoryList from "./categories/pages/CategoryList";
import AttributeList from "./attributes/pages/AttributeList";


const AdminRoutes = {
    path: '/admin',
    children: [
        {
            index: true,
            element: <Navigate to="/admin/dashboard" replace />
        },
        {
            path: 'auth',
            element: <AdminAuthLayout />,
            children: [
                {
                    path: 'login',
                    element: <AdminLogin />
                },
            ]
        },
        {
            element: (
                <RequireAuth role="admin">
                    <AdminLayout />
                </RequireAuth>
            ),
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
                    path: 'attributes',
                    children: [
                        {
                            path: 'list',
                            element: <AttributeList />,
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
                },
                {
                    path: 'products',
                    children: [
                        {
                            path: 'list',
                            element: <ProductList />
                        },
                        {
                            path: 'import',
                            element: <></>
                        },
                    ]
                },
                {
                    path: 'categories',
                    children: [
                        {
                            path: 'list',
                            element: <CategoryList />
                        },
                    ]
                },
                {
                    path: 'theme-settings',
                    children: [
                        {
                            path: ''
                        },
                        {
                            path: 'sidebar',
                        },
                    ]
                }
            ]
        },
    ]
}

export default AdminRoutes
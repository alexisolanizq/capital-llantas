import React from 'react'
import CatalogPage from 'src/modules/store/catalog/pages/CatalogPage'
import HomePage from 'src/modules/store/home/pages/HomePage'
import TireDetailsPage from 'src/modules/store/product/pages/TireDetailsPage'
import Cart from 'src/modules/store/cart/page/Cart'

const StoreRoutes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/catalogo',
        element: <CatalogPage />,
    },
    {
        path: '/carrito',
        element: <Cart />,
    },
    {
        path: '/modelo/:slug',
        element: <TireDetailsPage />
    }
]

export default StoreRoutes
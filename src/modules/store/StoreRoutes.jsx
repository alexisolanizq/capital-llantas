import React from 'react'
import CatalogPage from 'src/modules/store/catalog/pages/CatalogPage'
import HomePage from 'src/modules/store/home/pages/HomePage'
import TireDetailsPage from 'src/modules/store/product/pages/TireDetailsPage'
import Cart from 'src/modules/store/cart/page/Cart'
import CheckoutShippingPage from './shipping/pages/CheckoutShippingPage'
import CheckoutPaymentPage from './payment/pages/CheckoutPaymentPage'
import CheckoutSuccessPage from '../user/panel/pages/CheckoutSuccessPage'
import CheckoutFailurePage from '../user/panel/pages/CheckoutFailurePage'
import CheckoutPendingPage from '../user/panel/pages/CheckoutPendingPage '
import History from './contact/pages/History'

const StoreRoutes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: 'catalogo',
        element: <CatalogPage />,
    },
    {
        path: 'nosotros',
        element: <History />,
    },
    {
        path: 'contacto',
        element: <CatalogPage />,
    },
    {
        path: 'envios',
        element: <CatalogPage />,
    },
    {
        path: 'carrito',
        element: <Cart />,
    },
    {
        path: 'modelo/:slug',
        element: <TireDetailsPage />
    },
    {
        path: 'checkout',
        children: [
            {
                path: 'shipping',
                element: <CheckoutShippingPage />
            },
            {
                path: 'payment',
                children: [
                    {
                        path: ':uuid',
                        element: <CheckoutPaymentPage />
                    },
                    {
                        path: 'success',
                        element: <CheckoutSuccessPage />
                    },
                    {
                        path: 'failure',
                        element: <CheckoutFailurePage />
                    },
                    {
                        path: 'pending',
                        element: <CheckoutPendingPage />
                    },
                ]
            }
        ]
    }
]

export default StoreRoutes
import React from 'react'
import SocialAuth from './auth/pages/SocialAuth'
import UserPanel from './panel/pages/UserPanel'
import MercadoPagoSuccessPayment from './panel/pages/MercadoPagoSuccessPayment'
import MercadoPagoFailurePayment from './panel/pages/MercadoPagoFailurePayment'
import MercadoPagoPendingPayment from './panel/pages/MercadoPagoPendingPayment'
import UserGeneralLayout from 'src/layouts/user/UserGeneralLayout'
import RequireAuth from './auth/components/RequireAuth'


const UserRoutes = {
    path: 'auth',
    element: (
        <RequireAuth>
            <UserGeneralLayout />
        </RequireAuth>
    ),
    children: [
        {
            path: 'social',
            element: <SocialAuth />,
        },
        {
            path: 'panel',
            element: <UserPanel />
        },
        {
            path: 'mercadopago/payment/success',
            element: <MercadoPagoSuccessPayment />
        },
        {
            path: 'mercadopago/payment/failure',
            element: <MercadoPagoFailurePayment />
        },
        {
            path: 'mercadopago/payment/pending',
            element: <MercadoPagoPendingPayment />
        },
    ]
}

export default UserRoutes
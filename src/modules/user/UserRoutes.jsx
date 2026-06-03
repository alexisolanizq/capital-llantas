import React from 'react'
import SocialAuth from './auth/pages/SocialAuth'
import UserGeneralLayout from 'src/layouts/user/UserGeneralLayout'
import RequireAuth from './auth/components/RequireAuth'
import UserOrders from './panel/pages/UserOrders'
import UserProfile from './panel/pages/UserProfile'


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
            path: 'perfil',
            element: <UserProfile />
        },
        {
            path: 'ordenes',
            element: <UserOrders />
        },
    ]
}

export default UserRoutes
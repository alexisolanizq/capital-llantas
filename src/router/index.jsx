import { createBrowserRouter } from "react-router-dom";
import AdminRoutes from "src/modules/admin/AdminRoutes";
import StoreRoutes from "src/modules/store/StoreRoutes";
import StoreLayout from "src/layouts/store/StoreLayout";
import LoginStore from "src/modules/user/auth/pages/LoginStore";
import UserRoutes from "src/modules/user/UserRoutes";
import SocialAuth from "src/modules/user/auth/pages/SocialAuth";
import SignUpStore from "src/modules/user/auth/pages/SignUpStore";

const router = createBrowserRouter([
    {
        path: 'login',
        element: <LoginStore />
    },
    {
        path: 'signup',
        element: <SignUpStore />
    },
    {
        path: '',
        element: <StoreLayout />,
        children: StoreRoutes
    },
    {
        path: 'auth/social',
        element: <SocialAuth />,
    },
    AdminRoutes,
    UserRoutes
]);

export default router;
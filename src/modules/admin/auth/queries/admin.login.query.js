import { useLocation, useNavigate } from "react-router-dom"
import adminAuthService from "../services/admin.auth.service"
import { useMutationQuery } from "src/shared/hooks/useQueries"
import useAdminAuthStore from "src/store/adminAuthStore"


export const useAdminLoginMutation = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/admin/dashboard";

    return useMutationQuery({
        mutationFn: adminAuthService.login,
        onSuccess: (data) => {
            const token = data?.token
            const admin = data?.admin

            useAdminAuthStore.getState().setAuth({ token, admin })

            navigate(from, { replace: true })
        }
    })
}

export const useAdminLogoutMutation = () => {

    return useMutationQuery({
        mutationFn: adminAuthService.logout,
        onSuccess: (data) => {
            console.log(data);

            useAdminAuthStore.getState().logout()
        }

    })

}
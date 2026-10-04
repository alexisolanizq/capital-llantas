import { Navigate, useLocation } from "react-router-dom"
import { adminAuthStorage, authStorage } from "src/utils/localStorage"

const RequireAuth = ({ children, role }) => {

    const location = useLocation()

    const storage = role === 'admin' ? adminAuthStorage : authStorage

    const token = storage.getToken()

    if (!token) {
        return (
            <Navigate
                to={
                    (role === 'admin' ? '/admin/auth/login' : '/login')
                }
                state={{ from: location }}
                replace
            />
        )
    }

    return children
}

export default RequireAuth
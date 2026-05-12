import { Navigate, useLocation } from "react-router-dom"
import { authStorage } from "src/utils/localStorage"

const RequireAuth = ({children}) => {
    const token = authStorage.getToken()
    const location = useLocation()

    if (!token) {
        return (
            <Navigate
                to={'/login'}
                state={{ from: location }}
                replace
            />
        )
    }

    return children
}

export default RequireAuth
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import useAuthStore from "src/store/authStore";
import authService from "../services/auth.service";
import { authStorage } from "src/utils/localStorage";

const useSocialAuth = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {

        const login = async () => {

            try {

                const token = searchParams.get("token");

                if (!token) {
                    navigate("/login");
                    return;
                }

                authStorage.setToken(token);

                const { user } = await authService.me(token);

                useAuthStore.getState().setAuth({
                    token,
                    user,
                });

                navigate("/auth/perfil", {
                    replace: true,
                });

            } catch (error) {

                console.error(error);

                authStorage.removeToken();

                navigate("/login", {
                    replace: true,
                });

            }
        }

        login()

    }, [])


    return {

    }
}

export default useSocialAuth
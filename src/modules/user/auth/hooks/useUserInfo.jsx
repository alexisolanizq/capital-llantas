import useAuthStore from "src/store/authStore"

const useUserInfo = () => {

    const user = useAuthStore((state) => state.user)

    return {
        user
    }
}

export default useUserInfo
import useAuthStore from "src/store/authStore"

const useUserInfo = () => {

    const user = useAuthStore((state) => state.user)

    const onLogout = async () => {
        await useAuthStore.getState().logout()
    }

    return {
        user,
        onLogout
    }
}

export default useUserInfo
import { useAdminLogoutMutation } from "src/modules/admin/auth/queries/admin.login.query";
import { useFetchAdminSidebar } from "../queries/admin.query"
import { useAdminSidebarStore } from "src/store/useAdminSidebar";

const useAdminSidebar = () => {

    const { data: sidebarMenu } = useFetchAdminSidebar()
    const logoutMutation = useAdminLogoutMutation()

    const {
        isOpen,
        openMenus,
        toggleSidebar,
        closeSidebar,
        toggleMenu
    } = useAdminSidebarStore();

    const logout = async () => {
        await logoutMutation.mutateAsync()
    }

    return {
        logout,
        isOpen,
        openMenus,
        toggleMenu,
        sidebarMenu,
        closeSidebar,
        toggleSidebar
    }
}

export default useAdminSidebar
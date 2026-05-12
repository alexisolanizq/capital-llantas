import { useFetchAdminSidebar } from "../queries/admin.query"
import { useAdminSidebarStore } from "src/store/useAdminSidebar";

const useAdminSidebar = () => {

    const { data: sidebarMenu } = useFetchAdminSidebar()

    const {
        isOpen,
        openMenus,
        toggleSidebar,
        closeSidebar,
        toggleMenu
    } = useAdminSidebarStore();

    return {
        isOpen,
        openMenus,
        toggleMenu,
        sidebarMenu,
        closeSidebar,
        toggleSidebar
    }
}

export default useAdminSidebar
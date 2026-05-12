import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAdminSidebarStore = create(
  persist(
    (set, get) => ({
      isOpen: true,
      openMenus: {},

      toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),

      closeSidebar: () => set({ isOpen: false }),

      toggleMenu: (id) =>
        set((state) => ({
          openMenus: {
            ...state.openMenus,
            [id]: !state.openMenus[id],
          },
        })),
    }),
    {
      name: "admin-sidebar-storage",
    },
  ),
);

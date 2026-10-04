import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCatalogStore = create(
    persist(
        (set) => ({
            brands: [],
            tireSizes: {
                widths: [],
                rim_diameters: [],
                aspect_ratio: [],
            },
            topSellings: [],
            setBrands: (brands) => set({ brands }),
            setTireSizes: (tireSizes) => set({ tireSizes }),
            setTopSelling: (topSelling) => set({ topSelling }),
        }),
        {
            name: "catalog-storage",
            storage: createJSONStorage(() => localStorage),
            partialize: ({ brands, tireSizes, topSellings }) => ({
                brands, tireSizes, topSellings
            })
        },

    )
)
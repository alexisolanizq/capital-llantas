import { useCatalogStore } from "src/store/catalog";

const useTopSellings = () => {

    const topSelling = useCatalogStore((state) => state.topSelling);

    return {
        topSelling
    }
}

export default useTopSellings
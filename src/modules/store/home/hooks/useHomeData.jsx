import { useCatalogStore } from "src/store/catalog"
import { useHomeQuery } from "../queries/home.query"
import { useEffect } from "react"

const useHomeData = () => {

    const { data, isLoading } = useHomeQuery()

    const setBrands = useCatalogStore((state) => state.setBrands)
    const setTireSizes = useCatalogStore((state) => state.setTireSizes)
    const setTopSelling = useCatalogStore((state) => state.setTopSelling)

    useEffect(() => {
        if (!data) return

        if (data.brands) setBrands(data.brands);
        if (data.tireSizes) setTireSizes(data.tireSizes);
        if (data.topSelling) setTopSelling(data.topSelling);
    }, [data, setBrands, setTireSizes, setTopSelling])

    return {
        data: data || [],
        isLoading
    }
}

export default useHomeData
import { useEffect, useState } from "react"
import { useForm, useWatch } from "react-hook-form"
import { useTireCatalogQuery } from "../queries/catalog.query"
import { useSearchParams } from "react-router-dom"
import { parseArrayParam } from "src/utils/format"
import { useCatalogStore } from "src/store/catalog"

const useCatalog = () => {

    const [searchParams, setSearchParams] = useSearchParams()


    const defaultValues = {
        search: searchParams.get("search") || "",
        width: [],
        profile: [],
        rim: [],
        brand: [],
        category: [],
    }

    const cleanParams = () => {
        setSearchParams(defaultValues)
    }

    useEffect(() => {
        const newValues = {
            width: parseArrayParam(searchParams.get("width")),
            profile: parseArrayParam(searchParams.get("profile")),
            rim: parseArrayParam(searchParams.get("rim")),
            brand: parseArrayParam(searchParams.get("brand")),
            category: parseArrayParam(searchParams.get("category")),
        }

        reset(newValues)
    }, [searchParams])

    const { control, reset } = useForm({
        defaultValues
    })

    const filters = useWatch({
        control
    })

    useEffect(() => {
        const params = {}
        Object.entries(filters).forEach(([key, value]) => {
            if (!value || value.length === 0) return
            params[key] = value.join(",")
        })
        setSearchParams(params)
    }, [filters])

    const [categoryTab, setCategoryTab] = useState(false)
    const [brandTab, setBrandTab] = useState(false)
    const [rimDiameterTab, setRimDiameterTab] = useState(false)
    const [profileTab, setProfileTab] = useState(false)
    const [widthTab, setWidthTab] = useState(false)
    const [showFilters, setShowFilters] = useState(true)

    const { data, isLoading } = useTireCatalogQuery(filters)

    const tireSizes = useCatalogStore((state) => state.tireSizes);
    const brands = useCatalogStore((state) => state.brands);

    console.log(brands, tireSizes);

    return {
        showFilters, setShowFilters,
        control,
        filters,
        // isLoadingTireSizes,
        tireSizes,
        brands,
        // isLoadingBrands,

        data,
        brandTab,
        isLoading,
        setBrandTab,
        categoryTab,
        setCategoryTab,

        rimDiameterTab, setRimDiameterTab,
        profileTab, setProfileTab,
        widthTab, setWidthTab,

        cleanParams
    }
}

export default useCatalog
import { useNavigate } from "react-router-dom"
import { useTireSearchBySize } from "../queries/useTireSearchQuery"
import { useForm } from "react-hook-form"
import { useCatalogStore } from "src/store/catalog"

const useTireSearch = () => {

  const navigate = useNavigate()
  const { handleSubmit, control } = useForm()

  const tireSizes = useCatalogStore((state) => state.tireSizes);
  const brands = useCatalogStore((state) => state.brands)

  const onSubmit = (payload) => {

    const params = new URLSearchParams()

    if (payload.width) {
      params.append("width", payload.width)
    }

    if (payload.aspect_ratio) {
      params.append("profile", payload.aspect_ratio)
    }

    if (payload.rim_diameter) {
      params.append("rim", payload.rim_diameter)
    }

    if (payload.brand) {
      params.append("brand", payload.brand)
    }

    navigate(`/catalogo?${params.toString()}`)
  }

  return {
    brands,
    control,
    onSubmit,
    tireSizes,
    handleSubmit
  }
}

export default useTireSearch
import { useParams } from "react-router-dom"
import { useTireDetailQuery } from "../queries/tire.query"
import useCart from "../cart/hooks/useCart"
import { useState } from "react"

const useTireDetail = () => {

  const { slug } = useParams()

  const { data: { tire, related } = {}, isLoading, } = useTireDetailQuery(slug)

  const [quantity, setQuantity] = useState(1)

  const handleChange = (newQty) => {
    console.log('acción');
    
    setQuantity(newQty);
  };

  const { addItem, isLoading: isLoadingChangeQty } = useCart()

  const handleAddToCart = async () => {
    if (!tire?.id) return

    await addItem(tire.id, quantity)
  }

  return {
    quantity,
    isLoading,
    tire: tire,
    handleChange,
    handleAddToCart,
    related: related,
    isLoadingChangeQty
  }
}

export default useTireDetail
import { useNavigate } from 'react-router-dom'
import { useAddToCartQuery, useCartQuery, useClearCartQuery, useRemoveCartItemQuery, useUpdateCartItemQuery } from '../queries/cart.query'

const useCart = () => {

  const navigate = useNavigate()

  const addMutation = useAddToCartQuery()
  const removeItemMutation = useRemoveCartItemQuery()
  const updatetMutation = useUpdateCartItemQuery()
  const clearMutation = useClearCartQuery()

  const { data: cart, isLoading } = useCartQuery()

  const addItem = (itemId, quantity = 1) => {
    return addMutation.mutateAsync({ itemId, quantity })
  }

  const updateItem = (itemId, quantity) => {
    return updatetMutation.mutateAsync({ itemId, quantity })
  }

  const removeItem = (id) => {
    return removeItemMutation.mutateAsync(id)
  }

  const clearCart = () => {
    return clearMutation.mutateAsync();
  };

  const handleContinue = () => {
    navigate('/checkout/shipping')
  }

  return {
    cart,
    isLoading: isLoading || removeItemMutation.isPending || addMutation.isPending || updatetMutation.isPending || clearMutation.isPending,
    addItem,
    updateItem,
    removeItem,
    clearCart,
    handleContinue
  }
}

export default useCart
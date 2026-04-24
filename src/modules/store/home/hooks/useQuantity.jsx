import { useCallback, useState } from "react";

const useQuantity = ({
  initial = 1,
  min = 1,
  max = Infinity,
  value,
  onChange = () => { }
}) => {

  const isControlled = value != undefined;

  const [internalQuantity, setInternalQuantity] = useState(initial);

  const quantity = isControlled ? value : internalQuantity

  const updateQuantity = useCallback((newQuantity) => {
    if (newQuantity < min || newQuantity > max) return

    if (!isControlled) {
      setInternalQuantity(newQuantity)
    }

    if (onChange) {
      onChange(newQuantity)
    }

  }, [isControlled, onChange, min, max])

  const increment = useCallback(() => {
    updateQuantity(quantity + 1);
  }, [quantity, updateQuantity]);

  const decrement = useCallback(() => {
    updateQuantity(quantity - 1);
  }, [quantity, updateQuantity]);


  return {
    quantity,
    increment,
    decrement,
    isMin: quantity <= min,
    isMax: quantity >= max,
  }
}

export default useQuantity
import { useEffect, useState } from "react"

const useCartItem = ({
    item = null,
    onUpdate = () => { }
}) => {

    const [quantity, setQuantity] = useState(item?.quantity)

    useEffect(() => {
        setQuantity(item?.quantity)
    }, [item?.quantity])

    useEffect(() => {

        const timer = setTimeout(() => {

            if (quantity !== item?.quantity) {
                onUpdate(item.tire.id, quantity)
            }

        }, 500)

        return () => clearTimeout(timer)

    }, [quantity])

    return {
        quantity,
        setQuantity
    }
}

export default useCartItem
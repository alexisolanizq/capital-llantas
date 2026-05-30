import React from 'react'
import useAuthStore from 'src/store/authStore'
import { useOrdersQuery } from '../queries/order.query'
import { useLocation } from 'react-router-dom'

const useUserOrders = () => {

    const location = useLocation()

    const user = useAuthStore((state) => state.user)

    const {data: orders, isLoading} = useOrdersQuery()

    return {
        user,
        orders,
        location,
        isLoading,
    }
}

export default useUserOrders
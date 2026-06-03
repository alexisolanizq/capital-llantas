import React from 'react'
import useAuthStore from 'src/store/authStore'
import { useOrdersQuery } from '../queries/order.query'
import { useLocation } from 'react-router-dom'

const useUserOrders = () => {

    const location = useLocation()

    const {data: orders, isLoading} = useOrdersQuery()

    return {
        orders,
        location,
        isLoading,
    }
}

export default useUserOrders
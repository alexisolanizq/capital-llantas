import React from 'react'
import StoreNavbar from '../store/components/StoreNavbar'
import StoreFooter from '../store/components/StoreFooter'
import { Outlet } from 'react-router-dom'

const UserGeneralLayout = () => {
    return (
        <>
            <StoreNavbar />
            <Outlet />
            <StoreFooter />
        </>
    )
}

export default UserGeneralLayout
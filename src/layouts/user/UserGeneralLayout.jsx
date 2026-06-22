import React from 'react'
import StoreNavbar from '../store/components/StoreNavbar'
import StoreFooter from '../store/components/StoreFooter'
import { Outlet } from 'react-router-dom'
import Grid from 'src/shared/components/ui/Grid'
import GridItem from 'src/shared/components/ui/GridItem'
import UserInfo from 'src/modules/user/auth/components/UserInfo'
import Section from 'src/components/store-ui/Section'

const UserGeneralLayout = () => {
    return (
        <>
            <StoreNavbar />
            <Section>
                <Grid cols={{ lg: 4 }} gap={{ base: 'lg', lg: '2xl' }}>
                    <GridItem colSpan={{ lg: 1 }} className="bg-red-200">
                        <UserInfo />
                    </GridItem>
                    <GridItem colSpan={{ lg: 3 }} className="bg-blue-200">
                        <Outlet />
                    </GridItem>
                </Grid>
            </Section>
            <StoreFooter />
        </>
    )
}

export default UserGeneralLayout
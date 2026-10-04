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
                    <GridItem className="lg:col-span-1">
                        <UserInfo />
                    </GridItem>
                    <GridItem className="lg:col-span-3">
                        <Outlet />
                    </GridItem>
                </Grid>
            </Section>
            <StoreFooter />
        </>
    )
}

export default UserGeneralLayout
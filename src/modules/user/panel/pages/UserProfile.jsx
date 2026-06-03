import React from 'react'
import { Card } from 'src/shared/components/ui/Card'
import Grid from 'src/shared/components/ui/Grid'
import GridItem from 'src/shared/components/ui/GridItem'

const UserProfile = () => {
    return (
        <div className="space-y-6">
            <h3 className="font-bold text-2xl">Mis Pedidos</h3>
            <div className="space-y-6">
                <Card>
                    <Card.Header title="Información Personal" />
                    <Card.Content>
                    </Card.Content>
                </Card>
            </div>
            <Grid cols={{ lg: 3 }} gap="lg">
                <Card className="text-center">
                    <p className="font-bold text-3xl text-accent">0</p>
                    <p className='text-sm text-muted'>Pedidos totales</p>
                </Card>
                <Card className="text-center">
                    <p className="font-bold text-3xl text-success">0</p>
                    <p className='text-sm text-muted'>Entregados</p>
                </Card>
                <Card className="text-center">
                    <p className="font-bold text-3xl text-secondary">0</p>
                    <p className='text-sm text-muted'>En proceso</p>
                </Card>
            </Grid>
        </div>
    )
}

export default UserProfile
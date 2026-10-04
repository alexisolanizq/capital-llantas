import React from 'react'
import { Card } from 'src/shared/components/ui/Card'
import Grid from 'src/shared/components/ui/Grid'
import GridItem from 'src/shared/components/ui/GridItem'
import useUserProfile from '../hooks/useUserProfile'
import Form from 'src/shared/components/form/Form'
import TextFieldController from 'src/shared/components/form/TextFieldController'
import Flex from 'src/shared/components/ui/Flex'
import Button from 'src/shared/components/ui/Button'

const UserProfile = () => {

    const { orders, handleSubmit, control, onSubmit } = useUserProfile()

    return (
        <div className="space-y-6">
            <div className="space-y-6">
                <Card>
                    <Card.Header title="Información Personal" />
                    <Card.Content>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Header title="Cambiar contraseña" />
                    <Card.Content>
                        <Form hideButtons onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
                            <Flex>
                                <TextFieldController control={control} name='current_password' label='Contraseña actual' placeholder='******' rules={{ required: "Campo obligatorio" }} />
                                <TextFieldController control={control} name='new_password' label='Nueva contraseña' placeholder='******' rules={{ required: "Campo obligatorio" }} />
                            </Flex>
                            <Button type='submit'>
                                Enviar
                            </Button>
                        </Form>
                    </Card.Content>
                </Card>
            </div>
            <Grid cols={{ lg: 4 }} gap="lg">
                {
                    orders?.total && (
                        <Card className="text-center">
                            <p className="font-bold text-3xl text-accent">{orders?.total}</p>
                            <p className='text-sm text-muted'>Pedidos totales</p>
                        </Card>

                    )}
                {
                    orders?.orders?.paid && (
                        <Card className="text-center">
                            <p className="font-bold text-3xl text-success">{orders?.orders?.paid}</p>
                            <p className='text-sm text-muted'>Pagados</p>
                        </Card>
                    )}
                {
                    orders?.orders?.payment_pending && (
                        <Card className="text-center">
                            <p className="font-bold text-3xl text-secondary">{orders?.orders.payment_pending}</p>
                            <p className='text-sm text-muted'>Pendientes de pago</p>
                        </Card>
                    )
                }
                {
                    orders?.orders?.pending && (
                        <Card className="text-center">
                            <p className="font-bold text-3xl text-danger">{orders?.orders.pending}</p>
                            <p className='text-sm text-muted'>Cancelados</p>
                        </Card>
                    )
                }
            </Grid>
        </div>
    )
}

export default UserProfile
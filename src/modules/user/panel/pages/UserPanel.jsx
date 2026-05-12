import React from 'react'
import Section from 'src/components/store-ui/Section'
import Button from 'src/shared/components/ui/Button'

const UserPanel = () => {
    return (
        <Section>
            <div className="grid lg:grid-cols-4 items-start">
                <div className="lg:col-span-1">
                    <div className="bg-inverse shadow rounded border border-line p-4"></div>
                </div>
                <div className="lg:col-span-3">
                    <h3>Mis Pedidos</h3>
                    <Button icon='loop-right' variant='flat'>
                        Actualizar
                    </Button>

                </div>
            </div>
        </Section>
    )
}

export default UserPanel
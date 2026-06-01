import React from 'react'
import Section from 'src/components/store-ui/Section'
import Container from 'src/shared/components/ui/Container'
import GradientBlock from 'src/shared/components/ui/GradientBlock'
import Grid from 'src/shared/components/ui/Grid'
import GridItem from 'src/shared/components/ui/GridItem'
import historyImage from '/public/history.webp'

const History = () => {
    return (
        <>
            <GradientBlock legend="Información de envío" description="Equipando a México con las mejores llantas del mundo" />
            <Section>
                <Grid cols={{ base: 1, lg: 2 }} >
                    <GridItem>
                        <Container>
                            <h2 className='font-bold text-3xl sm:text-4xl text-primary mb-6'>Nuestra Historia</h2>
                            <div className="space-y-4 text-muted leading-relaxed">
                                <p>Capital Llantas nace con el objetivo de ofrecer a nuestros clientes una alternativa confiable, accesible y moderna para la compra de llantas en línea.</p>
                                <p>Somos una empresa emergente que busca abrirse camino en un mercado altamente competitivo, apostando por la calidad de nuestros productos, la atención personalizada y la transparencia en cada compra. Entendemos que elegir las llantas adecuadas es una decisión importante para la seguridad y el desempeño de cualquier vehículo, por lo que trabajamos para ofrecer productos de marcas reconocidas, precios competitivos y una experiencia de compra sencilla.</p>
                                <p>Aunque somos una empresa joven, nuestro compromiso es construir relaciones duraderas con nuestros clientes mediante un servicio honesto, responsable y enfocado en sus necesidades.</p>
                                <p>Cada pedido representa una oportunidad para demostrar que una empresa nueva puede ofrecer el mismo nivel de confianza y profesionalismo que las compañías más consolidadas del sector.</p>
                            </div>
                        </Container>
                    </GridItem>
                    <GridItem>
                        <img src={historyImage} alt="Imagen de la historia de la empresa" className='rounded-2xl shadow-xl' />
                    </GridItem>
                </Grid>
            </Section>
        </>
    )
}

export default History
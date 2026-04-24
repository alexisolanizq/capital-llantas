import React from 'react'
import { Link } from 'react-router-dom'
import Section from 'src/components/store-ui/Section'
import tractor from '/public/tractor.webp'
import car from '/public/car.webp'
import truck from '/public/truck.webp'


const CategoryCards = () => {
    return (
        <Section title="Explora Por Tipo de Llanta" description='Tenemos la llanta perfecta para cada tipo de manejo y vehículo'>
            <div className="grid lg:grid-flow-col lg:grid-rows-2 gap-4">
                
                <div className='row-span-1 lg:row-span-2 relative group overflow-hidden rounded-2xl'>
                    <img src={tractor} alt="Tractor" className='w-full lg:h-full group-hover:scale-110 transition-transform' />
                    <div className='absolute bottom-5 lg:bottom-10 left-5 lg:left-10 flex flex-col items-start gap-2'>
                        <h2 className='text-inverse text-lg lg:text-3xl font-semibold'>Agrícola/Forestal</h2>
                        <p className='text-inverse text-sm font-light'>Tracción fuerte para campo y bosque</p>
                        <Link to='catalogo?categoria=agricola' className='text-secondary font-medium text-sm lg:text-lg'>
                            Ver más
                            <i className='ri-arrow-right-line' />
                        </Link>
                    </div>
                </div>

                <div className='relative group overflow-hidden rounded-2xl'>
                    <img src={car} alt="Car" className='w-full group-hover:scale-110 transition-transform' />
                    <div className='absolute bottom-5 lg:top-10 left-5 lg:right-10 flex flex-col items-start lg:items-end gap-2'>
                        <h2 className='text-inverse text-3xl font-semibold'>Vehículo</h2>
                        <p className='text-inverse text-sm font-light'>Seguridad y confort para tu vehículo</p>
                        <Link to='catalogo?categoria=vehiculo' className='text-secondary font-medium text-sm lg:text-lg'>
                            Ver más
                            <i className='ri-arrow-right-line' />
                        </Link>
                    </div>
                </div>

                <div className='relative group overflow-hidden rounded-2xl'>
                    <img src={truck} alt="Truck" className='w-full group-hover:scale-110 transition-transform' />
                    <div className='absolute bottom-5 lg:bottom-10 left-5 lg:left-10 flex flex-col items-start gap-2'>
                        <h2 className='text-inverse text-3xl font-semibold'>Camión</h2>
                        <p className='text-inverse text-sm font-light'>Resistencia y alto rendimiento en carga</p>
                        <Link to='catalogo?categoria=camion' className='text-secondary font-medium text-sm lg:text-lg'>
                            Ver más
                            <i className='ri-arrow-right-line' />
                        </Link>
                    </div>
                </div>

            </div>
        </Section>
    )
}

export default CategoryCards
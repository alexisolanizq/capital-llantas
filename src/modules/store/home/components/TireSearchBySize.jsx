import React from 'react'
import Form from 'src/shared/components/form/Form'
import Button from 'src/shared/components/ui/Button'
import useTireSearch from '../hooks/useTireSearch'
import SelectController from 'src/shared/components/form/SelectController'

const TireSearchBySize = () => {

    const { tireSizes, onSubmit, handleSubmit, control } = useTireSearch()

    return (
        <Form grids={4} onSubmit={handleSubmit(onSubmit)}>
            <SelectController control={control} name='width' label="Ancho" options={tireSizes?.widths} />
            <SelectController control={control} name='aspect_ratio' label="Perfil" options={tireSizes?.aspect_ratio} />
            <SelectController control={control} name='rim_diameter' label="Rin" options={tireSizes?.rim_diameters} />
            <Button type='submit' variant='outline' fullWidth className='self-end'>Consultar</Button>
        </Form>
    )
}

export default TireSearchBySize
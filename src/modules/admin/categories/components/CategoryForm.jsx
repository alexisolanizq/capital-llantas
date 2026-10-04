import React from 'react'
import Form from 'src/shared/components/form/Form'
import useCategoryForm from '../hooks/useCategoryForm'
import TextFieldController from 'src/shared/components/form/TextFieldController'
import FileDropZoneController from 'src/components/admin-ui/form/FileDropZoneController'
import SwitchController from 'src/shared/components/form/SwitchController'
import FormRow from 'src/shared/components/form/FormRow'
import MultiSelectController from 'src/shared/components/form/MultiSelectController'

const CategoryForm = ({
    onEnd,
    onCancel,
    isUpdate,
    row = null,
}) => {

    const { errors, control, onSubmit, handleSubmit, isLoading } = useCategoryForm({ isUpdate, row, onEnd })

    return (
        <Form onSubmit={handleSubmit(onSubmit)} errors={errors} onCancel={onCancel} isLoading={isLoading}>
            <TextFieldController control={control} name='name' label='Nombre' placeholder='Ej. Llantas, Rines, Herramientas' className='mb-4' />
            <FileDropZoneController control={control} name="default_image" label="Imagen por defecto" className='mb-4' />
            <SwitchController control={control} name='is_active' label='Mostrar' />
        </Form>
    )
}

export default CategoryForm
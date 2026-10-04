import React from 'react'
import Form from 'src/shared/components/form/Form'
import useProductForm from '../hooks/useProductForm'
import SelectController from 'src/shared/components/form/SelectController'
import FormRow from 'src/shared/components/form/FormRow'
import TextFieldController from 'src/shared/components/form/TextFieldController'
import FileDropZoneController from 'src/components/admin-ui/form/FileDropZoneController'
import SwitchController from 'src/shared/components/form/SwitchController'

const ProductForm = ({
    onCancel,
    onEnd,
    isUpdate = false,
    row = null
}) => {

    const { control, errors, handleSubmit, onSubmit, categories, isLoadingCategories, brands, isLoadingBrands, isLoadingTireSizes, tireSizes } = useProductForm({ row, onEnd, isUpdate })

    return (
        <Form onSubmit={handleSubmit(onSubmit)} errors={errors} onCancel={onCancel}>
            <h3 className="text-lg font-bold mb-4">Información General</h3>
            <FormRow className="mb-4">
                <SelectController control={control} name="category_id" options={categories} label="Categoría" placeholder="Selecciona..." />
                <SelectController control={control} name="brand_id" options={brands} label="Marca" placeholder="Selecciona..." multiple={true} />
            </FormRow>
            <FormRow className="mb-4">
                <TextFieldController control={control} name="model_name" label="Modelo del Producto" placeholder="Ej. Discoverer AT3" />
                <TextFieldController control={control} name="sku" label="SKU / Número de Parte" placeholder="SKU" />
            </FormRow>

            <FormRow className="mb-4">
                <TextFieldController control={control} name="price" label="Precio" placeholder="$" type="number" />
                <TextFieldController control={control} name="stock" label="Stock" placeholder="Existencia" type="number" />
                <TextFieldController control={control} name="in_transit" label="En Tránsito" placeholder="0" type="number" />
            </FormRow>

            {
                // selectedCategorySlug === 'llantas' && 
                (
                    <>
                        <h3 className="text-lg font-bold mb-4 mt-6">Dimensiones de la Llanta</h3>
                        <FormRow className="mb-4">
                            <SelectController control={control} name="width" options={tireSizes?.widths} label="Ancho" placeholder="Ancho" />
                            <SelectController control={control} name="aspect_ratio" options={tireSizes?.aspect_ratio} label="Radio" placeholder="Radio" />
                            <SelectController control={control} name="rim_diameter" options={tireSizes?.rim_diameters} label="Rin" placeholder="Rin" />
                        </FormRow>
                    </>
                )}



            <h3 className="text-lg font-bold mb-4 mt-6">Imágenes y Visibilidad</h3>
            <FileDropZoneController className="mb-4" name="images" control={control} label="Imágenes (Máx. 3)" />

            <FormRow className="mb-4">
                <SwitchController control={control} name="is_priority" label="Destacar en Inicio" />
                <SwitchController control={control} name="is_active" label="Activo en Tienda" />
            </FormRow>
        </Form>
    )
}

export default ProductForm
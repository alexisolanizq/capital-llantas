import Form from "src/shared/components/form/Form"
import useTireForm from "../hooks/useTireForm"
import FormRow from "src/shared/components/form/FormRow"
import SelectController from "src/shared/components/form/SelectController"
import TextFieldController from "src/shared/components/form/TextFieldController"
import FileDropZoneController from "src/components/admin-ui/form/FileDropZoneController"
import SwitchController from "src/shared/components/form/SwitchController"

const TireForm = ({
    onEnd,
    onCancel,
    isUpdate,
    row = null,
}) => {

    const { control, errors, handleSubmit, onSubmit, brands, tireSizes } = useTireForm({ row, isUpdate, onEnd })

    return (
        <Form onSubmit={handleSubmit(onSubmit)} errors={errors} onCancel={onCancel}>
            <FormRow className="mb-4">
                <SelectController control={control} name="brand_id" options={brands} label="Marcas" placeholder="Marcas" />
                <TextFieldController control={control} name="model_name" label="Modelo" placeholder="Modelo" />
            </FormRow>
            <TextFieldController control={control} name="part_number" label="Número de parte" placeholder="Número de parte" className="mb-4" />
            <FormRow className="mb-4">
                <TextFieldController control={control} name="price" label="Precio" placeholder="$" />
                <TextFieldController control={control} name="stock" label="Stock" placeholder="Existencia" />
                <TextFieldController control={control} name="type" label="Tipo" placeholder="Tipo" />
            </FormRow>
            <FormRow className="mb-4">
                <SelectController control={control} name="width" options={tireSizes?.widths} label="Ancho" placeholder="Ancho" />
                <SelectController control={control} name="aspect_ratio" options={tireSizes?.aspect_ratio} label="Radio" placeholder="Radio" />
                <SelectController control={control} name="rim_diameter" options={tireSizes?.rim_diameters} label="Rin" placeholder="Rin" />
            </FormRow>
            <FormRow className="mb-4">
                <TextFieldController control={control} name="speed_rating" label="Indice de velocidad" placeholder="Ej. V" />
                <TextFieldController control={control} name="load_index" label="Indice de carga" placeholder="Ej. 91" />
            </FormRow>
            <FileDropZoneController className="mb-4" name="images" control={control} label="Imagenes" />
            <SwitchController className="mb-4" control={control} name="is_priority" label="Prioridad" />
            <SwitchController className="mb-4" control={control} name="is_active" label="Mostrar" />
        </Form>
    )
}

export default TireForm
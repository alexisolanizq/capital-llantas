import Form from "src/shared/components/form/Form"
import useTireForm from "../hooks/useTireForm"
import FormRow from "src/shared/components/form/FormRow"
import SelectController from "src/shared/components/form/SelectController"
import TextFieldController from "src/shared/components/form/TextFieldController"
import FileDropZoneController from "src/components/admin-ui/form/FileDropZoneController"

const TireForm = ({
    onEnd,
    onCancel,
    isUpdate,
    row = null,
}) => {

    const { control, errors, handleSubmit, onSubmit, brands } = useTireForm({ row, isUpdate, onEnd })

    return (
        <Form onSubmit={handleSubmit(onSubmit)} errors={errors}>
            <FormRow className="mb-4">
                <SelectController control={control} name="brand_id" options={brands} label="Marcas" placeholder="Marcas" />
                <TextFieldController control={control} name="model_name" label="Modelo" placeholder="Modelo" />
            </FormRow>
            <TextFieldController control={control} name="part_number" label="Número de parte" placeholder="Número de parte" />
            <FileDropZoneController name="images" control={control}/>
        </Form>
    )
}

export default TireForm
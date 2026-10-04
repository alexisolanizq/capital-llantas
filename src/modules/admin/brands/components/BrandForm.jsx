import Form from "src/shared/components/form/Form"
import useBrandForm from "../hooks/useBrandForm"
import TextFieldController from "src/shared/components/form/TextFieldController"
import FormRow from "src/shared/components/form/FormRow"
import FileDropZoneController from "src/components/admin-ui/form/FileDropZoneController"
import SwitchController from "src/shared/components/form/SwitchController"

const BrandForm = ({
    onEnd,
    onCancel,
    isUpdate,
    row = null,
}) => {

    const { errors, control, onSubmit, handleSubmit } = useBrandForm({ isUpdate, row, onEnd })

    return (
        <Form onSubmit={handleSubmit(onSubmit)} errors={errors} onCancel={onCancel}>
            <FormRow className="mb-4">
                <TextFieldController name="name" label="Nombre" placeholder="Marca" control={control} />
                <TextFieldController name="slug" label="Slug (opcional)" placeholder="auto" control={control} isDisabled />
            </FormRow>
            <FileDropZoneController name="logo" control={control} className="mb-4" label="Imagen" />
            <SwitchController control={control} name="is_active" label="Mostrar" />
        </Form>
    )
}

export default BrandForm
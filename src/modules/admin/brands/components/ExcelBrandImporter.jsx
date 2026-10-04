import Form from "src/shared/components/form/Form"
import useExcelBrandImporter from "../hooks/useExcelBrandImporter"
import FileDropZoneController from "src/components/admin-ui/form/FileDropZoneController"

const ExcelBrandImporter = ({ onCancel }) => {

    const { control, errors, onSubmit, handleSubmit } = useExcelBrandImporter()

    return (
        <Form onSubmit={handleSubmit(onSubmit)} errors={errors}>
            <FileDropZoneController name="file" control={control} />
        </Form>
    )
}

export default ExcelBrandImporter
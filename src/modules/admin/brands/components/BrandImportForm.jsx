import FileDropZoneController from "src/components/admin-ui/form/FileDropZoneController"
import Form from "src/shared/components/form/Form"
import Badge from "src/shared/components/ui/Badge"
import Flex from "src/shared/components/ui/Flex"
import useExcelBrandImporter from "../hooks/useExcelBrandImporter"
import ButtonsForm from "src/components/admin-ui/form/ButtonsForm"

const BrandImportForm = ({ onCancel }) => {

    const { control, handleSubmit, onSubmit } = useExcelBrandImporter()

    return (
        <>
            <div className="rounded-xl border border-accent-soft bg-accent/5 p-4 mb-4">
                <div className="flex items-start gap-3">
                    <Badge variant="pagado">
                        1
                    </Badge>
                    <Flex grow direction="col" items="start" gap="xs">
                        <p className="font-semibold mb-1">
                            Descarga la plantilla de importación de marcas
                        </p>
                        <p>
                            Usa el archivo .xlsx con los encabezados correctos. Rellena los datos, guarda y súbelo abajo.
                        </p>
                    </Flex>
                </div>
            </div>

            <Form onSubmit={handleSubmit(onSubmit)} hideButtons onCancel={onCancel}>
                <div className="rounded-xl border border-secondary-soft bg-secondary/5 p-4">
                    <div className="flex items-start gap-3">
                        <Badge>
                            2
                        </Badge>
                        <Flex grow direction="col" items="start" gap="xs">
                            <p className="font-semibold mb-1">
                                Sube el archivo con los datos a insertar
                            </p>
                            <p>
                                Solo archivos .xlsx y .zip (máx 10 MB)
                            </p>
                            <FileDropZoneController control={control} name="file" rules={{ required: "Debes subir al menos el archivo Excel." }} />
                        </Flex>
                    </div>
                </div>
                <ButtonsForm onCancel={onCancel} />
            </Form>
        </>
    )
}

export default BrandImportForm
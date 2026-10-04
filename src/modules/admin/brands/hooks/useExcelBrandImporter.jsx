import { useForm } from "react-hook-form"
import { objectToFormData } from "src/utils/formData"

const useExcelBrandImporter = () => {

    const { control, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (body) => {

        const data = objectToFormData()

        const files = data.files || []

        const excelFile = files.find(f => f.name.match(/\.(xlsx|xls|csv)$/i));
        const zipFile = files.find(f => f.name.match(/\.(zip)$/i));

        if (!excelFile) {
            return
        }

        data.append('file', excelFile)

        if (zipFile) {
            data.append('zip_file', zipFile)
        }

    }

    return {
        errors,
        control,
        onSubmit,
        handleSubmit
    }
}

export default useExcelBrandImporter
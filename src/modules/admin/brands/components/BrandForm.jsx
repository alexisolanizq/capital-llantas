import Form from "src/shared/components/form/Form"
import Flex from "src/shared/components/ui/Flex"
import useBrandForm from "../hooks/useBrandForm"
import SelectController from "src/shared/components/form/SelectController"
import TextFieldController from "src/shared/components/form/TextFieldController"
import FormRow from "src/shared/components/form/FormRow"

const BrandForm = ({
    onEnd,
    onCancel,
    isUpdate,
    row = null,
}) => {

    const { errors, control, onSubmit, handleSubmit, brands } = useBrandForm({ isUpdate, row, onEnd })

    return (
        <Form onSubmit={handleSubmit(onSubmit)} errors={errors} >
            
        </Form>
    )
}

export default BrandForm
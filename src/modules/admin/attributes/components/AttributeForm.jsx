import Form from "src/shared/components/form/Form"
import FormRow from "src/shared/components/form/FormRow"
import TextFieldController from "src/shared/components/form/TextFieldController"
import useAttributeForm from "../hooks/useAttributeForm"
import SelectController from "src/shared/components/form/SelectController"
import RelationFieldController from "src/shared/components/form/RelationFieldController"

const AttributeForm = ({ onEnd, onCancel, isUpdate, row = null }) => {

    const { categories, control, errors, handleSubmit, onSubmit, types, isLoadingMutation } = useAttributeForm({ row, isUpdate, onEnd })

    return (
        <Form onSubmit={handleSubmit(onSubmit)} onCancel={onCancel} errors={errors} isLoading={isLoadingMutation}>
            <FormRow className="mb-4">
                <TextFieldController name="name" label="Nombre" placeholder="Nombre" control={control} rules={{ required: "Campo requerido" }} />
                <TextFieldController name="code" label="Código" placeholder="Ej. medida, indice, peso, ..." control={control} />
            </FormRow>

            <SelectController keyValue="value" keyLabel="label" name="type" control={control} label="Tipo" options={types} placeholder="Selecciona un elemento" className="mb-4" />

            <RelationFieldController
                control={control}
                name="categories"
                label="Aplica a categorías"
                description="Selecciona las categorías donde estará disponible este atributo."
                options={categories}
                optionValueKey="id"
                optionLabelKey="name"
                optionIconKey="icon"
                valueKey="category_id"
                fields={[
                    {
                        name: "is_required",
                        type: "switch",
                        label: "Requerido",
                        defaultValue: false,
                    },
                ]}
            />

        </Form>
    )

}

export default AttributeForm
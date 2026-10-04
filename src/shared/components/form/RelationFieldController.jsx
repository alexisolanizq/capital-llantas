import { Controller } from "react-hook-form"
import RelationField from "./RelationField"

const RelationFieldController = ({
    control,
    name,
    rules,
    defaultValue = [],
    ...props
}) => {

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field, fieldState }) => (
                <RelationField
                    {...props}
                    value={field.value ?? []}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                />
            )}
        />
    )
}

export default RelationFieldController
import { Controller } from "react-hook-form"
import TextField from "src/shared/components/form/TextField"

const TextFieldController = ({
    control,
    name = '',
    placeholder = 'Buscar',
    withIcon = true,
    type = "text",
    rules = {},
    defaultValue = "",
}) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    value={field.value || defaultValue || ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    name={name}
                    withIcon={withIcon}
                    type={type}
                    placeholder={placeholder}
                />
            )}
        />
    )
}

export default TextFieldController
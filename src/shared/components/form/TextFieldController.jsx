import { Controller } from "react-hook-form"
import TextField from "src/shared/components/form/TextField"

const TextFieldController = ({
    control,
    name = '',
    placeholder = 'Buscar',
    className = "",
    type = "text",
    label = "",
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
                    label={label}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className={className}
                />
            )}
        />
    )
}

export default TextFieldController
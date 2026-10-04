import { Controller } from "react-hook-form";
import Switch from "./Switch";

const SwitchController = ({
    control,
    name = "",
    label = "",
    description = "",
    hint = "",
    size = "md",
    rules = {},
    defaultValue = false,
    disabled = false,
    className = "",
}) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field, fieldState: { error } }) => (
                <Switch
                    className={className}
                    name={name}
                    label={label}
                    description={description}
                    hint={hint}
                    size={size}
                    disabled={disabled}
                    checked={!!field.value}
                    error={error?.message}
                    onBlur={field.onBlur}
                    onChange={(e) => field.onChange(e.target.checked)}
                />
            )}
        />
    );
};

export default SwitchController;
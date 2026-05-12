import { cn } from "src/utils";
import { CONTROL_SIZES } from "src/utils/styles/forms";

const Select = ({
    label,
    error,
    hint,

    size = "md",

    name = "",
    placeholder = "Seleccione",

    options = [],
    keyValue = "id",
    keyLabel = "name",

    className = "",

    value,
    onChange,
    onBlur,
}) => {
    return (
        <div className={cn("flex flex-col gap-2", className)}>
            {label && (
                <label
                    htmlFor={name}
                    className="text-sm font-medium text-main"
                >
                    {label}
                </label>
            )}

            <select
                id={name}
                name={name}
                value={value || ""}
                onChange={onChange}
                onBlur={onBlur}
                className={cn(
                    `
            w-full
            bg-surface
            border-2
            border-line
            text-main
            outline-none
            transition-all
            focus:border-secondary
            focus:ring-4
            focus:ring-secondary/10
          `,
                    CONTROL_SIZES[size],

                    error &&
                    `
              border-danger
              focus:ring-danger/10
            `
                )}
            >
                <option value="">
                    {placeholder}
                </option>

                {options.map((option, index) => {
                    const val = option?.[keyValue] ?? option;
                    const label = option?.[keyLabel] ?? option;

                    return (
                        <option
                            key={val ?? index}
                            value={val}
                        >
                            {label}
                        </option>
                    );
                })}
            </select>

            {error && (
                <p className="text-sm text-danger">
                    {error}
                </p>
            )}

            {!error && hint && (
                <p className="text-sm text-muted">
                    {hint}
                </p>
            )}
        </div>
    );
};

export default Select;
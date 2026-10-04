
const RelationField = ({
    value = [],
    onChange,
    options = [],

    optionValueKey = "id",
    optionLabelKey = "name",
    optionIconKey = "icon",

    valueKey = "id",

    fields = [],

    label,
    description,
    emptyMessage = "No hay opciones disponibles.",

    disabled = false,
    className = "",
}) => {

    const getOptionValue = (option) => {
        return option[optionValueKey]
    }

    const getOptionLabel = (option) => {
        return option[optionLabelKey]
    }

    const getOptionIcon = (option) => {
        return option[optionIconKey]
    }

    const getRelation = (option) => {

        const optionValue =
            getOptionValue(option)

        return value.find(
            item =>
                String(item[valueKey]) ===
                String(optionValue)
        )
    }

    const isSelected = (option) => {
        return Boolean(getRelation(option))
    }

    const getDefaultFields = () => {

        return fields.reduce(
            (result, field) => {

                if (
                    field.defaultValue !== undefined
                ) {
                    result[field.name] =
                        field.defaultValue
                }

                return result
            },
            {}
        )
    }

    /**
     * Select a relation.
     */
    const handleSelect = (option) => {

        if (disabled) {
            return
        }

        const optionValue =
            getOptionValue(option)

        const existingRelation =
            getRelation(option)

        /*
         * If already selected,
         * clicking the badge does nothing.
         *
         * Removal is handled by the X button.
         */
        if (existingRelation) {
            return
        }

        onChange([
            ...value,
            {
                [valueKey]: optionValue,
                ...getDefaultFields(),
            },
        ])
    }

    /**
     * Remove a relation.
     */
    const handleRemove = (option) => {

        if (disabled) {
            return
        }

        const optionValue =
            getOptionValue(option)

        onChange(
            value.filter(
                item =>
                    String(item[valueKey]) !==
                    String(optionValue)
            )
        )
    }

    /**
     * Update an additional field
     * belonging to a relation.
     */
    const handleFieldChange = (
        option,
        field,
        newValue
    ) => {

        const optionValue =
            getOptionValue(option)

        onChange(
            value.map(item => {

                if (
                    String(item[valueKey]) !==
                    String(optionValue)
                ) {
                    return item
                }

                return {
                    ...item,
                    [field.name]: newValue,
                }
            })
        )
    }

    /**
     * Render an additional relation field.
     */
    const renderField = (
        option,
        relation,
        field
    ) => {

        const fieldValue =
            relation?.[field.name] ??
            field.defaultValue

        const handleChange = (newValue) => {

            handleFieldChange(
                option,
                field,
                newValue
            )
        }

        switch (field.type) {

            case "switch":

                return (
                    <div
                        key={field.name}
                        className="flex items-center gap-3"
                    >

                        <button
                            type="button"
                            role="switch"
                            aria-checked={Boolean(fieldValue)}
                            disabled={disabled}
                            onClick={() =>
                                handleChange(
                                    !Boolean(fieldValue)
                                )
                            }
                            className={[
                                "relative inline-flex h-6 w-10",
                                "shrink-0 cursor-pointer",
                                "rounded-full transition-colors",
                                "duration-200 ease-in-out",
                                "focus:outline-none",
                                "disabled:cursor-not-allowed",
                                "disabled:opacity-50",
                                Boolean(fieldValue)
                                    ? "bg-slate-900"
                                    : "bg-slate-300",
                            ].join(" ")}
                        >

                            <span
                                className={[
                                    "pointer-events-none",
                                    "absolute top-1",
                                    "h-4 w-4 rounded-full",
                                    "bg-white shadow-md",
                                    "transition-transform",
                                    "duration-200",
                                    Boolean(fieldValue)
                                        ? "translate-x-5"
                                        : "translate-x-1",
                                ].join(" ")}
                            />

                        </button>

                        {field.label && (
                            <span
                                className={[
                                    "text-sm font-medium",
                                    Boolean(fieldValue)
                                        ? "text-orange-600"
                                        : "text-slate-500",
                                ].join(" ")}
                            >
                                {field.label}
                            </span>
                        )}

                    </div>
                )

            case "text":

                return (
                    <div
                        key={field.name}
                        className="flex flex-col gap-1"
                    >

                        {field.label && (
                            <label className="text-sm font-medium" htmlFor={field.name}>
                                {field.label}
                            </label>
                        )}

                        <input
                            id={field.name}
                            type="text"
                            value={fieldValue ?? ""}
                            disabled={disabled}
                            placeholder={
                                field.placeholder
                            }
                            onChange={(event) =>
                                handleChange(
                                    event.target.value
                                )
                            }
                            className={[
                                "rounded-lg border",
                                "border-slate-300",
                                "px-3 py-2",
                                "outline-none",
                                "focus:border-orange-500",
                                "focus:ring-2",
                                "focus:ring-orange-100",
                            ].join(" ")}
                        />

                    </div>
                )

            case "number":

                return (
                    <div
                        key={field.name}
                        className="flex flex-col gap-1"
                    >

                        {field.label && (
                            <label className="text-sm font-medium" htmlFor={field.name}>
                                {field.label}
                            </label>
                        )}

                        <input
                            id={field.name}
                            type="number"
                            value={fieldValue ?? ""}
                            disabled={disabled}
                            placeholder={
                                field.placeholder
                            }
                            onChange={(event) =>
                                handleChange(
                                    event.target.value === ""
                                        ? ""
                                        : Number(
                                            event.target.value
                                        )
                                )
                            }
                            className={[
                                "rounded-lg border",
                                "border-slate-300",
                                "px-3 py-2",
                                "outline-none",
                                "focus:border-orange-500",
                                "focus:ring-2",
                                "focus:ring-orange-100",
                            ].join(" ")}
                        />

                    </div>
                )

            case "select":

                return (
                    <div
                        key={field.name}
                        className="flex flex-col gap-1"
                    >

                        {field.label && (
                            <label className="text-sm font-medium">
                                {field.label}
                            </label>
                        )}

                        <select
                            value={fieldValue ?? ""}
                            disabled={disabled}
                            onChange={(event) =>
                                handleChange(
                                    event.target.value
                                )
                            }
                            className={[
                                "rounded-lg border",
                                "border-slate-300",
                                "px-3 py-2",
                                "outline-none",
                                "focus:border-orange-500",
                                "focus:ring-2",
                                "focus:ring-orange-100",
                            ].join(" ")}
                        >

                            {field.placeholder && (
                                <option value="" disabled>
                                    {field.placeholder}
                                </option>
                            )}

                            {(field.options ?? []).map(
                                option => {

                                    const optionValue =
                                        option[
                                        field.optionValueKey ??
                                        "value"
                                        ]

                                    const optionLabel =
                                        option[
                                        field.optionLabelKey ??
                                        "label"
                                        ]

                                    return (
                                        <option
                                            key={optionValue}
                                            value={optionValue}
                                        >
                                            {optionLabel}
                                        </option>
                                    )
                                }
                            )}

                        </select>

                    </div>
                )

            default:
                return null
        }
    }

    return (
        <div className={className}>

            {/* HEADER */}

            {label && (
                <div className="mb-3">

                    <h3 className="font-semibold text-slate-900">
                        {label}
                    </h3>

                    {description && (
                        <p className="mt-1 text-sm text-slate-500">
                            {description}
                        </p>
                    )}

                </div>
            )}

            {options.length > 0 ? (
                <div className="flex flex-wrap gap-3">

                    {options.map(option => {

                        const selected = isSelected(option)

                        const icon = getOptionIcon(option)

                        return (
                            <button
                                key={
                                    getOptionValue(option)
                                }
                                type="button"
                                disabled={
                                    disabled || selected
                                }
                                onClick={() =>
                                    handleSelect(option)
                                }
                                className={[
                                    "inline-flex",
                                    "items-center",
                                    "gap-2",
                                    "rounded-full",
                                    "border-[1.5px]",
                                    "px-4 py-1.5",
                                    "text-base",
                                    "font-medium",
                                    "transition-all",
                                    "duration-200",

                                    selected
                                        ? [
                                            "border-orange-500",
                                            "bg-orange-500",
                                            "text-white",
                                            "shadow-sm",
                                        ].join(" ")
                                        : [
                                            "border-slate-300",
                                            "bg-white",
                                            "text-slate-700",
                                            "hover:border-orange-400",
                                            "hover:text-orange-600",
                                        ].join(" "),

                                    disabled
                                        ? "cursor-not-allowed opacity-50"
                                        : selected
                                            ? "cursor-default"
                                            : "cursor-pointer",
                                ].join(" ")}
                            >

                                {icon && (
                                    <span className="text-sm">
                                        {icon}
                                    </span>
                                )}

                                <span className="text-sm">
                                    {getOptionLabel(option)}
                                </span>

                            </button>
                        )
                    })}

                </div>

            ) : (

                <p className="text-sm text-slate-500">
                    {emptyMessage}
                </p>

            )}

            {value.length > 0 && (

                <div
                    className={[
                        "mt-6",
                        "rounded-xl",
                        "border",
                        "border-slate-200",
                        "bg-slate-50/40",
                        "p-4",
                    ].join(" ")}
                >

                    <h4 className="mb-4 font-medium text-slate-600">
                        {fields.length > 0
                            ? "Configura por categoría"
                            : "Opciones seleccionadas"
                        }
                    </h4>

                    <div className="space-y-4">

                        {value.map(relation => {
                            const option =
                                options.find(
                                    option =>
                                        String(
                                            getOptionValue(
                                                option
                                            )
                                        ) ===
                                        String(
                                            relation[
                                            valueKey
                                            ]
                                        )
                                )

                            if (!option) {
                                return null
                            }

                            const icon =
                                getOptionIcon(option)

                            return (
                                <div
                                    key={
                                        getOptionValue(
                                            option
                                        )
                                    }
                                    className={[
                                        "flex",
                                        "items-center",
                                        "justify-between",
                                        "gap-4",
                                        "rounded-xl",
                                        "border",
                                        "border-slate-200",
                                        "bg-white",
                                        "px-5 py-2",
                                    ].join(" ")}
                                >

                                    <div className="flex min-w-0 items-center gap-4">

                                        {icon && (
                                            <span className="shrink-0 text-xl">
                                                {icon}
                                            </span>
                                        )}

                                        <span className="truncate text-sm font-medium text-slate-800">
                                            {getOptionLabel(
                                                option
                                            )}
                                        </span>

                                    </div>

                                    {/* FIELDS + REMOVE */}

                                    <div className="flex shrink-0 items-center gap-6">

                                        {fields.map(field =>
                                            renderField(
                                                option,
                                                relation,
                                                field
                                            )
                                        )}

                                        <button
                                            type="button"
                                            disabled={disabled}
                                            onClick={() =>
                                                handleRemove(
                                                    option
                                                )
                                            }
                                            aria-label={`Eliminar ${getOptionLabel(option)}`}
                                            className={[
                                                "flex h-10 w-10",
                                                "items-center",
                                                "justify-center",
                                                "rounded-full",
                                                "text-xl",
                                                "text-slate-400",
                                                "transition-colors",
                                                "hover:bg-slate-100",
                                                "hover:text-slate-600",
                                                "disabled:cursor-not-allowed",
                                                "disabled:opacity-50",
                                            ].join(" ")}
                                        >
                                            <i className="ri-close-line" />
                                        </button>

                                    </div>

                                </div>
                            )
                        })}

                    </div>

                </div>

            )}

        </div>
    )
}

export default RelationField
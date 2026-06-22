import React from 'react'
import { Controller } from 'react-hook-form'
import Select from './Select'

const SelectController = ({
    control,
    name = '',
    label = '',
    placeholder = 'Seleccione',
    options = [],
    keyValue = 'id',
    keyLabel = 'name',
    rules = {},
    defaultValue = "",
    className = ""
}) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field, fieldState: { error } }) => (
                <Select
                    className={className}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    options={options}
                    keyValue={keyValue}
                    keyLabel={keyLabel}

                    value={field.value || ""}
                    onChange={(e) => field.onChange(e.target.value)}
                    onBlur={field.onBlur}
                />
            )}
        />
    )
}

export default SelectController
import React from 'react'
import { Controller } from 'react-hook-form'
import MultiSelect from './MultiSelect'

const MultiSelectController = ({
    control,
    name = '',
    label = '',
    placeholder = 'Selecciona una o más opciones',
    options = [],
    keyValue = 'id',
    keyLabel = 'name',
    rules = {},
    defaultValue = [],
    className = ""
}) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <MultiSelect
                    className={className}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    options={options}
                    keyValue={keyValue}
                    keyLabel={keyLabel}

                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                />
            )}
        />
    )
}

export default MultiSelectController

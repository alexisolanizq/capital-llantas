import React from 'react'
import { Controller } from 'react-hook-form'
import FileDropZone from './FileDropZone'

const FileDropZoneController = ({
    name,
    label,
    control,
    rules = [],
    className = '',
    onChange = () => { }
}) => (
    <Controller
        name={name}
        rules={rules}
        control={control}
        render={({
            field: { onChange: onChangeField, value, name, ref },
            fieldState: { error }
        }) => (
            <FileDropZone
                label={label}
                className={className}
                onChange={(e) => {
                    onChange(e)
                    onChangeField(e)
                }}
                value={value}
                name={name}
                error={error}
            />
        )}
    />
)

export default FileDropZoneController
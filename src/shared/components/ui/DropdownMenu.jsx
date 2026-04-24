import React from 'react'

const DropdownMenu = ({
    onClick = () => { },
    onSelect = () => { },
    items = [],
    isActive = false,
    placeholder = "",
    value = [],
    keyValue = 'id',
    keyLabel = 'title',
}) => {

    const safeValue = Array.isArray(value) ? value : []

    const isSelected = (val) => safeValue.includes(val)

    const toggleItem = (val) => {
        if (safeValue.includes(val)) {
            onSelect(safeValue.filter(v => v !== val))
        } else {
            onSelect([...safeValue, val])
        }
    }

    return (
        <div className='rounded-lg p-3 bg-surface shadow-sm'>
            <button
                type="button"
                className='w-full flex items-center justify-between text-text-muted'
                onClick={() => onClick(!isActive)}
            >
                <p className='truncate'>
                    {safeValue.length
                        ? `${safeValue.length} seleccionados`
                        : placeholder}
                </p>

                <i className={`ri-arrow-down-s-line text-xl transition ${isActive ? "rotate-180" : ""}`} />
            </button>

            {isActive && (
                <div className='space-y-2 mt-2 max-h-60 overflow-auto'>
                    {items.map((item) => {
                        const val = item[keyValue]

                        return (
                            <div
                                key={val}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer 
                                ${isSelected(val) ? "bg-accent-soft" : "hover:bg-border/70"}`}
                                onClick={() => toggleItem(val)}
                            >
                                <input
                                    type="checkbox"
                                    checked={isSelected(val)}
                                    readOnly
                                />
                                <span>{item[keyLabel]}</span>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default DropdownMenu
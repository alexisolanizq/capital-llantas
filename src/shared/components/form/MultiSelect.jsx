import React, { useState, useRef, useEffect } from "react";
import { cn } from "src/utils";

const MultiSelect = ({
    label,
    error,
    hint,
    name = "",
    placeholder = "Seleccione opciones...",
    options = [],
    keyValue = "id",
    keyLabel = "name",
    className = "",
    value = [],
    onChange,
    onBlur,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                if (onBlur) onBlur();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onBlur]);

    const currentValues = Array.isArray(value) ? value : [];

    const toggleOption = (optionVal) => {
        const newValues = currentValues.includes(optionVal)
            ? currentValues.filter((v) => v !== optionVal)
            : [...currentValues, optionVal];

        onChange(newValues);
    };

    const removeValue = (e, optionVal) => {
        e.stopPropagation();
        onChange(currentValues.filter((v) => v !== optionVal));
    };

    return (
        <div className={cn("flex flex-col gap-1 relative", className)} ref={dropdownRef}>
            {label && (
                <label htmlFor={name} className="text-sm font-medium text-main">
                    {label}
                </label>
            )}

            <div
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full min-h-10.5 bg-surface border-[1.5px] border-line text-main rounded-md flex flex-wrap items-center gap-1 p-1.5 cursor-pointer transition-all focus-within:border-secondary focus-within:ring-4 focus-within:ring-secondary/10",
                    error && "border-danger focus-within:ring-danger/10"
                )}
            >
                {
                    currentValues.length === 0 && (
                        <span className="text-gray-400 p-1 text-sm">{placeholder}</span>
                    )
                }

                {
                    currentValues.map((val) => {
                        const option = options.find((o) => (o?.[keyValue] ?? o) === val);
                        const displayLabel = option ? (option?.[keyLabel] ?? option) : val;

                        return (
                            <span
                                key={val}
                                className="bg-primary/10 text-primary border border-primary/20 text-xs flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium"
                            >
                                {displayLabel}
                                <button
                                    type="button"
                                    onClick={(e) => removeValue(e, val)}
                                    className="hover:text-danger focus:outline-none"
                                >
                                    &times;
                                </button>
                            </span>
                        );
                    })}
            </div>

            {isOpen && (
                <div className="absolute top-full mt-1 left-0 w-full bg-white border border-line rounded-md shadow-lg z-50 max-h-60 overflow-y-auto custom-scrollbar">
                    {options.length === 0 ? (
                        <div className="p-3 text-sm text-gray-500 text-center">No hay opciones disponibles</div>
                    ) : (
                        options.map((option, index) => {
                            const val = option?.[keyValue] ?? option;
                            const optionLabel = option?.[keyLabel] ?? option;
                            const isChecked = currentValues.includes(val);

                            return (
                                <div
                                    key={val ?? index}
                                    onClick={() => toggleOption(val)}
                                    className="flex items-center gap-3 p-2.5 hover:bg-main/5 cursor-pointer text-sm text-main transition-colors"
                                >
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        readOnly
                                        className="w-4 h-4 text-secondary rounded border-gray-300 focus:ring-secondary pointer-events-none"
                                    />
                                    <span className={isChecked ? "font-medium" : ""}>
                                        {optionLabel}
                                    </span>
                                </div>
                            );
                        })
                    )}
                </div>
            )}

            {error && <p className="text-sm text-danger">{error}</p>}
            {!error && hint && <p className="text-sm text-muted">{hint}</p>}
        </div>
    );
};

export default MultiSelect;

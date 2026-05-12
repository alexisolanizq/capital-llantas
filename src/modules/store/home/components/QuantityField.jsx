import QuantityInput from "./QuantityInput";

const QuantityField = ({
    label = "Cantidad",
    hideLabel = false,
    className = "",
    ...props
}) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {!hideLabel && (
                <label className="text-sm font-medium text-main">
                    {label}
                </label>
            )}

            <QuantityInput {...props} />
        </div>
    );
};

export default QuantityField;
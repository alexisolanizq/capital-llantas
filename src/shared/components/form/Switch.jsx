import { cn } from "src/utils";

const SWITCH_SIZES = {
    sm: {
        track: "h-5 w-9",
        thumb: "size-4",
        translate: "translate-x-4",
    },
    md: {
        track: "h-6 w-11",
        thumb: "size-5",
        translate: "translate-x-5",
    },
    lg: {
        track: "h-7 w-13",
        thumb: "size-6",
        translate: "translate-x-6",
    },
    xl: {
        track: "h-8 w-15",
        thumb: "size-7",
        translate: "translate-x-7",
    },
};

const Switch = ({
    label,
    description,
    hint,
    error,
    name = "",
    checked = false,
    disabled = false,
    size = "md",
    className = "",
    onChange,
    onBlur,
}) => {
    const currentSize = SWITCH_SIZES[size];

    return (
        <div className={cn("flex flex-col gap-2 w-fit", className)}>
            <label
                htmlFor={name}
                className={cn(
                    "flex items-start gap-4",
                    disabled && "opacity-60 cursor-not-allowed",
                    !disabled && "cursor-pointer"
                )}
            >
                <div className="flex flex-col">
                    {label && (
                        <span className="text-sm font-medium text-main">
                            {label}
                        </span>
                    )}

                    {description && (
                        <span className="text-sm text-muted">
                            {description}
                        </span>
                    )}
                </div>

                <div className="relative shrink-0">
                    <input
                        id={name}
                        name={name}
                        type="checkbox"
                        className="peer sr-only"
                        checked={checked}
                        disabled={disabled}
                        onChange={onChange}
                        onBlur={onBlur}
                    />

                    <div
                        className={cn(
                            "relative rounded-full transition-colors duration-200",
                            currentSize.track,

                            checked
                                ? "bg-primary"
                                : "bg-line",

                            error && "bg-danger/30",

                            disabled && "opacity-60"
                        )}
                    >
                        <div
                            className={cn(
                                "absolute left-0.5 top-1/2 -translate-y-1/2 rounded-full bg-white shadow transition-all duration-200",
                                currentSize.thumb,
                                checked && currentSize.translate
                            )}
                        />
                    </div>
                </div>
            </label>

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

export default Switch;
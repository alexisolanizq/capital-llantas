import { cn } from "src/utils";
import { CONTROL_SIZES } from "src/utils/styles/forms";

const TextField = ({
  label,
  error,
  hint,

  size = "md",

  placeholder = "Buscar",
  name = "",
  type = "text",

  icon = "",
  leftIcon = null,
  rightIcon = null,

  className = "",
  inputClassName = "",

  ...props
}) => {
  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-main"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {/* LEFT ICON */}
        {leftIcon && (
          <i
            className={cn(
              "absolute left-3 top-1/2 -translate-y-1/2 text-muted text-lg", icon
            )}
          />
        )}

        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={cn(
            `
              w-full
              bg-surface
              border
              border-line
              text-main
              placeholder:text-muted
              transition-all
              outline-none
              focus:border-secondary
              focus:ring-4
              focus:ring-secondary/10
              disabled:opacity-60
            `,

            CONTROL_SIZES[size],

            leftIcon && "pl-10",
            rightIcon && "pr-10",

            error &&
            `
                border-danger
                focus:ring-danger/10
              `,

            inputClassName
          )}
          {...props}
        />

        {/* RIGHT ICON */}
        {rightIcon && (
          <i
            className="
              absolute
              right-3, icon
              top-1/2
              -translate-y-1/2
              text-muted
              text-lg
            "
          />
        )}
      </div>

      {/* ERROR */}
      {error && (
        <p className="text-sm text-danger">
          {error}
        </p>
      )}

      {/* HINT */}
      {!error && hint && (
        <p className="text-sm text-muted">
          {hint}
        </p>
      )}
    </div>
  );
};

export default TextField;
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  link = null,
  className = "",
  type = "button",
  ...props
}) => {
  const isDisabled = disabled || loading;

  const baseStyles = `
    relative
    inline-flex
    items-center
    justify-center
    gap-2
    overflow-hidden
    font-medium
    whitespace-nowrap
    select-none
    transition-all
    duration-200
    ease-out
    active:scale-[0.98]
    disabled:pointer-events-none
    disabled:opacity-60
    focus:outline-none
    focus:ring-4
    border-2
    rounded-xl
  `;

  const sizes = {
    sm: "h-9 px-3 text-xs rounded-[--radius-sm]",
    md: "h-12 px-5 text-sm rounded-[--radius-md]",
    lg: "h-13 px-6 text-base rounded-[--radius-md]",
    xl: "h-15 px-8 text-lg rounded-[--radius-lg]",
    icon: "size-11 rounded-[--radius-md]",
  };

  const variants = {
    primary: `
      bg-primary
      border-primary
      text-inverse
      hover:bg-primary-hover
      hover:border-primary-hover
      focus:ring-primary/20
      shadow-sm
    `,

    secondary: `
      bg-secondary
      border-secondary
      text-white
      hover:bg-secondary-hover
      hover:border-secondary-hover
      focus:ring-secondary/20
      shadow-sm
    `,

    success: `
      bg-success
      border-success
      text-white
      hover:brightness-110
      focus:ring-success/20
      shadow-sm
    `,

    danger: `
      bg-danger
      border-danger
      text-white
      hover:brightness-110
      focus:ring-danger/20
      shadow-sm
    `,

    outline: `
      bg-transparent
      border-line
      text-main
      hover:border-secondary
      hover:text-secondary
      hover:bg-secondary-soft/40
      focus:ring-secondary/10
    `,

    flat: `
      bg-transparent
      border-transparent
      text-main
      hover:bg-sunken
      focus:ring-primary/10
    `,

    ghost: `
      bg-transparent
      border-transparent
      text-secondary
      hover:bg-secondary-soft
      focus:ring-secondary/10
    `,

    depth: `
      bg-depth-800
      border-depth-line
      text-white
      hover:bg-depth-700
      focus:ring-white/10
    `,
  };

  const widthStyles = fullWidth ? "w-full" : "w-fit";

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${widthStyles}
    ${className}
  `;

  const content = (
    <>
      {/* LOADING */}
      {loading && (
        <span
          className={`
            size-4
            rounded-full
            border-2
            border-current
            border-t-transparent
            animate-spin
          `}
        />
      )}

      {/* LEFT ICON */}
      {!loading && leftIcon && (
        <i className={`ri-${leftIcon}-line text-[1.1em]`} />
      )}

      {/* LABEL */}
      <span>{children}</span>

      {/* RIGHT ICON */}
      {!loading && rightIcon && (
        <i className={`ri-${rightIcon}-line text-[1.1em]`} />
      )}

      {/* SHIMMER EFFECT */}
      {!loading && (
        <span
          className="
            absolute
            inset-0
            -translate-x-full
            bg-linear-to-r
            from-transparent
            via-white/10
            to-transparent
            opacity-0
            transition-all
            duration-700
            group-hover:translate-x-full
            group-hover:opacity-100
          "
        />
      )}
    </>
  );

  if (link) {
    return (
      <Link
        to={link}
        className={`group ${classes}`}
        aria-disabled={isDisabled}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`group ${classes}`}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
import { Link } from "react-router-dom";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  icon = null,
  link = null,
  className = "",
  type = "button",
  "aria-label": ariaLabel, 
  ...props
}) => {
  const isDisabled = disabled || loading;

  const isIconOnly = !!icon && !children;

  if (isIconOnly && !ariaLabel && process.env.NODE_ENV !== "production") {
    console.warn("UX/Accessibility Warning: Los botones de solo icono requieren un 'aria-label' para ser accesibles.");
  }

  const baseStyles = `relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap select-none font-medium tracking-tight transition-all duration-200 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 focus:outline-none focus:ring-4 border`;

  const spacingStyles = isIconOnly ? "" : "gap-1.5 lg:gap-2";

  const sizes = {
    sm: isIconOnly ? `size-8 rounded-sm text-sm` : `h-8 px-3 text-xs rounded-sm`,

    md: isIconOnly
      ? `size-10 rounded-md text-base lg:size-11 lg:text-lg`
      : `h-10 px-4 text-sm rounded-md lg:h-11 lg:px-5`,

    lg: isIconOnly
      ? `size-11 rounded-md text-lg lg:size-12 lg:text-xl`
      : `h-11 px-5 text-sm rounded-md lg:h-12 lg:px-6 lg:text-base`,

    xl: isIconOnly
      ? `size-12 rounded-lg text-xl lg:size-14 lg:text-2xl`
      : `h-12 px-6 text-base rounded-lg lg:h-14 lg:px-8 lg:text-lg`,

    icon: `size-10 lg:size-11 rounded-md text-base`,
  };

  const variants = {
    primary: `bg-primary border-primary text-inverse hover:bg-primary-hover hover:border-primary-hover focus:ring-primary/20 shadow-sm`,
    secondary: `bg-secondary border-secondary text-white hover:bg-secondary-hover hover:border-secondary-hover focus:ring-secondary/20 shadow-sm`,
    success: `bg-success border-success text-white hover:brightness-110 focus:ring-success/20 shadow-sm`,
    danger: `bg-danger/70 border-danger/20 text-white hover:brightness-110 focus:ring-danger/20 shadow-sm`,
    outline: `bg-transparent border-line text-main hover:border-secondary hover:text-secondary hover:bg-secondary-soft/40 focus:ring-secondary/10`,
    flat: `bg-transparent border-transparent text-main hover:bg-line focus:ring-primary/10`,
    ghost: `bg-transparent border-transparent text-secondary hover:bg-secondary-soft focus:ring-secondary/10`,
    depth: `bg-depth-800 border-depth-line text-white hover:bg-depth-700 focus:ring-white/10`,
  };

  const widthStyles = (fullWidth && !isIconOnly) ? "w-full" : "w-fit";

  const classes = twMerge(
    clsx(
      "group",
      baseStyles,
      spacingStyles,
      sizes[size],
      variants[variant],
      widthStyles,
      className
    )
  );

  const content = (
    <>
      {loading && (
        <span className="size-4 rounded-full border-2 border-current border-t-transparent animate-spin shrink-0" />
      )}

      {!loading && isIconOnly ? (
        <span className="inline-flex items-center justify-center transform translate-y-[0.5px]">
          <i className={`ri-${icon}-line block text-[1.2em] leading-none`} />
        </span>
      ) : (
        <>
          {!loading && leftIcon && (
            <i className={clsx(`ri-${leftIcon}-line`, "text-[1.05em] shrink-0")} />
          )}
          {children && <span className="truncate">{children}</span>}
          {!loading && rightIcon && (
            <i className={clsx(`ri-${rightIcon}-line`, "text-[1.05em] shrink-0")} />
          )}
        </>
      )}

      {!loading && (
        <span
          className="hidden lg:block absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100"
        />
      )}
    </>
  );

  if (link) {
    return (
      <Link
        to={link}
        className={classes}
        aria-disabled={isDisabled}
        aria-label={ariaLabel}
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
      className={classes}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
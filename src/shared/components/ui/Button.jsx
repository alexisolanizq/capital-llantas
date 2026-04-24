
const Button = ({
    children,
    variant = "primary",
    size = "normal",
    className = "",
    ...props
}) => {
    const baseClasses = "inline-flex w-full items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl self-end";
    const variants = {
        primary: "bg-orange-500 text-white hover:bg-orange-400 focus:ring-orange-100",
        secondary: "bg-blue-800 text-white hover:bg-blue-900 focus:ring-blue-500",
        outline: "border-2 border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-500 bg-transparent",
    };
    const sizes = {
        normal: "px-6 py-2.5 text-sm",
        large: "px-8 py-4 text-base",
        compact: "px-4 py-2 text-xs"
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const BREAKPOINTS = ["sm", "md", "lg", "xl", "2xl"];

const GAPS = {
    none: "gap-0",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-3",
    lg: "gap-4",
    xl: "gap-6",
    "2xl": "gap-8",
};

const createResponsiveClasses = (prefix, values, map = null) => {
    if (!values) return [];

    const resolveValue = (value) => {
        if (map?.[value]) {
            return map[value];
        }

        return prefix ? `${prefix}-${value}` : value;
    };

    // cols={4}
    // gap="lg"
    if (typeof values === "string" || typeof values === "number") {
        return [resolveValue(values)];
    }

    // responsive object
    return Object.entries(values)
        .flatMap(([breakpoint, value]) => {
            const className = resolveValue(value);

            if (breakpoint === "base") {
                return [className];
            }

            if (BREAKPOINTS.includes(breakpoint)) {
                return [`${breakpoint}:${className}`];
            }

            return [];
        });
};

const Grid = ({
    children,
    cols = 1,
    rows,
    gap = "md",
    className,
    align,
    justify,
    flow,
    ...props
}) => {
    const classes = twMerge(
        clsx(
            "grid",

            createResponsiveClasses("grid-cols", cols),
            createResponsiveClasses("grid-rows", rows),
            createResponsiveClasses("gap", gap, GAPS),

            align && `items-${align}`,
            justify && `justify-${justify}`,
            flow && `grid-flow-${flow}`,

            className
        )
    );

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

export default Grid;
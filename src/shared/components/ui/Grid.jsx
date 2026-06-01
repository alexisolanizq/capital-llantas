import clsx from "clsx";
import { responsive } from "src/utils/responsive";
import { twMerge } from "tailwind-merge";

const GAPS = {
    none: "gap-0",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-3",
    lg: "gap-4",
    xl: "gap-6",
    "2xl": "gap-8",
};

const Grid = ({
    children,

    cols = 1,
    rows,

    gap = "md",

    align,
    justify,
    flow,

    className,

    ...props
}) => {
    const classes = twMerge(
        clsx(
            "grid",

            responsive(cols, {
                1: "grid-cols-1",
                2: "grid-cols-2",
                3: "grid-cols-3",
                4: "grid-cols-4",
                5: "grid-cols-5",
                6: "grid-cols-6",
                7: "grid-cols-7",
                8: "grid-cols-8",
                9: "grid-cols-9",
                10: "grid-cols-10",
                11: "grid-cols-11",
                12: "grid-cols-12",
            }),

            responsive(rows, {
                1: "grid-rows-1",
                2: "grid-rows-2",
                3: "grid-rows-3",
                4: "grid-rows-4",
                5: "grid-rows-5",
                6: "grid-rows-6",
            }),

            responsive(gap, GAPS),

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
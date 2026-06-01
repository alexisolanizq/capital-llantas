import clsx from "clsx";
import { responsive } from "src/utils/responsive";
import { twMerge } from "tailwind-merge";

const GridItem = ({
    children,

    colSpan,
    rowSpan,

    className,

    ...props
}) => {
    const classes = twMerge(
        clsx(
            responsive(colSpan, {
                1: "col-span-1",
                2: "col-span-2",
                3: "col-span-3",
                4: "col-span-4",
                5: "col-span-5",
                6: "col-span-6",
                7: "col-span-7",
                8: "col-span-8",
                9: "col-span-9",
                10: "col-span-10",
                11: "col-span-11",
                12: "col-span-12",
            }),

            responsive(rowSpan, {
                1: "row-span-1",
                2: "row-span-2",
                3: "row-span-3",
                4: "row-span-4",
                5: "row-span-5",
                6: "row-span-6",
            }),

            className
        )
    );

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

export default GridItem;
import clsx from "clsx"
import { twMerge } from "tailwind-merge"

const BREAKPOINTS = ['sm', 'md', 'lg', 'xl', '2xl']

const createResponsiveClasses = (prefix, values) => {
    if (!values) return []

    if (
        typeof values === 'string' ||
        typeof values === 'number'
    ) {
        return [`${prefix}-${values}`]
    }

    return Object.entries(values).map(([breakpoint, value]) => {
        if (!BREAKPOINTS.includes(breakpoint)) return null

        return `${breakpoint}:${prefix}-${value}`
    }).filter(Boolean)
}

const GridItem = ({
    children,
    colSpan,
    rowSpan,
    colStart,
    colEnd,
    rowStart,
    rowEnd,
    className,
    ...props
}) => {

    const classes = twMerge(
        clsx(
            createResponsiveClasses('col-span', colSpan),
            createResponsiveClasses('row-span', rowSpan),

            createResponsiveClasses('col-start', colStart),
            createResponsiveClasses('col-end', colEnd),

            createResponsiveClasses('row-start', rowStart),
            createResponsiveClasses('row-end', rowEnd),

            className
        )
    )

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    )
}

export default GridItem
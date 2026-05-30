import clsx from "clsx"
import { twMerge } from "tailwind-merge"

const BREAKPOINTS = ['sm', 'md', 'lg', 'xl', '2xl']

const createResponsiveClasses = (prefix, values) => {
    if (!values) return []

    if (typeof values === 'string' || typeof values === 'number') {
        return [`${prefix}-${values}`]
    }

    return Object.entries(values).map(([breakpoint, value]) => {
        if (!BREAKPOINTS.includes(breakpoint)) return null

        return `${breakpoint}:${prefix}-${value}`
    }).filter(Boolean)
}

const Grid = ({
    children,
    cols = 1,
    rows,
    gap = 4,
    className,
    align,
    justify,
    flow,
    ...props
}) => {

    const classes = twMerge(
        clsx(
            'grid',

            createResponsiveClasses('grid-cols', cols),
            createResponsiveClasses('grid-rows', rows),
            createResponsiveClasses('gap', gap),

            align && `items-${align}`,
            justify && `justify-${justify}`,
            flow && `grid-flow-${flow}`,

            className
        )
    )

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    )
}

export default Grid
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

const CardRoot = ({
    children,
    className,
    ...props
}) => {

    return (
        <div
            className={twMerge(
                clsx(
                    'bg-inverse rounded-lg border border-line shadow-sm p-6',
                    className
                )
            )}
            {...props}
        >
            {children}
        </div>
    )
}

const CardHeader = ({
    title,
    description,
    children,
    className
}) => {

    return (
        <div
            className={twMerge(
                clsx(
                    className
                )
            )}
        >
            {
                title && (
                    <h2 className="font-semibold text-xl mb-4">
                        {title}
                    </h2>
                )
            }

            {
                description && (
                    <p className="text-sm text-muted">
                        {description}
                    </p>
                )
            }

            {children}
        </div>
    )
}

const CardContent = ({
    children,
    className
}) => {

    return (
        <div
            className={twMerge(
                clsx(
                    'space-y-4 mb-6',
                    className
                )
            )}
        >
            {children}
        </div>
    )
}

const CardFooter = ({
    children,
    className,
    bordered = true
}) => {

    return (
        <div
            className={twMerge(
                clsx(
                    'p-6 pt-4',
                    bordered && 'border-t border-line',
                    className
                )
            )}
        >
            {children}
        </div>
    )
}

export const Card = Object.assign(CardRoot, {
    Header: CardHeader,
    Content: CardContent,
    Footer: CardFooter
})
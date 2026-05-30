import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import Flex from 'src/shared/components/ui/Flex'
import Skeleton from 'src/shared/components/ui/Skeleton'

const verticalSpacing = {
    none: 'py-0',
    xsmall: 'py-4',
    compact: 'py-8',
    normal: 'py-16',
    large: 'py-24'
}

const horizontalSpacing = {
    none: 'px-0',
    xsmall: 'px-4',
    compact: 'px-6',
    normal: 'px-8',
    large: 'px-12'
}

const containerWidths = {
    full: 'max-w-full',
    normal: 'max-w-7xl',
    compact: 'max-w-5xl'
}

const Section = ({
    children,

    className,

    densityY = 'normal',
    densityX = 'xsmall',

    container = 'normal',

    title,
    description,

    actions,

    loading = false,
    fallback
}) => {

    if (loading) {
        return fallback || (
            <DefaultSectionSkeleton />
        )
    }

    return (
        <section
            className={twMerge(
                clsx(
                    verticalSpacing[densityY]
                )
            )}
        >
            <div
                className={twMerge(
                    clsx(
                        'mx-auto w-full',
                        containerWidths[container],
                        horizontalSpacing[densityX],
                        className
                    )
                )}
            >

                {
                    (title || actions) && (
                        <div className="flex flex-col mb-10 lg:flex-row lg:items-center lg:justify-between">

                            <div className="min-w-0">
                                {
                                    title && (
                                        <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
                                            {title}
                                        </h2>
                                    )
                                }

                                {
                                    description && (
                                        <p className="text-sm text-muted mt-1 max-w-2xl">
                                            {description}
                                        </p>
                                    )
                                }
                            </div>

                            {
                                actions && (
                                    <div className="hidden lg:flex shrink-0">
                                        {actions}
                                    </div>
                                )
                            }

                        </div>
                    )
                }

                {children}

                {
                    actions && (
                        <div className="mt-6 lg:hidden">
                            {actions}
                        </div>
                    )
                }

            </div>
        </section>
    )
}

const DefaultSectionSkeleton = () => {

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">

                <Flex justify="between" items="center" className="mb-10">
                    <div className="space-y-2 flex-1">
                        <Skeleton className="h-8 w-64" />
                        <Skeleton className="h-4 w-96" />
                    </div>

                    <Skeleton className="h-10 w-32" />
                </Flex>

                <div className="grid lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2">
                        <Skeleton className="h-100 w-full rounded-xl" />
                    </div>

                    <div>
                        <Skeleton className="h-100 w-full rounded-xl" />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Section
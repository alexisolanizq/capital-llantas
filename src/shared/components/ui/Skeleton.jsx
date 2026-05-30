import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

const Skeleton = ({
    className
}) => {

    return (
        <div
            className={twMerge(
                clsx(
                    `
                    relative
                    overflow-hidden
                    rounded-md
                    bg-line
                    `,
                    className
                )
            )}
        >
            <div
                className="
                    absolute
                    inset-0

                    animate-pulse

                    bg-linear-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                "
            />
        </div>
    )
}

export default Skeleton
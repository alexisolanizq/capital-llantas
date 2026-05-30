import React from 'react'
import { ORDER_ICON_STATUS } from 'src/utils/constant'

const Badge = ({
    leftIcon,
    rightIcon,
    variant = 'pendiente',
    children
}) => {
    const statusConfig = ORDER_ICON_STATUS[variant]

    const hasContent = Boolean(children)
    const hasOnlyIcon = !hasContent && (leftIcon || rightIcon)

    const baseStyles = `inline-flex items-center justify-center gap-1.5 rounded-full text-xs font-medium`

    const sizeStyles = hasOnlyIcon ? 'w-5 h-5' : 'px-2 py-1 min-h-5'

    const classes = `${baseStyles} ${sizeStyles} ${statusConfig?.classes?.bg} ${statusConfig?.classes?.text}`

    return (
        <span className={classes}>
            {leftIcon && (
                <i className={`ri-${leftIcon}-line text-base`} />
            )}

            {children}

            {rightIcon && (
                <i className={`ri-${rightIcon}-line text-base`} />
            )}
        </span>
    )
}

export default Badge
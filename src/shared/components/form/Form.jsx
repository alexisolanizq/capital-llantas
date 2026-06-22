const Form = ({
    children,
    grids = 1,
    isLoading = false,
    onSubmit = () => { },
    className = '',
    ...props
}) => {
    return (
        <form className={`grid grid-cols-1 lg:grid-cols-${grids} ${grids > 1 ? "gap-3" : ''} ${className}`} onSubmit={onSubmit} {...props}>
            {children}
        </form>
    )
}

export default Form
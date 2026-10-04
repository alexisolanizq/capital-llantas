import ButtonsForm from "src/components/admin-ui/form/ButtonsForm"

const Form = ({
    children,
    grids = 1,
    isLoading = false,
    onSubmit = () => { },
    onCancel = () => { },
    className = '',
    hideButtons = false,
    ...props
}) => {
    return (
        <form className={`grid grid-cols-1 lg:grid-cols-${grids} ${grids > 1 ? "gap-3" : ''} ${className}`} onSubmit={onSubmit} {...props}>
            {children}
            {
                !hideButtons && (
                    <ButtonsForm isLoading={isLoading} onCancel={onCancel} />
                )
            }
        </form>
    )
}

export default Form
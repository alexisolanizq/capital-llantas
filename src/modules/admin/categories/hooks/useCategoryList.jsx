import { useState } from "react"
import useModal from "src/hooks/useModal"
import { useCategoryListQuery } from "../queries/category.query"
import Button from "src/shared/components/ui/Button"
import CategoryColumns from "../components/CategoryColumns"
import CategoryForm from "../components/CategoryForm"
import { isValid } from "src/utils/values"


const useCategoryList = () => {

    const [row, setRow] = useState(null)
    const { closeModal, isOpen, openModal } = useModal()
    const { data: categories, isLoading } = useCategoryListQuery()

    const onCancel = () => {
        closeModal()
        setRow(null)
    }

    const onCreate = () => {
        setRow(null)
        openModal()
    }

    const onUpdate = (item) => {
        setRow(item)
        openModal()
    }

    const actions = [
        <Button
            leftIcon="add"
            size='sm'
            variant='primary'
            onClick={() => onCreate()}
        >
            Agregar nueva categoría
        </Button>
    ]

    const columns = CategoryColumns({ onUpdate, onCancel })

    const categoryForm = () => (<CategoryForm key={row?.id ?? 'new'} row={row} isUpdate={isValid(row)} onCancel={onCancel} onEnd={onCancel} />)


    return {
        isOpen,
        columns,
        actions,
        isLoading,
        categories,
        closeModal,
        categoryForm
    }
}

export default useCategoryList
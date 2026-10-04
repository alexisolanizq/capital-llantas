import { useState } from "react"
import { useAttributeListQuery } from "../queries/attribute.query"
import useModal from "src/hooks/useModal"
import AttributeForm from "../components/AttributeForm"
import { isValid } from "src/utils/values"
import Button from "src/shared/components/ui/Button"
import AttributeColumns from "../components/AttributeColumns"

const useAttributeList = () => {
    const [row, setRow] = useState(null)
    const { closeModal, isOpen, openModal } = useModal()
    const { data: attributes, isLoading } = useAttributeListQuery()

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
            Agregar nueva marca
        </Button>
    ]

    const columns = AttributeColumns({ onUpdate, onCancel })

    const attributeForm = () => (
        <AttributeForm key={row?.id ?? 'new'} row={row} isUpdate={isValid(row)} onEnd={onCancel} onCancel={onCancel} />
    )


    return {
        isOpen,
        columns,
        actions,
        onCancel,
        isLoading,
        attributes,
        attributeForm,
    }
}

export default useAttributeList
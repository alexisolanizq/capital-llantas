import { useState } from 'react'
import { useBrandListQuery } from '../queries/brand.query'
import useModal from 'src/hooks/useModal'
import BrandForm from '../components/BrandForm'
import { isValid } from 'src/utils/values'
import Button from 'src/shared/components/ui/Button'
import BrandColumns from '../components/BrandColumns'
import BrandImportForm from '../components/BrandImportForm'

const useBrandList = () => {
    const [row, setRow] = useState(null)
    const { data: brands, isLoading } = useBrandListQuery()

    const { closeModal, isOpen, openModal } = useModal()
    const { closeModal: closeImportModal, isOpen: isImportModalOpen, openModal: openImportModal } = useModal()

    const onCancel = () => {
        closeModal()
        closeImportModal()
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

    const onImport = () => {
        openImportModal()
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

    const columns = BrandColumns({ onUpdate, onCancel })

    const brandForm = () => (
        <BrandForm key={row?.id ?? 'new'} row={row} isUpdate={isValid(row)} onCancel={onCancel} onEnd={onCancel} />
    )

    const brandImportForm = () => (
        <BrandImportForm onCancel={onCancel} />
    )

    return {
        brands,
        isOpen,
        columns,
        actions,
        isLoading,
        openModal,
        brandForm,
        closeModal,

        closeImportModal,
        isImportModalOpen,
        openImportModal,

        brandImportForm
    }
}

export default useBrandList
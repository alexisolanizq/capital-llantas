import useModal from 'src/hooks/useModal'
import { useTireListQuery } from '../queries/tire.query'
import Button from 'src/shared/components/ui/Button'
import TireForm from '../components/TireForm'
import { useState } from 'react'
import TireColumns from '../components/TireColumns'
import { isValid } from 'src/utils/values'
import TireBulkUploadForm from '../components/TireBulkUploadForm'

const useTireList = () => {

    const { data: tires, isLoading } = useTireListQuery()

    const [row, setRow] = useState(null)
    const { closeModal, isOpen, openModal } = useModal()
    const { closeModal: closeImportModal, isOpen: isImportModalOpen, openModal: openImportModal } = useModal()

    const onImport = () => {
        openImportModal()
    }

    const onCancel = () => {
        closeImportModal()
        closeModal()
        setRow(null)
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
            onClick={() => openModal()}
        >
            Agregar nuevo modelo
        </Button>,
        <Button
            leftIcon="file-excel"
            size='sm'
            variant='outline'
            onClick={() => onImport()}
        >
            Importar excel
        </Button>
    ]

    const tireForm = () => (
        <TireForm
            key={row?.id ?? 'new'}
            row={row}
            onCancel={onCancel}
            onEnd={onCancel}
            isUpdate={isValid(row)}
        />
    )

    const tireBulkUploadForm = () => (
        <TireBulkUploadForm onCancel={onCancel} onEnd={onCancel} />
    )

    const colums = TireColumns({ onDelete: onCancel, onUpdate })

    return {
        tires,
        colums,
        isOpen,
        actions,
        tireForm,
        isLoading,
        closeModal,
        closeImportModal,
        isImportModalOpen,
        tireBulkUploadForm
    }
}

export default useTireList
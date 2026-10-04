import React, { useState } from 'react'
import { useProductQuery } from '../queries/product.query'
import ProductColumns from '../components/ProductColumns'
import Button from 'src/shared/components/ui/Button'
import ProductBulkUploadForm from '../components/ProductBulkUploadForm'
import useModal from 'src/hooks/useModal'
import ProductForm from '../components/ProductForm'
import { isValid } from 'src/utils/values'

const useProduct = () => {

    const { data: products, isLoading } = useProductQuery()

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

    const columns = ProductColumns({ onUpdate })

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

    const productForm = () => (
        <ProductForm
            key={row?.id ?? 'new'}
            row={row}
            onCancel={onCancel}
            onEnd={onCancel}
            isUpdate={isValid(row)}
        />
    )

    const productBulkUploadForm = () => (
        <ProductBulkUploadForm onCancel={onCancel} onEnd={onCancel} />
    )

    return {
        products, isOpen, isLoading, columns, actions, productBulkUploadForm, onCancel, isImportModalOpen, productForm
    }
}

export default useProduct
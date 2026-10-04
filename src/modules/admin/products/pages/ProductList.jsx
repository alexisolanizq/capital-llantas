import React from 'react'
import AdminGeneralLayout from 'src/layouts/admin/components/AdminGeneralLayout'
import useProductList from '../hooks/useProductList'
import DataTable from 'src/components/admin-ui/DataTable'
import Modal from 'src/components/admin-ui/Modal'

const ProductList = () => {

    const { isLoading, products, columns, actions, isImportModalOpen, onCancel, productBulkUploadForm, isOpen, productForm } = useProductList()

    return (
        <AdminGeneralLayout
            title="Listado de productos"
            description={`${products?.length} productos registrados`}
            actions={actions}
        >
            <DataTable
                data={products}
                isLoading={isLoading}
                columns={columns}
            />
            {
                (
                    <Modal
                        isOpen={isImportModalOpen}
                        onClose={() => onCancel()}
                    >
                        {productBulkUploadForm()}
                    </Modal>
                )
            }
            {
                <Modal
                    isOpen={isOpen}
                    onClose={onCancel}
                >
                    {productForm()}
                </Modal>
            }
        </AdminGeneralLayout>
    )
}

export default ProductList
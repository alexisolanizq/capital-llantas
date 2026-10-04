import React from 'react'
import DataTable from 'src/components/admin-ui/DataTable'
import Modal from 'src/components/admin-ui/Modal'
import AdminGeneralLayout from 'src/layouts/admin/components/AdminGeneralLayout'
import useCategoryList from '../hooks/useCategoryList'

const CategoryList = () => {

    const { categories, columns, isLoading, isOpen, actions, categoryForm, closeModal } = useCategoryList()

    return (
        <AdminGeneralLayout
            title="Listado de categorías"
            description={`${categories?.length} marcas registradas`}
            actions={actions}
        >
            <DataTable data={categories} columns={columns} isLoading={isLoading} />

            {
                <Modal isOpen={isOpen} onClose={closeModal} title="Agregar categoría">
                    {categoryForm()}
                </Modal>
            }
        </AdminGeneralLayout>
    )
}

export default CategoryList
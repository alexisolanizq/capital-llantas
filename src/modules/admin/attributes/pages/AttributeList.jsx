import React from 'react'
import AdminGeneralLayout from 'src/layouts/admin/components/AdminGeneralLayout'
import useAttributeList from '../hooks/useAttributeList'
import DataTable from 'src/components/admin-ui/DataTable'
import Modal from 'src/components/admin-ui/Modal'

const AttributeList = () => {

    const { actions, attributeForm, attributes, isLoading, columns, isOpen, onCancel } = useAttributeList()

    return (
        <AdminGeneralLayout
            title='Listado de atributos'
            actions={actions}
            description={`${attributes?.length} atributos registrados`}
        >
            <DataTable data={attributes} columns={columns} isLoading={isLoading} />
            {
                <Modal isOpen={isOpen} onClose={onCancel} title="Nuevo atributo">
                    {attributeForm()}
                </Modal>
            }
        </AdminGeneralLayout>
    )
}

export default AttributeList
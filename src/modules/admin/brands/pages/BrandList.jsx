import AdminGeneralLayout from "src/layouts/admin/components/AdminGeneralLayout"
import useBrandList from "../hooks/useBrandList"
import DataTable from "src/components/admin-ui/DataTable"
import Modal from "src/components/admin-ui/Modal"

const BrandList = () => {
    const {
        brands,
        columns,
        isLoading,
        actions,
        isOpen,
        closeModal,
        brandForm,
        closeImportModal,
        isImportModalOpen,
        brandImportForm
    } = useBrandList()

    return (
        <AdminGeneralLayout
            title="Listado de Marcas"
            description={`${brands?.length} marcas registradas`}
            actions={actions}
        >
            <DataTable data={brands} columns={columns} isLoading={isLoading} />
            {
                (
                    <Modal isOpen={isOpen} onClose={closeModal} title="Agregar marca">
                        {brandForm()}
                    </Modal>
                )
            }
            {
                (
                    <Modal isOpen={isImportModalOpen} onClose={closeImportModal} title="Importar desde excel">
                        {brandImportForm()}
                    </Modal>
                )
            }
        </AdminGeneralLayout>
    )
}

export default BrandList
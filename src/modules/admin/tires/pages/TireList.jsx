import AdminGeneralLayout from "src/layouts/admin/components/AdminGeneralLayout";
import useTireList from "../hooks/useTireList"
import DataTable from "src/components/admin-ui/DataTable";
import Modal from "src/components/admin-ui/Modal";

const TireList = () => {

    const { tires, colums, isLoading, actions, closeModal, isOpen, tireForm } = useTireList()

    return (
        <AdminGeneralLayout title="Listado de llantas" description={`${tires?.length} llantas en el cátalogo`} actions={actions}>
            <DataTable columns={colums} data={tires} isLoading={isLoading} />
            {
                (
                    <Modal
                        isOpen={isOpen}
                        onClose={() => closeModal()}
                        title="Agregar nuevo modelo"
                    >
                        {tireForm()}
                    </Modal>
                )
            }
        </AdminGeneralLayout>
    )
}

export default TireList
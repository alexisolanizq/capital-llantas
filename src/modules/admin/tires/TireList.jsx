import AdminGeneralLayout from "src/layouts/admin/components/AdminGeneralLayout";
import useTireList from "./hooks/useTireList"
import DataTable from "src/components/admin-ui/DataTable";

const TireList = () => {

    const { tires, colums, isLoading } = useTireList()

    return (
        <AdminGeneralLayout title="Listado de llantas" description={`${tires?.length} llantas en el cátalogo`}>
            <DataTable columns={colums} data={tires} isLoading={isLoading} />
        </AdminGeneralLayout>
    )
}

export default TireList
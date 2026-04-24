import AdminGeneralLayout from "src/layouts/admin/components/AdminGeneralLayout"
import useBrandList from "../hooks/useBrandList"
import DataTable from "src/components/admin-ui/DataTable"

const BrandList = () => {

    const { brands, columns, isLoading } = useBrandList()

    return (
        <AdminGeneralLayout title="Listado de Marcas">
            <DataTable data={brands} columns={columns} isLoading={isLoading} />
        </AdminGeneralLayout>
    )
}

export default BrandList
import React from 'react'
import AdminForm from 'src/components/admin-ui/form/AdminForm'
import AdminGeneralLayout from 'src/layouts/admin/components/AdminGeneralLayout'
import FileDropZoneController from 'src/components/admin-ui/form/FileDropZoneController'
import useTireBulkUploadForm from 'src/modules/admin/tires/hooks/useTireBulkUploadForm'

const TireBulkUpload = () => {

    const { control, handleSubmit, onSubmit } = useTireBulkUploadForm()

    return (
        <AdminGeneralLayout title="Carga masiva de llantas">
            <AdminForm onSubmit={handleSubmit(onSubmit)}>
                <FileDropZoneController name="file" control={control} />
            </AdminForm>
        </AdminGeneralLayout>
    )
}

export default TireBulkUpload
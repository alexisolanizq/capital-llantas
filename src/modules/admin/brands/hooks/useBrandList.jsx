import React, { useState } from 'react'
import { useBrandListQuery } from '../queries/brand.query'
import dayjs from 'dayjs'
import useModal from 'src/hooks/useModal'
import BrandForm from '../components/BrandForm'
import { isValid } from 'src/utils/values'
import Button from 'src/shared/components/ui/Button'

const useBrandList = () => {
    const [row, setRow] = useState(null)
    const { data: brands, isLoading } = useBrandListQuery()

    const { closeModal, isOpen, openModal } = useModal()

    const actions = [
        <Button
            leftIcon="add"
            size='sm'
            variant='primary'
            onClick={() => openModal()}
        >
            Agregar nueva marca
        </Button>
    ]

    const columns = [
        {
            header: "Nombre",
            accessorKey: 'name'
        },
        {
            header: "Creado",
            accessorKey: 'created_at',
            cell: (info) => dayjs(info.getValue()).format('DD/MM/YYYY HH:mm a')
        },
        {
            header: "Modificado",
            accessorKey: 'updated_at',
            cell: (info) => dayjs(info.getValue()).format('DD/MM/YYYY HH:mm a')
        },
        {
            header: "Opciones",
            cell: ({ row }) => (
                <div className='text-center space-x-4'>
                    <button className='cursor-pointer text-base text-muted' onClick={() => row}>
                        <i className='ri-pencil-line' />
                    </button>
                    <button className='cursor-pointer text-base text-danger' onClick={() => row.original.id}>
                        <i className='ri-delete-bin-line' />
                    </button>
                </div>
            ),
            size: 100
        },
    ]

    const brandForm = () => (
        <BrandForm row={row} isUpdate={isValid(row)} />
    )

    return {
        brands,
        isOpen,
        columns,
        actions,
        isLoading,
        openModal,
        brandForm,
        closeModal,
    }
}

export default useBrandList
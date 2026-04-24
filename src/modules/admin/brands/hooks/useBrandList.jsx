import React from 'react'
import { useBrandListQuery } from '../queries/brand.query'
import dayjs from 'dayjs'

const useBrandList = () => {

    const { data: brands, isLoading } = useBrandListQuery()

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
                    <button className='cursor-pointer' onClick={() => row.original.id}>
                        <i className='ri-delete-bin-line' />
                    </button>
                    <button className='cursor-pointer' onClick={() => row.original.id}>
                        <i className='ri-eye-line' />
                    </button>
                </div>
            )

        },
    ]

    return {
        brands,
        columns,
        isLoading
    }
}

export default useBrandList
import React from 'react'
import { useBrandListQuery } from '../queries/brand.query'
import dayjs from 'dayjs'

const useBrandList = () => {

    const { data: brands, isLoading } = useBrandListQuery()

    const actions = [
        <button className='space-x-2 bg-secondary rounded-lg px-4 py-2 text-sm text-inverse'>
            <i className='ri-add-line' />
            <span>Agregar nueva</span>
        </button>
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
                    <button className='cursor-pointer text-base text-muted' onClick={() => row.original.id}>
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

    return {
        brands,
        columns,
        actions,
        isLoading
    }
}

export default useBrandList
import React from 'react'
import { useTireListQuery } from '../queries/tire.query'

const useTireList = () => {

    const { data: tires, isLoading } = useTireListQuery()

    const colums = [
        {
            header: "Sku",
            accessorKey: 'part_number'
        },
        {
            header: "Modelo",
            accessorKey: 'model_name'
        },
        {
            header: "Marca",
            accessorKey: 'brand.name'
        },
        {
            header: "Medida",
            accessorKey: 'size.label'
        },
        {
            header: "Precio",
            accessorKey: 'price'
        },
        {
            header: "Stock",
            accessorKey: 'stock'
        },
        {
            header: "Tipo",
            accessorKey: 'type'
        },
        {
            header: "Prioridad",
            accessorFn: row => `${row.is_priority ? 'Si' : 'No'}`

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
            ),
            width: 10
        },
    ]

    return {
        tires,
        colums,
        isLoading,
    }
}

export default useTireList
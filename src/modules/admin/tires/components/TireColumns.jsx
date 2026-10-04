

const TireColumns = ({ onUpdate, onDelete }) => [
    {
        header: "Logo",
        cell: ({ row }) => (
            <div>
                <img src={`${row?.original?.logo_url}`} className="h-4" />
            </div>
        )
    },
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
                <button className='cursor-pointer text-base text-muted' onClick={() => onUpdate(row.original)}>
                    <i className='ri-pencil-line' />
                </button>
                <button className='cursor-pointer text-base text-danger' onClick={() => onDelete(row.original.id)}>
                    <i className='ri-delete-bin-line' />
                </button>
            </div>
        ),
        width: 10
    },

]

export default TireColumns
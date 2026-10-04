
const ProductColumns = ({ onUpdate, onDelete }) => [
    {
        header: 'Imagen',
        accessorKey: 'cover_image'
    },
    {
        header: 'Nombre',
        accessorKey: 'full_name'
    },
    {
        header: 'SKU',
        accessorKey: 'sku'
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

export default ProductColumns
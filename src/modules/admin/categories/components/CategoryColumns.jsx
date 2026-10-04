import dayjs from 'dayjs'
import Switch from 'src/shared/components/form/Switch'

const CategoryColumns = ({ onUpdate, onDelete, toggleStatus }) => [
    {
        header: "Estado",
        accessorKey: 'is_active',
        cell: (info) => <Switch onChange={() => toggleStatus} checked={info.getValue()} />
    },
    {
        header: "Logo",
        cell: ({ row }) => (
            <div>
                <img src={`${row.original.default_image}`} className="h-4" alt={`${row.original.name}`} />
            </div>
        )
    },
    {
        header: "Nombre",
        accessorKey: 'name'
    },
    {
        header: "Slug",
        accessorKey: 'slug'
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
                <button className='cursor-pointer text-base text-muted' onClick={() => onUpdate(row.original)}>
                    <i className='ri-pencil-line' />
                </button>
                <button className='cursor-pointer text-base text-danger' onClick={() => onDelete(row.original.id)}>
                    <i className='ri-delete-bin-line' />
                </button>
            </div>
        ),
        size: 100
    },
]

export default CategoryColumns
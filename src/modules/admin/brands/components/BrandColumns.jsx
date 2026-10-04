import dayjs from "dayjs"
import Switch from "src/shared/components/form/Switch"

const BrandColumns = ({ onUpdate, onDelete, toggleStatus }) => [
    {
        header: "Estado",
        accessorKey: 'is_active',
        cell: (info) => <Switch className="mx-auto" onChange={() => true} checked={info.getValue()} />
    },
    {
        header: "Logo",
        cell: ({ row }) => (
            <div>
                {
                    row.original.logo ? (
                        <img src={`${row.original.logo}`} className="h-4" alt={`${row.original.name}`} />
                    ) : <p className="text-center text-xl"><i className="ri-medal-line" /></p>
                }
            </div>
        )
    },
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

export default BrandColumns
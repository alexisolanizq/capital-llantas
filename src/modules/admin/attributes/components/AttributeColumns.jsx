import dayjs from "dayjs"
import Badge from "src/shared/components/ui/Badge"
import Flex from "src/shared/components/ui/Flex"

const AttributeColumns = ({ onUpdate, onDelete }) => [
    {
        header: "Nombre",
        accessorKey: 'name'
    },
    {
        header: "Código",
        accessorKey: 'code'
    },
    {
        header: "Tipo",
        accessorKey: 'type'
    },
    {
        header: "Categorias",
        accessorKey: 'categories',
        cell: (info) => info.getValue().map((item) => (
            <Badge key={item.id} variant="pagado" >{item?.name}</Badge>
        )),
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

export default AttributeColumns
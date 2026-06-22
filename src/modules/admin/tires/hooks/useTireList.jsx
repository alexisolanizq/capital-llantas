import useModal from 'src/hooks/useModal'
import { useTireListQuery } from '../queries/tire.query'
import Button from 'src/shared/components/ui/Button'
import TireForm from '../components/TireForm'

const useTireList = () => {

    const { data: tires, isLoading } = useTireListQuery()
    const { closeModal, isOpen, openModal } = useModal()

    const actions = [
        <Button
            leftIcon="add"
            size='sm'
            variant='primary'
            onClick={() => openModal()}
        >
            Agregar nuevo modelo
        </Button>
    ]

    const tireForm = () => (
        <TireForm />
    )

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
                    <button className='cursor-pointer text-base text-muted' onClick={() => row}>
                        <i className='ri-pencil-line' />
                    </button>
                    <button className='cursor-pointer text-base text-danger' onClick={() => row.original.id}>
                        <i className='ri-delete-bin-line' />
                    </button>
                </div>
            ),
            width: 10
        },
    ]

    return {
        tires,
        colums,
        isOpen,
        actions,
        tireForm,
        isLoading,
        closeModal,
    }
}

export default useTireList
import Avatar from 'src/shared/components/ui/Avatar'
import useUserInfo from '../hooks/useUserInfo'
import Button from 'src/shared/components/ui/Button'

const UserInfo = () => {

    const { user } = useUserInfo()

    return (
        <div className="bg-inverse shadow-sm rounded-lg border border-line p-4 overflow-hidden">
            <div className="text-center mb-6 pb-6 border-b border-line">
                <Avatar user={user} size='xl' />
                <h2 className="text-lg text-center font-semibold">
                    {user?.name}
                </h2>
                <p className="text-sm text-muted truncate w-3/4 mx-auto">
                    {user?.email}
                </p>
            </div>
            <nav className="space-y-2">
                <Button link="/auth/perfil" leftIcon="user" variant="ghost" className="w-full text-left">
                    Mi cuenta
                </Button>
                <Button link="/auth/ordenes" leftIcon="box-3" variant="ghost" className="w-full text-left">
                    Mis Pedidos
                </Button>
                <Button variant="danger" className="w-full text-left" >
                    Cerrar sesión
                </Button>
            </nav>
        </div>
    )
}

export default UserInfo
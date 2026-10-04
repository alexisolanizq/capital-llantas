import Form from "src/shared/components/form/Form"
import useAdminLogin from "../hooks/useAdminLogin"
import TextFieldController from "src/shared/components/form/TextFieldController"
import Button from "src/shared/components/ui/Button"

const AdminLogin = () => {

    const { errors, control, onSubmit, handleSubmit } = useAdminLogin()

    return (
        <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-6">
                <div className="mx-auto rounded-2xl flex items-center justify-center mb-4">
                    <img src="/public/logo.svg" className="h-16" />
                </div>
                <h1 className="font-outfit font-bold text-2xl text-slate-900">
                    Panel de administración
                </h1>
                <p className="text-slate-500 text-sm mt-1">
                    Capital Llantas
                </p>
            </div>
            <Form hideButtons onSubmit={handleSubmit(onSubmit)}>
                <TextFieldController control={control} name="email" label="Correo Electrónico" type="email" className="mb-4" placeholder="Ingresa tu correo" rules={{ required: "El correo es requerido" }} defaultValue="super-admin@supadmin.com" />
                <TextFieldController control={control} name="password" label="Contraseña" placeholder="Ingresa tu contraseña" type="password" className="mb-4" rules={{ required: "La contraseña es requerida" }} defaultValue="cap-llant-2026" />
                <Button type="submit" fullWidth>Iniciar sesión</Button>
            </Form>
        </div>
    )
}

export default AdminLogin
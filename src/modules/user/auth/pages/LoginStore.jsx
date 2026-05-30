import TextField from "src/shared/components/form/TextField"
import google from "/public/google.svg"
import logo from "/public/logo.svg"
import Form from "src/shared/components/form/Form"
import useLogin from "../hooks/useLogin"
import { Link } from "react-router-dom"
import Button from "src/shared/components/ui/Button"
import TextFieldController from "src/shared/components/form/TextFieldController"

const LoginStore = () => {

  const { control, isLoading, errors, handleSubmit, onSubmit, loginGoogle } = useLogin()

  return (
    <div className='grid lg:grid-cols-3 items-center'>
      <div className="h-dvh p-10 relative">
        <div className="flex flex-col gap-6 h-full my-auto">
          <Link to="/" className="mb-8">
            <img src={logo} className="w-52" />
          </Link>
          <div className="my-auto">
            <p className="text-lg font-semibold">Inicia sesión</p>
            <p className="text-muted text-sm mb-6">Ingresa correo y contraseña para acceder a tu cuenta.</p>
            <Form onSubmit={handleSubmit(onSubmit)} className="mb-4">
              <TextFieldController
                className="mb-4"
                control={control}
                name="email"
                placeholder="Correo" defaultValue='test_user_4149243857852644903@testuser.com'
              />
              <TextFieldController
                className="mb-4"
                control={control}
                name="password"
                type="password"
                placeholder="Contraseña" defaultValue="sbuagweEyi"
              />
              <Button fullWidth loading={isLoading} type="submit">Entrar</Button>
            </Form>

            <div className="mt-6">
              <p className="text-sm text-muted text-center mb-4">Inicia con</p>
              <div className="text-center">
                <button className="rounded-full p-2 border-3 border-line" onClick={loginGoogle}>
                  <img src={google} className="w-5" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute">
          <p className="text-sm text-muted">¿No tienes una cuenta? <Link to="/signup" className="text-primary">Regístrate</Link></p>
        </div>
      </div>
      <div className="hidden lg:block col-span-2">
        <div className='bg-login-tire h-dvh' />
      </div>
    </div>
  )
}

export default LoginStore
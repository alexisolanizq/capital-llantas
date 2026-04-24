import TextField from "src/shared/components/form/TextField"
import google from "/public/google.svg"
import facebook from "/public/facebook.svg"
import apple from "/public/apple.svg"
import logo from "/public/logo.svg"
import Form from "src/shared/components/form/Form"
import Flex from "src/shared/components/ui/Flex"
import Button from "src/shared/components/ui/Button"
import useLogin from "../hooks/useLogin"
import { Link } from "react-router-dom"

const LoginStore = () => {

  const { control, errors, handleSubmit, onSubmit, loginApple, loginFacebook, loginGoogle } = useLogin()

  return (
    <div className='flex items-center'>
      <div className="hidden lg:block w-full">
        <div className='bg-login-tire h-dvh' />
      </div>
      <div className="w-full h-dvh flex items-center justify-center">
        <div className="w-4/5 md:w-2/5 mx-auto space-y-6">
          <div>
            <Link to="/">
              <img src={logo} className="w-40 mx-auto" />
            </Link>
          </div>
          <p className="text-center font-semibold text-2xl">Bienvendio</p>
          <div className="flex items-center justify-center flex-col gap-y-4">
            <button className="flex w-full gap-4 items-center justify-center rounded-full outline-1 outline-primary-contrast p-2" onClick={loginGoogle}>
              <img src={google} className="w-5" alt="" />
              <p className="text-sm">Continuar con Google</p>
            </button>
            <button className="flex w-full gap-4 items-center justify-center rounded-full outline-1 outline-primary-contrast p-2">
              <img src={apple} className="w-5" alt="" />
              <p className="text-sm">Continuar con Apple</p>
            </button>
            {/* <button className="flex w-full gap-4 items-center justify-center rounded-full outline-1 outline-primary-contrast p-2">
              <img src={facebook} className="w-5" alt="" />
              <p className="text-sm">Continuar con Facebook</p>
            </button> */}
          </div>

          <p className="text-center text-primary-strong font-light">o</p>

          <Form onSubmit={handleSubmit(onSubmit)} >
            <TextField name="email" withIcon={false} placeholder="Correo" />
            <TextField name="password" withIcon={false} type="password" placeholder="Contraseña" />
            <div>
            </div>
          </Form>
          
        </div>
      </div>
    </div>
  )
}

export default LoginStore
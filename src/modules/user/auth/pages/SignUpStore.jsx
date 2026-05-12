import React from 'react'
import { Link } from 'react-router-dom'
import logo from "/public/logo.svg"
import Form from 'src/shared/components/form/Form'
import TextFieldController from 'src/shared/components/form/TextFieldController'
import Button from 'src/shared/components/ui/Button'
import useSignUp from '../hooks/useSignUp'

const SignUpStore = () => {

    const { control, errors, handleSubmit, onSubmit } = useSignUp()

    return (
        <div className='grid lg:grid-cols-3 items-center'>
            <div className="h-dvh p-10 relative">
                <div className="flex flex-col gap-6 h-full my-auto">
                    <Link to="/" className="mb-8">
                        <img src={logo} className="w-52" />
                    </Link>
                    <div className="my-auto">
                        <p className="text-lg font-semibold">Crea una cuenta</p>
                        <p className="text-muted text-sm mb-6">Ingresa los siguientes campos para crear tu cuenta.</p>
                        <Form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                            <TextFieldController
                                control={control}
                                name="name"
                                withIcon={false}
                                placeholder="Nombre completo"
                                defaultValue='Alexis Mercado Pago' />
                            <TextFieldController
                                control={control}
                                name="email"
                                withIcon={false}
                                placeholder="Correo"
                                defaultValue='test_user_4149243857852644903@testuser.com' />
                            <TextFieldController
                                control={control}
                                name="password"
                                withIcon={false}
                                type="password" placeholder="Contraseña"
                                defaultValue='sbuagweEyi' />
                            <Button type="submit">Entrar</Button>
                        </Form>
                    </div>
                </div>
                <div className="absolute">
                    <p className="text-sm text-muted">¿Ya tienes una cuenta? <Link to="/login" className="text-primary">Inicia sesión</Link></p>
                </div>
            </div>
            <div className="hidden lg:block col-span-2">
                <div className='bg-login-tire h-dvh' />
            </div>
        </div>
    )
}

export default SignUpStore
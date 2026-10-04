import React from 'react'
import Button from 'src/shared/components/ui/Button'

const ButtonsForm = ({ onCancel, isLoading }) => {
  return (
    <div className='flex flex-col lg:flex-row gap-3 justify-end items-end ml-auto w-full mt-4'>
      <Button size="sm" onClick={onCancel} variant='danger'>Cancelar</Button>
      <Button size="sm" type='submit' rightIcon="send-plane-2" loading={isLoading}>
        Enviar
      </Button>
    </div>
  )
}

export default ButtonsForm
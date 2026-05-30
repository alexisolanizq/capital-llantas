import React from 'react'
import Button from 'src/shared/components/ui/Button'

const ButtonsForm = ({ onCancel }) => {
  return (
    <div className='inline-flex flex-col lg:flex-row gap-3 justify-end items-end ml-auto w-full mt-4'>
      <Button onClick={onCancel} variant='danger'>Cancelar</Button>
      <Button type='submit' rightIcon="send-plane-2">
        Enviar
      </Button>
    </div>
  )
}

export default ButtonsForm
'use client'
import { login } from '@/actions/auth.actions'
import type { LoginRequest } from '@/types/auth.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function LoginForm() {
  const loginSchema = z.object({
    username: z.string().min(2, { message: 'El usuario debe tener al menos 2 caracteres' }).trim(),
    password: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }).trim(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
  })
  const onSubmit = (data: LoginRequest) => {
    login(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-5 p-4">
        <Input
          label={'Usuario'}
          type={'text'}
          {...register('username')}
          errorMessage={errors.username?.message}
          isInvalid={!!errors.username}
        />
        <Input
          label={'Contraseña'}
          type={'password'}
          {...register('password')}
          errorMessage={errors.password?.message}
          isInvalid={!!errors.password}
        />
        <Button variant="shadow" type="submit">
          Iniciar Sesión
        </Button>
      </div>
    </form>
  )
}

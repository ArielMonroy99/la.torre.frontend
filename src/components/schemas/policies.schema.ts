import { z } from 'zod'

export const policieSchema = z.object({
  object: z.string({ required_error: 'Campo requerido' }).min(2, { message: 'Minimo' }),
  subject: z.string({ required_error: 'Campo requerido' }).min(2, { message: 'Minimo' }).max(20, { message: 'El máximo es 20' }),
  action: z.string({ required_error: 'Campo requerido' }).min(2, { message: 'Minimo' }).max(20, { message: 'El máximo es 20' }),
})

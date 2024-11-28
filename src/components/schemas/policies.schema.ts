import { z } from 'zod'

export const policieSchema = z.object({
  // biome-ignore lint/style/useNamingConvention: <explanation>
  object: z.string({ required_error: 'Campo requerido' }).max(20, { message: 'El máximo es 20' }),
  // biome-ignore lint/style/useNamingConvention: <explanation>
  subject: z.string({ required_error: 'Campo requerido' }).max(20, { message: 'El máximo es 20' }),
  // biome-ignore lint/style/useNamingConvention: <explanation>
  action: z.string({ required_error: 'Campo requerido' }).max(20, { message: 'El máximo es 20' }),
})

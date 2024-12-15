import type { ActionFunction, ActionResult } from '@/types/actions.types'
import type { ZodSchema } from 'zod'

export function createServerAction<T = Record<string, unknown>, R = Record<string, unknown>>(
  action: ActionFunction<T, R>,
): (data?: T) => Promise<ActionResult<R>> {
  return async (data?: T): Promise<ActionResult<R>> => {
    try {
      const result = await action(data || ({} as T))
      return result
    } catch (e) {
      if (e instanceof Error) {
        return {
          status: 'error',
          message: e.message,
        }
      }
      if (typeof e === 'object' && e !== null) {
        const errorMessage = (e as { mensaje?: string }).mensaje || 'error'
        return {
          status: 'error',
          message: errorMessage,
        }
      }
      return {
        status: 'error',
        message: 'error',
      }
    }
  }
}

export function formAction<T = Record<string, any>, R = Record<string, any>>(
  schema: ZodSchema<T>,
  action: ActionFunction<T, R>,
): (formData: FormData) => Promise<any> {
  return async (formData: FormData): Promise<any> => {
    if (!formData) {
      return {
        status: 'error',
        message: 'FormData es requerido',
      }
    }

    try {
      const data = schema.parse(Object.fromEntries(formData))
      const result = await action(data)
      if (result.status === 'success') {
        result.message = result.message || ''
      }
      return result
    } catch (e) {
      if (e instanceof Error) {
        return {
          status: 'error',
          message: e.message,
        }
      }
      if (typeof e === 'object' && e !== null) {
        const errorMessage = (e as { mensaje?: string }).mensaje || 'error'
        return {
          status: 'error',
          message: errorMessage,
        }
      }
      return {
        status: 'error',
        message: 'error',
      }
    }
  }
}

import type { ActionFunction, ActionResult } from '@/types/actions.types'

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

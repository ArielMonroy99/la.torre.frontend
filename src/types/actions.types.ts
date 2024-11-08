export type State =
  | {
      status: 'success'
      message?: string
    }
  | {
      status: 'error'
      message?: string
      errors?: Array<{
        path: string
        message: string
      }>
    }
  | null

export type SuccessState<T> = { status: 'success'; message?: string } & T
export type ErrorState = Extract<State, { status: 'error' }>
export type ActionFunction<T, R> = (data: T) => Promise<ActionResult<R>>
export type ActionResult<T = Record<string, unknown>> = SuccessState<T> | ErrorState

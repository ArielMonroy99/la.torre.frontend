import type { ReactNode } from 'react'

type TableContainerProps = {
  children: ReactNode
  classNames?: {
    title?: string
    wrapper?: string
  }
  title: string
}

export default function TableContainer({ children, classNames, title }: TableContainerProps) {
  return (
    <section className={`flex flex-col items-center px-5 py-3 m-4 border rounded-lg  ${classNames?.wrapper ?? ''}`}>
      <h3 className={`text-lg text-primary inline-block w-full text-start ${classNames?.title ?? ''}`}>{title}</h3>
      {children}
    </section>
  )
}

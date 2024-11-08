'use client'

import { type ReactNode, createContext, useState } from 'react'

type Props = {
  children: ReactNode
}

export const SideBarContext = createContext(true)
export const SideBarSetterContext = createContext<any>(null)

export default function SideBarProvider({ children }: Props) {
  const [show, setShow] = useState(false)
  return (
    <SideBarContext.Provider value={show}>
      <SideBarSetterContext.Provider value={setShow}>{children}</SideBarSetterContext.Provider>
    </SideBarContext.Provider>
  )
}

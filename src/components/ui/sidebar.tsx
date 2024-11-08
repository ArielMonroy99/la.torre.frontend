'use client'

import { SideBarContext, SideBarSetterContext } from '@/providers/sidebar.provider'
import Link from 'next/link'
import { useContext } from 'react'
const ModalOverlay = ({ toggleSideBar }: { toggleSideBar: () => void }) => {
  return (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-50`}
      onClick={toggleSideBar}
      onKeyDown={toggleSideBar}
    />
  )
}
export default function SideBar() {
  const show = useContext(SideBarContext)
  const setter = useContext(SideBarSetterContext)
  const toggleSideBar = () => {
    setter((oldVal: boolean) => !oldVal)
  }
  return (
    <>
      <div
        className={`bg-background w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-[51] border-r-1 ${
          show ? 'ml-0' : 'ml-[-250px] md:ml-0'
        }`}
      >
        <ul className="z-51">
          <li>
            <Link href="/platform/home" onKeyDown={toggleSideBar} onClick={toggleSideBar}>
              Home
            </Link>
            <Link href="/platform/policies" onKeyDown={toggleSideBar} onClick={toggleSideBar}>
              Politicas
            </Link>
          </li>
        </ul>
      </div>
      {show ? <ModalOverlay toggleSideBar={toggleSideBar} /> : <></>}
    </>
  )
}

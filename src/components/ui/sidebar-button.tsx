'use client'
import { SideBarSetterContext } from '@/providers/sidebar.provider'
import { Button } from '@nextui-org/button'
import { useContext } from 'react'

export default function SideBarButton() {
  const setter = useContext(SideBarSetterContext)
  const handleClick = () => {
    setter((show: boolean) => !show)
  }
  return (
    <Button isIconOnly onClick={handleClick} className="md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    </Button>
  )
}

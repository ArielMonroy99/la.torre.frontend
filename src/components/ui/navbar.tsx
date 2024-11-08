'use client'
import SideBarButton from '@/components/ui/sidebar-button'
import UserDropdown from '@/components/ui/user-dropdown'
import { useAuth } from '@/providers/auth.provider'
import type { UserData } from '@/types/auth.types'
import { Navbar, NavbarContent } from '@nextui-org/navbar'

export default function TorreNavbar() {
  const { user, logout } = useAuth()
  return (
    <Navbar classNames={{ wrapper: 'max-w-full box-border border-b-1' }}>
      <NavbarContent justify="start">
        <SideBarButton />
      </NavbarContent>
      <NavbarContent as="div" justify="center" className="flex justify-center w-full">
        <h1>Logo</h1>
      </NavbarContent>
      <NavbarContent as="div" justify="end" className="flex justify-between w-full">
        <UserDropdown user={user ?? ({} as UserData)} logout={logout} />
      </NavbarContent>
    </Navbar>
  )
}

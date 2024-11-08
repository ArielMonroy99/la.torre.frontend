import SideBarButton from '@/components/ui/sidebar-button'
import UserDropdown from '@/components/ui/user-dropdown'
import { Navbar, NavbarContent } from '@nextui-org/navbar'

export default function TorreNavbar() {
  return (
    <Navbar classNames={{ wrapper: 'max-w-full box-border border-b-1' }}>
      <NavbarContent justify="start">
        <SideBarButton />
      </NavbarContent>
      <NavbarContent as="div" justify="center" className="flex justify-center w-full">
        <h1>Logo</h1>
      </NavbarContent>
      <NavbarContent as="div" justify="end" className="flex justify-between w-full">
        <UserDropdown />
      </NavbarContent>
    </Navbar>
  )
}

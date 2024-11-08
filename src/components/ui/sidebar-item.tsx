import { routes } from '@/constants/routes'
import type { Group, Route } from '@/types/sidebar.types'
import { Icon } from '@iconify/react'
import { Listbox, ListboxItem } from '@nextui-org/listbox'

export type SidebarItemProps = {
  group: Group
}

export default function SidebarItem({ group }: SidebarItemProps) {
  const items = routes.filter((route: Route) => route.group === group)
  return (
    <div className="pl-4 py-2">
      <Listbox topContent={<h4 className="text-medium">{group.name}</h4>}>
        {items.map((item: Route) => (
          <ListboxItem key={item.id} href={item.route} startContent={<Icon icon={item.icon} width={'1.2rem'} />}>
            {item.name}
          </ListboxItem>
        ))}
      </Listbox>
    </div>
  )
}

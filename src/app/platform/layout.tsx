import TorreNavbar from '@/components/ui/navbar'
import SideBar from '@/components/ui/sidebar'
import SideBarProvider from '@/providers/sidebar.provider'
import { Suspense, type ReactNode } from 'react'
import Loading from '../loading'

type Props = {
  children: ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <SideBarProvider>
      <TorreNavbar />
      <div className="flex overflow-auto">
        <SideBar />
        <Suspense fallback={<Loading />}>
          {<div className="flex flex-col flex-grow w-screen md:w-full h-[calc(100vh-4rem)]">{children}</div>}
        </Suspense>
      </div>
    </SideBarProvider>
  )
}

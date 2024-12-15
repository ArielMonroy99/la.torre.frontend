import dynamic from 'next/dynamic'
import type { ComponentType } from 'react'

export const Modals = new Map<String, ComponentType<{}>>([
  ['POLICIES', dynamic(() => import('@/components/modals/PoliciesModal'), { ssr: false })],
])

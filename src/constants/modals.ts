import dynamic from 'next/dynamic'
import type { ComponentType } from 'react'

export const Modals = new Map<String, ComponentType<{}>>([
  ['POLICIES', dynamic(() => import('@/components/forms/policies'), { ssr: false })],
])

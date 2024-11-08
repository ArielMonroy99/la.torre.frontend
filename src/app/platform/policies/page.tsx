'use client'
import { getPoliciesAction } from '@/actions/policies.actions'
import type { Policy } from '@/types/policy.types'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export default function Page() {
  const [policies, setPolicies] = useState<Policy[]>([])
  const getPolicies = async () => {
    const respuesta = await getPoliciesAction()
    if (respuesta.status === 'success') setPolicies(respuesta.data.content)
    else toast.error(respuesta.message)
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getPolicies()
  }, [])

  return (
    <>
      <h1>Políticas</h1>
      <ul>
        {policies.map((policy: Policy) => (
          <li key={`${policy.action}-${policy.object}-${policy.subject}`}>
            {policy.action} - {policy.object} - {policy.subject}
          </li>
        ))}
      </ul>
    </>
  )
}

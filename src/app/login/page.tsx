import LoginContainer from '@/components/login/login-container'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
}

export default function Page() {
  return (
    <>
      <LoginContainer />
    </>
  )
}

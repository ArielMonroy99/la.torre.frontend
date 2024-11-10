import LoginForm from '@/components/login/login-form'
import torreLogo from '@/public/torreLogo.webp'
import { Card } from '@nextui-org/card'
import Image from 'next/image'

export default function LoginContainer() {
  return (
    <main className="h-screen flex justify-center items-center p-4">
      <Card className="w-full md:w-1/3 lg:w-1/4 p-4 mx-auto">
        <Image src={torreLogo} width={141} height={141} alt={'Logo'} className="self-center" />
        <LoginForm />
      </Card>
    </main>
  )
}

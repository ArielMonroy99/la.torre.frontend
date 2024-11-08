import LoginForm from '@/components/login/login-form'
import { Card } from '@nextui-org/card'

export default function LoginContainer() {
  return (
    <main className="h-full flex justify-center items-center">
      <Card className="w-full md:w-1/3 lg:w-1/4 p-4 mx-auto">
        {/*<Image src={torreLogo} width={141} height={141} alt={'Logo'} className="self-center" />*/}
        <LoginForm />
      </Card>
    </main>
  )
}

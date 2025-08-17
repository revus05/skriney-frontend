import { SignInForm } from 'features/auth'
import { withAuthLayout } from 'widgets/layouts'

const SignInPage = async () => {
  return (
    <div className="flex min-h-screen grow items-center justify-center">
      <SignInForm />
    </div>
  )
}

export default withAuthLayout(SignInPage)

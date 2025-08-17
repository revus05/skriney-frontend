import { SignUpForm } from 'features/auth'
import { withAuthLayout } from 'widgets/layouts'

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen grow items-center justify-center">
      <SignUpForm />
    </div>
  )
}

export default withAuthLayout(SignUpPage)

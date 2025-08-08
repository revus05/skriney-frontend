'use client'

import { SignInForm } from 'features/auth/sign-in'
import { withAuthLayout } from 'widgets/layouts/auth'

const SignInPage = () => {
  return (
    <main className="flex min-h-screen grow items-center justify-center">
      <SignInForm />
    </main>
  )
}

export default withAuthLayout(SignInPage)

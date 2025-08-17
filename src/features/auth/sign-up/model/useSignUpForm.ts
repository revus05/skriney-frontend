'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpFormData, signUpSchema } from './schema'

export const useSignUpForm = () => {
  return useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  })
}

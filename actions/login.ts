'use server'
import * as z from 'zod'
import { LoginSchema } from '@/schemas'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const login = async (values: z.infer<typeof LoginSchema>) => {
   const validatedFields = LoginSchema.safeParse(values)

   if (!validatedFields.success) {
      return {error: 'Invalid Fields'}
   }

   const { email } = validatedFields.data

   try {
      
   }
}
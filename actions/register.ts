'use server'

import { db } from '@/lib/db'
import { NewAccountSchema } from '@/schemas'
import * as z from 'zod'
import { getUserByEmail } from '@/data/user'


export const register = async (values: z.infer<typeof NewAccountSchema>) => {
   let role;
   const validatedFields = NewAccountSchema.safeParse(values)
   if (!validatedFields.success) {
      throw new Error('Invalid fields')
   }
   const { id, email, username, wallet } = validatedFields.data

   const existingUser = await getUserByEmail(email)
   
   if (existingUser) {
      return {error: 'Email already exists.'}
   }


   await db.user.create({
      data: {
         id,
         email,
         username,
         wallet
      }
   })
   .catch((error) => {
      return new Error(error)
   })
   .then((user) => { return user})

}
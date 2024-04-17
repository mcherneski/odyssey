import * as z from 'zod';

export const LoginSchema = z.object({
   email: z.string().email({
      message: "Please enter a valid email"
   })
})

export const RegisterSchema = z.object({
   email: z.string().email({
      message: "Email is required"
   }),
   // name: z.string().min(1, {
   //    message: "Name is required"
   // })
})
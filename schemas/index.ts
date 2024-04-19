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
   username: z.string().min(3, {
      message: "Username is required"
   })
})

export const NewAccountSchema = z.object({
   id: z.string().length(1, {
      message: 'ID is required'

   }),
   email: z.string().email({
      message: 'Email is required'
   }),
   username: z.string().min(3, {
      message: 'Username must be at least 3 characters.'
   }),
   wallet: z.string().refine(wallet => wallet.startsWith('0x') && wallet.length === 64, {
      message: 'Invalid wallet address'
   })
})
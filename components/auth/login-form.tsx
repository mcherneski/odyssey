'use client'
import {
   Form,
   FormControl, 
   FormField,
   FormItem,
   FormLabel,
   FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAuthenticate, useUser } from '@alchemy/aa-alchemy/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '@/schemas/index'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSuccess } from '@/components/form-success'
import { FormError } from '@/components/form-error'
import { CardWrapper } from '@/components/card-wrapper'
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/webauthn'


export const LoginForm = ({}) => {
   const [success, setSuccess] = useState<string | undefined>('')
   const [error, setError] = useState<string | undefined>('')
   const router = useRouter()
   const user = useUser()
   const { data: session, update, status } = useSession()

   const { authenticate, isPending } = useAuthenticate({
      onSuccess: (user: any) => {
        console.log('User data', user)
      //   router.push('/')
      },
      onError: (error: any) => {
        console.log('Error', error)
      },
    })

   const onSubmit = (values: z.infer<typeof LoginSchema>) => {
      console.log('Form submitted')
      setError('')
      setSuccess('')
      console.log('Client side form values: ', values)

         authenticate({
            type: 'passkey',
            createNew: false,
         })

   }

   const form = useForm<z.infer<typeof LoginSchema>>({
      resolver: zodResolver(LoginSchema),
      defaultValues: {
         email: ''
      }
   })

   return (
      <CardWrapper
         headerLabel='Welcome Back!'
         backButtonLabel="Don't have an account?"
         backButtonHref='/auth/register'
      >
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
               className='space-y-2'>
            <div className='space-y-2'>
               <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                           <Input
                              disabled={isPending}
                              {...field}
                              placeholder='Email Address'
                              type='email'
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>
            <FormError message={ error } />
            <FormSuccess message={ success } />
            <Button
               type='submit'
               variant='default'
               disabled={isPending}
            >
               Log In
            </Button>
            </form>
         </Form>
      </CardWrapper>
   )
}
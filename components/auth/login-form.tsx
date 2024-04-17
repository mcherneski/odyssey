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
import { useAuthenticate } from '@alchemy/aa-alchemy/react'
import { startTransition, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '@/schemas/index'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSuccess } from '@/components/form-success'
import { FormError } from '@/components/form-error'
import { CardWrapper } from '@/components/card-wrapper'
import * as z from 'zod'

export const LoginForm = ({}) => {
   const refEmail = useRef<string>('')
   const [success, setSuccess] = useState<string | undefined>('')
   const [error, setError] = useState<string | undefined>('')

   const { authenticate, isPending } = useAuthenticate()

   const handleLogin = () => {
      const result = authenticate({
         type: 'passkey',
         createNew: false,
      })
      console.log('Passkey auth result: ', result)
   }

   const onSubmit = (values: z.infer<typeof LoginSchema>) => {
      console.log('Form submitted')
      setError('')
      setSuccess('')
      console.log(values)

      startTransition(() => {
         authenticate({
            type: 'passkey',
            createNew: false,
         })
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



// <CardHeader>
//             <CardTitle>Log In</CardTitle>
//             <CardDescription>Sign in via email magic link!</CardDescription>
//          </CardHeader>
//          <CardContent className=''>
//             <Input
//                type='email'
//                placeholder='Email Address'
//                onChange={handleEmailChange} 
//                className='m-2 w-full'
//             />
//             <Button 
//                className='w-full m-2'
//                type='submit'
//                variant={'default'}
//                onClick={handleLogin}
//                disabled={isPending}
//             >
//                {isPending ? 'Verifying...' : 'Log In'}
//             </Button>
//          </CardContent>
//          <CardFooter>
//             <p>{isPending ? <FormSuccess message='Please check your email'/> : ''}</p>
//          </CardFooter>
//       </Card>
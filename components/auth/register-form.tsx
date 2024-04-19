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
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSuccess } from '@/components/form-success'
import { FormError } from '@/components/form-error'
import { CardWrapper } from '../card-wrapper'
import { RegisterSchema } from '@/schemas'

// import { CircleX } from 'lucide-react'

export const RegisterForm = ({}) => {
   const refEmail = useRef<string>('')
   const [success, setSuccess] = useState<string | undefined>('')
   const [createError, setError] = useState<string | undefined>('')

   const { authenticate, isPending, error } = useAuthenticate()

   const form = useForm<z.infer<typeof RegisterSchema>>({
      resolver: zodResolver(RegisterSchema),
      defaultValues: {
         email: '',
         username: '',
      }
   })

   const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
      console.log('Form Submitted')
      setError('')
      setSuccess('')

      authenticate({
         type: 'passkey',
         createNew: true,
         username: values.email
      })

      if (error) {
         setError(error.message)
      }
   }

   return (
      <CardWrapper
         headerLabel='Find your tribe!'
         backButtonLabel='Already have an account?'
         backButtonHref='/auth/login'
      >
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
               className='space-y-2'
            >
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
               <FormField 
                  control={form.control}
                  name='username'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                           <Input
                           disabled={isPending}
                           {...field}
                           placeholder='Username'
                           type="text"
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>
            <FormError message={ error } />
            {/* <FormSuccess messagae={ success } /> */}
            <Button
               type='submit'
               variant='default'
               disabled={isPending}
            >
               Sign Up
            </Button>
            </form>
         </Form>
      </CardWrapper>
   )
}
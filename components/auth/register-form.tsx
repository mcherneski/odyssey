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
import { useRouter } from 'next/navigation'
import { FormError } from '@/components/form-error'
import { CardWrapper } from '../card-wrapper'
import { RegisterSchema } from '@/schemas'
import { register } from '@/actions/register'
import { getUserByEmail, getUserByUsername } from '@/data/user'
import * as z from 'zod'

// import { CircleX } from 'lucide-react'

export const RegisterForm = ({}) => {
   const refUsername = useRef<string>('')
   const refEmail = useRef<string>('')
   const [success, setSuccess] = useState<string | undefined>('')
   const [createError, setError] = useState<string | undefined>('')
   const [allowCreate, setAllowCreate] = useState<boolean>(false)
   const router = useRouter()

   const { authenticate, isPending, error } = useAuthenticate({
      onSuccess: (user: any) => {
         console.log('Alchemy user data', user)
         console.log('User Email: ', refEmail.current)
         console.log('Username: ', refUsername.current)

         register({
            id: user.userId,
            email: refEmail.current,
            username: refUsername.current,
            wallet: user.address
         })

         router.push('/')
      },
      onError: (error: any) => {
         setError(error.message)
         console.log('Error: ', error)
      }
   })

   const form = useForm<z.infer<typeof RegisterSchema>>({
      resolver: zodResolver(RegisterSchema),
      defaultValues: {
         email: '',
         username: '',
      }
   })

   const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
      console.log('Form Submitted')
      console.log('Client side form values: ', values)

      setError('')
      setSuccess('')
      refUsername.current = values.username
      refEmail.current = values.email
      console.log('Email value: ', values.email)
      console.log('Username value: ', values.username)
      
      const reqBody = JSON.stringify({
         email: values.email,
         username: values.username
      })

      console.log('Body: ', reqBody)

      const response = await fetch('/api/new-account-checks', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: reqBody
      })

      const data = await response.json()
      console.log('Response: ', data)


      if (Object.keys(data).length === 0) 
         {
            authenticate({
               type: 'passkey',
               createNew: true,
               username: values.username
            })
         } else {
            console.log('Data message: ', data.body.message)
            setError(data.body.message)
         }

      // const isExistingEmail = await getUserByEmail(values.email)
      // const isExistingUsername = await getUserByUsername(values.username)

      // console.log('Existing Email: ', isExistingEmail)
      // console.log('Existing Username: ', isExistingUsername)

      // if (!isExistingEmail && !isExistingUsername) {
      //    authenticate({
      //       type: 'passkey',
      //       createNew: true,
      //       username: values.username
      //    })
      // } else {
      //    setError('User with this email already exists. Please login.')
      // }

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
            {createError ? <FormError message={createError} /> : null}
            {/* <FormError message={ createError | error } /> */}
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
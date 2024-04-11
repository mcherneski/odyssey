'use client'
import {
   Card,
   CardContent,
   CardDescription, 
   CardFooter,
   CardHeader,
   CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAuthenticate } from '@alchemy/aa-alchemy/react'
import { useCallback, useState, FC, useRef } from 'react'

//TODO: Exparament with changing the email from state to ref
interface Props {
   onClose: () => void
}

export const LoginCard:FC<Props> = ({ onClose }) => {
   const [email, setEmail] = useState<string>('')
   const { authenticate, isPending } = useAuthenticate()

   const handleLogin = () => {
      authenticate({
         type: 'email',
         email
      })
   }

   return (
      <Card>
         <CardHeader>
            <CardTitle>Log In</CardTitle>
            <CardDescription>Log in with Email</CardDescription>
            <Button
               variant={'outline'}
               onClick={onClose}
               className='w-12 h-12'
            >
               Close
            </Button>
         </CardHeader>
         <CardContent className=''>
            <Input
               type='email'
               placeholder='Email Address'
               value={email}
               onChange={(e) => setEmail(e.target.value)} 
               className='m-2 w-full'
            />
            <Button 
               className='w-full m-2'
               type='submit'
               variant={'default'}
               onClick={() => handleLogin()}
               disabled={isPending}
            >
               {isPending ? 'Please Check Your Email' : 'Log In'}
            </Button>
         </CardContent>
         <CardFooter>
            <p>Todo: Support Email Address</p>
         </CardFooter>
      </Card>
   )
}


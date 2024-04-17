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
import { useRef } from 'react'
import { FormSuccess } from '@/components/form-success'
// import { CircleX } from 'lucide-react'

export const RegisterForm = ({}) => {
   const refEmail = useRef<string>('')
   const { authenticate, isPending } = useAuthenticate()

   const handleLogin = () => {
      const result = authenticate({
         type: 'passkey',
         createNew: true,
         username: refEmail.current
      })
      console.log('Passkey auth result: ', result)
   }

   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      refEmail.current = event.target.value
   }

   return (
      <Card
         className='fixed z-10 flex flex-col items-center justify-center inset-0 h-1/2 w-1/2 min-w-[400px] m-auto'
      >
         <CardHeader>
            <CardTitle>Sign Up!</CardTitle>
            <CardDescription>Connect to your tribe!</CardDescription>
         </CardHeader>
         <CardContent className=''>
            <Input
               type='email'
               placeholder='Email Address'
               onChange={handleEmailChange} 
               className='m-2 w-full'
            />
            <Button 
               className='w-full m-2'
               type='submit'
               variant={'default'}
               onClick={handleLogin}
               disabled={isPending}
            >
               {isPending ? 'Verifying...' : 'Log In'}
            </Button>
         </CardContent>
         <CardFooter>
            <p>Privacy Information</p>
         </CardFooter>
      </Card>
   )
}


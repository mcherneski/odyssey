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
import { FC, useRef } from 'react'
import { CircleX } from 'lucide-react'

//TODO: Exparament with changing the email from state to ref
interface Props {
   onClose: () => void
}

export const LoginCard:FC<Props> = ({ onClose }) => {
   // const [email, setEmail] = useState<string>('')
   const refEmail = useRef<string>('')
   const { authenticate, isPending } = useAuthenticate()

   const handleLogin = () => {
      authenticate({
         type: 'email',
         email: refEmail.current
      })
   }

   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      refEmail.current = event.target.value
   }

   return (
      <Card
         className='fixed z-10 flex flex-col items-center justify-center inset-0 h-1/2 w-1/2 min-w-[400px] m-auto'
      >
         <CardHeader>
            <CardTitle>Log In</CardTitle>
            <CardDescription>Sign in via email magic link!</CardDescription>
            <Button
               variant={'ghost'}
               onClick={onClose}
               className='w-12 h-12 absolute top-0 right-0 m-3'
               size='icon'
            >
               <CircleX />
            </Button>
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
            <p>{isPending ? 'Please check your email.' : ''}</p>
            
         </CardFooter>
      </Card>
   )
}


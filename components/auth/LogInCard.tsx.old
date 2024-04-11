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
import { useAuthenticateUser } from '@/queries/authenticateUser'
import { useCallback, useState } from "react"

//TODO: Exparament with changing the email from state to ref
export interface LoginCardProps {
   signer: AlchemySigner | undefined;
}

export const LogInCard = ({ signer }: LoginCardProps) => {
   const [email, setEmail] = useState<string>('')
   const onEmailChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
      []
   )
   const { isAuthenticatingUser, authenticatedUser } = useAuthenticateUser(signer)
   
   
   return (
      <Card>
         <CardHeader>
            <CardTitle>Log In</CardTitle>
            <CardDescription>Log in with Email</CardDescription>
         </CardHeader>
         <CardContent className=''>
            <Input
               type='email'
               placeholder='Email'
               value={email}
               onChange={onEmailChange} 
               className='m-2 w-full'
            />
            <Button 
               className='w-full m-2'
               type='submit'
               variant={'default'}
               onClick={() => authenticatedUser({type: 'email', email})}
            >
                  Log In
            </Button>
         </CardContent>
         <CardFooter>
            {isAuthenticatingUser ? ( <p>Check your Email!</p> ): ( <p>Please Log In</p> )}
         </CardFooter>
      </Card>
   )
}


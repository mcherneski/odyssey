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

import { useCallback, useState } from "react"

//TODO: Exparament with changing the email from state to ref

export const LoginCard = () => {
   const [email, setEmail] = useState<string>('')
   const onEmailChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
      []
   )

   return (
      <Card>
         <CardHeader>
            <CardTitle>Log In</CardTitle>
            <CardDescription>Log in with Email</CardDescription>
         </CardHeader>
         <CardContent>
            <Input type='email' placeholder='email' value={email} onChange={onEmailChange} />
            <Button 
               className='w-full'
               type='submit'
               variant={'default'}
            >
                  Log In
            </Button>
         </CardContent>
      </Card>
   )
}


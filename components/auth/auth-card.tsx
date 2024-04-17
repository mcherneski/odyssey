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
import { LoginForm } from '@/components/auth/login-form'

//TODO: Exparament with changing the email from state to ref
// Idea: useState to change the step of the auth process. 

export const AuthCard = ({ children }: Readonly<{
   children: React.ReactNode
}>) => {
   
   return (
      <Card
         className='fixed z-10 flex flex-col items-center justify-center inset-0 h-1/2 w-1/2 min-w-[400px] m-auto'
      >
         {children}
      </Card>
   )
}


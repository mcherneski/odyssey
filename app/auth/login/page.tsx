'use client'
import { useEffect } from "react"
import { LoginCard } from "@/components/auth/login-card"
import { LoginForm } from "@/components/auth/login-form"
import { useSignerStatus } from '@alchemy/aa-alchemy/react'
import { useRouter } from 'next/navigation'

export const Login = () => {
   // Put a back button instead of an 'onClose' function
   const { status } = useSignerStatus()
   const router = useRouter()
   
   useEffect(() => {
      console.log('Login Page signer status: ', status)
      if (status === 'CONNECTED'){
         // TODO: Maybe push to the user's profile page
         router.push('/')
      }
   },[router, status])

   return (
      <LoginCard>
         <LoginForm />
      </LoginCard>
   )

}

export default Login
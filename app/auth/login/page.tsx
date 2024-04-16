'use client'
import { LoginCard } from "@/components/auth/login-card";
import { LoginForm } from "@/components/auth/login-form";

export const Login = () => {
   // Put a back button instead of an 'onClose' function

   return (
      <LoginCard>
         <LoginForm />
      </LoginCard>
   )

}

export default Login
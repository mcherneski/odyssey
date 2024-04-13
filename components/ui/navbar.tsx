'use client'
import {Button} from '@/components/ui/button'
import { useUser, useSigner, useSignerStatus } from '@alchemy/aa-alchemy/react'
import { useState } from 'react'
import { LoginCard } from '@/components/auth/login-card'
import { useRouter, useSearchParams } from 'next/navigation'

export const Navbar = () => {
   const [showAuthCard, setShowAuthCard] = useState<boolean>(false)
   const signer = useSigner()
   const { status } = useSignerStatus()
   const user = useUser()
   const router = useRouter()
   const searchParams = useSearchParams()
   
   if (searchParams)
      {
         const strSearchParams = searchParams.toString()
         if (strSearchParams.includes('orgId'))
            {
               router.push('/')
            }
      }
 
   console.log('Authenticated user: ', user)
   console.log('Signer Status: ', status)

   const handleLoginClick = () => {
      setShowAuthCard(true)
   }

   const handleClose = () => {
      setShowAuthCard(false)
   }

   const handleLogout = async () => {
      if (signer && user && status === 'CONNECTED') {
         await signer.disconnect()  
      }
   }

   return(
      <div className='flex flex-row text-center bg-cyan-500 justify-between items-center h-12'>
         <h1
            className='flex text-2xl m-4'
         >
            Odyssey
         </h1>
         {status === 'CONNECTED' ? (
            <Button
               className='flex'
               onClick={handleLogout}
               variant='default'
               size='lg'
            >
               Log Out
            </Button>
         ): (
            <Button
            className=''
            onClick={handleLoginClick}
            variant='default'
         >
            Log In
         </Button>
         )}

         {showAuthCard && <LoginCard onClose={handleClose}/> }
      </div>
   )
}

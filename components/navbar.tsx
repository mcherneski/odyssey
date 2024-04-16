'use client'
import { useEffect } from 'react'
import {Button} from '@/components/ui/button'
import { ProfileButton } from '@/components/profile-button'
import { useUser, useSigner, useSignerStatus } from '@alchemy/aa-alchemy/react'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export const Navbar = () => {
   const [showAuthCard, setShowAuthCard] = useState<boolean>(false)
   const signer = useSigner()
   const { status } = useSignerStatus()
   const user = useUser()
   const router = useRouter()
   // const searchParams = useSearchParams()
   
   // useEffect(() => {
   //    if (searchParams)
   //       {
   //          const strSearchParams = searchParams.toString()
   //          if (strSearchParams.includes('orgId'))
   //             {
   //                router.push('/')
   //             }
   //       }
   // },[router, searchParams])

 
   console.log('Authenticated user: ', user)
   console.log('Signer Status: ', status)

   const handleLoginClick = () => {
      router.push('/auth/login')
   }
   
   // Handle authentication Redirect


   return(
      <div className='flex flex-row text-center bg-cyan-500 justify-between items-center h-12'>
         <h1 className='flex text-2xl m-4'>Odyssey</h1>
         {status === 'CONNECTED' ? (
            <ProfileButton />
         ): (
            <Button
            className=''
            onClick={handleLoginClick}
            variant='default'
         >
            Log In
         </Button>
         )}

      </div>
   )
}

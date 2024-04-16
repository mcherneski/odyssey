'use client'
import { Button } from '@/components/ui/button'
import { ProfileButton } from '@/components/profile-button'
import { useSignerStatus } from '@alchemy/aa-alchemy/react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Spinner from './ui/loading-spinner'

export const Navbar = () => {
   const { status } = useSignerStatus()
   const router = useRouter()

   const handleLoginClick = () => {
      router.push('/auth/login')
   }

      return(
         <div className='flex flex-row text-center bg-cyan-500 justify-between items-center h-12'>
            <h1 className='flex text-2xl m-4'>Odyssey</h1>
            { 
               status === 'INITIALIZING' || status === 'AUTHENTICATING' || status === 'AWAITING_EMAIL_AUTH' ? (
                  <Spinner />
               ) : status === 'CONNECTED' ? (
                  <ProfileButton />
               ) : (
                  <Button
                     className=''
                     onClick={handleLoginClick}
                     variant='default'
                  >
                     Log In
                  </Button>
               )
            }
         </div>
      )
}





// return(
//    <div className='flex flex-row text-center bg-cyan-500 justify-between items-center h-12'>
//       <h1 className='flex text-2xl m-4'>Odyssey</h1>
//       {status === 'CONNECTED' ? (
//          <ProfileButton />
//       ): (
//          <Button
//          className=''
//          onClick={handleLoginClick}
//          variant='default'
//       >
//          Log In
//       </Button>
//       )}

//    </div>
// )

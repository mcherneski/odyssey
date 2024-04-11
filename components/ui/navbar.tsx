'use client'
import {Button} from '@/components/ui/button'
import { useAuthenticate, useUser } from '@alchemy/aa-alchemy/react'
import { useState } from 'react'
import { LoginCard } from '@/components/auth/login-card'

export const Navbar = () => {
   const [showAuthCard, setShowAuthCard] = useState<boolean>(false)
   const  user = useUser()
   const {authenticate, isPending} = useAuthenticate()
   
   console.log('Authenticated user: ', user)
   const handleLoginClick = () => {
      setShowAuthCard(true)
   }

   const handleClose = () => {
      setShowAuthCard(false)
   }

   if (isPending) {
      return <div>Loading...</div>
   }

   return(
      <div>
         {user ? (
            <Button
               className=''
               onClick={() => console.log('Log Out')}
               variant='default'
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








// const [signer] = useState<AlchemySigner | undefined>(() => {
//    if (typeof window === 'undefined') return undefined

//    return new AlchemySigner({
//       client: {
//          connection: {
//             rpcUrl: '/api/rpc',
//          },
//          iframeConfig: {
//             iframeContainerId: 'turnkey-iframe-container',
//          }
//       }
//    })
// })

// const { user, account, isLoadingUser } = useAuthenticateUser(signer)

// return (
//    <>
//       <TurnkeyIframe />
//       <nav className='flex min-w-screen flex-row items-center justify-center gap-4 py-24'>
//          {isLoadingUser ? (
//             //Loading Spinner
//             <div className='flex items-center justify-center'>
//                <div
//                   className='text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white'
//                   role='status'
//                ></div>
//             </div>
//          ) : user != null && account != null ? (
//             <ProfileWidget user={user} account={account} />
//          ) : (
//             <LoginButton />
//          )}
//       </nav>
//    </>
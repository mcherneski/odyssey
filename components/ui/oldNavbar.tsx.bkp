'use client'
import { LoginButton } from '@/components/auth/login-button'
import { useAuthenticateUser } from '@/queries/authenticateUser'
import {AlchemySigner} from '@alchemy/aa-alchemy'
import { useState } from 'react'
import { ProfileWidget } from '@/components/ui/profile-widget'
import { TurnkeyIframe } from '../auth/TurnkeyIframe'


export const Navbar = () => {
   const [signer] = useState<AlchemySigner | undefined>(() => {
      if (typeof window === 'undefined') return undefined

      return new AlchemySigner({
         client: {
            connection: {
               rpcUrl: '/api/rpc',
            },
            iframeConfig: {
               iframeContainerId: 'turnkey-iframe-container',
            }
         }
      })
   })

   const { user, account, isLoadingUser } = useAuthenticateUser(signer)
   
   return (
      <>
         <TurnkeyIframe />
         <nav className='flex min-w-screen flex-row items-center justify-center gap-4 py-24'>
            {isLoadingUser ? (
               //Loading Spinner
               <div className='flex items-center justify-center'>
                  <div
                     className='text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white'
                     role='status'
                  ></div>
               </div>
            ) : user != null && account != null ? (
               <ProfileWidget user={user} account={account} />
            ) : (
               <LoginButton />
            )}
         </nav>
      </>
   )
}

'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AlchemyAccountProvider } from '@alchemy/aa-alchemy/react'
import { PropsWithChildren, Suspense } from 'react'
import { config } from '@/config'
import { SessionProvider } from 'next-auth/react'

const queryClient = new QueryClient()

export const Providers = (props: PropsWithChildren) => {

   return (
      <Suspense>
         <QueryClientProvider client={queryClient}>
            <AlchemyAccountProvider config={config} queryClient={queryClient}>
               <SessionProvider>
                  {props.children}
               </SessionProvider>
            </AlchemyAccountProvider>
         </QueryClientProvider>
      </Suspense>
   )
}
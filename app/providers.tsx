'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AlchemyAccountProvider } from '@alchemy/aa-alchemy/react'
import { PropsWithChildren, Suspense } from 'react'
import { config } from '@/config'

const queryClient = new QueryClient()

export const Providers = (props: PropsWithChildren) => {

   return (
      <QueryClientProvider client={queryClient}>
         <AlchemyAccountProvider config={config} queryClient={queryClient}>
            {props.children}
         </AlchemyAccountProvider>
      </QueryClientProvider>
   )
}
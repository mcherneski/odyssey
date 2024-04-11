'use client'

import { MultiOwnerModularAccount, createMultiOwnerModularAccount } from '@alchemy/aa-accounts';
import { User, createAlchemySmartAccountClient } from '@alchemy/aa-alchemy'
import { useState } from 'react'
import { baseSepolia } from 'viem/chains';

export interface ProfileCardProps {
   user: User;
   account: MultiOwnerModularAccount
}


export const ProfileWidget = ({ user, account }: ProfileCardProps) => {
   const [provider] = useState(() => {
      if (typeof document === 'undefined') {
         return undefined
      }

      const gasManagerPolicyId = process.env.NEXT_PUBLIC_ALCHEMYGAS_MANAGER_POLICY_ID

      if (gasManagerPolicyId == null) {
         throw new Error('Missing gas policy ID')
      }

      return createAlchemySmartAccountClient({
         chain: baseSepolia,
         rpcUrl: "/api/rpc",
         account,
         gasManagerConfig: {
            policyId: gasManagerPolicyId,
         },
         opts: {
            txMaxRetries: 20,
         }
      })
   })

   return (
      <div className='flex flex-row rounded-lg bg-white p-10 dark:gb-slate-800'>
         <div className='flex flex-col gap-4'>
            <div className='text-wrap rounded-lg border p-3 dark:border-slate-800 dark:bg-emerald-800 dark:text-white'>
               <p>{provider?.account.address}</p>
            </div>
            <div className='flex flex-col gap-2'>
               <div>{user?.email}</div>
            </div>
         </div>
      </div>
   )
}

'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react';

export default function Home() {
   // This doesn't work - need to redirect the URL with cookies. 
   // const router = useRouter()
   // const searchParams = useSearchParams()
 
   // useEffect(() => {
   //     if (searchParams)
   //        {
   //           const strSearchParams = searchParams.toString()
   //           if (strSearchParams.includes('orgId'))
   //              {
   //                 router.push('/')
   //              }
                
   //        }
   //  },[router, searchParams])

  return (
    <h1>Hello</h1>
  );
}

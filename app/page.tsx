'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react';

export default function Home() {

  const router = useRouter()
   const searchParams = useSearchParams()
   
   useEffect(() => {
      if (searchParams)
         {
            const strSearchParams = searchParams.toString()
            if (strSearchParams.includes('orgId'))
               {
                  router.push('/')
               }
               
         }
   },[router, searchParams])

   const strSearchParams = searchParams.toString()
   if (strSearchParams.includes('orgId')) { return (<div>Please Wait...</div>)}

  return (
    <h1>Hello</h1>
  );
}

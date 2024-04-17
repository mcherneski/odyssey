import type { NextRequest, NextResponse } from 'next/server'
import {
   DEFAULT_LOGIN_REDIRECT,
   apiAuthPrefix,
   authRoutes,
   publicRoutes
} from '@/routes'

export default function middleware(request: NextRequest) {
   console.log('Request: ', request)
   const cookies = request.cookies.getAll()

   cookies.forEach((cookie) => {
      console.log('Cookie: ', cookie.name, cookie.value)
   })

   // if (request.url.)
}

export const config = {
   matcher: [
   // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)"
   ]
}
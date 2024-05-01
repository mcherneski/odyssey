import type { NextRequest, NextResponse } from 'next/server'
import {
   DEFAULT_LOGIN_REDIRECT,
   apiAuthPrefix,
   authRoutes,
   publicRoutes
} from '@/routes'

export { auth as middleware } from '@/auth'

export default function middleware(request: NextRequest) {
   const { nextUrl } = request;
   // console.log('Request data: ', request)
   const isAuthRoute = authRoutes.includes(nextUrl.pathname)
   const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
   const isApiRoute = nextUrl.pathname.startsWith(apiAuthPrefix)

   if (isApiRoute) {
      return
   }
   
   if (isAuthRoute) {
      
   }
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
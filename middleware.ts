import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
   DEFAULT_LOGIN_REDIRECT,
   apiAuthPrefix,
   authRoutes,
   publicRoutes
} from '@/routes'

export default function middleware(request: NextRequest) {
   const { nextUrl } = request;
   console.log('Middleware nextUrl: ', nextUrl)

   // This is the shit that redirects the url if orgId is present
   // const isOrgIdUrl = nextUrl.href.toString().includes('orgId')
   // console.log('isOrgIdUrl: ', isOrgIdUrl)

   // if (isOrgIdUrl){
   //    return Response.redirect(new URL('/', nextUrl))
   // }
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
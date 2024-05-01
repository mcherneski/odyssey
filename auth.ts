import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import Credentials from 'next-auth/providers/credentials'

const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            credentials: {
                message:{
                    label: 'Message', 
                    type: 'text',
                    placeholder: '0x0'
                },
                signature: {
                    label: 'Signature',
                    type: 'text',
                    placeholder: '0x0'
                }
            },
            async authorize({ request }) {
                const response = await fetch(request)
                if(!response.ok) return null
                return (await response.json()) ?? null
            }
        })
    ]
})
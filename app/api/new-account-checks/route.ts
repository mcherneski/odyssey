'use server'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: Request, res: NextResponse) {
    console.log('Request: ', req)
    let responseBody
    let statusCode

    const data = await req.json()
    const {email, username} = data

    console.log('Email: ', email)
    console.log('Username: ', username)

        const existingEmail = await db.user.findUnique({
            where: {
                email: email,
            },
        })

        console.log('Existing Email: ', existingEmail)
    
        const existingUsername = await db.user.findUnique({
            where: {
                username: username,
            },
        })
        
        console.log('Existing Username: ', existingUsername)


        if (existingEmail){
            console.log('Email already exists')
            responseBody = {
                message: 'Email already exists'
            }
            statusCode = 200
        }
    
        if (existingUsername){
            console.log('Username already exists')
            responseBody = {
                message: 'Username already exists'
            }
            statusCode = 200
        }

    


    // responseBody = JSON.stringify({message: 'Success', results: 'Hello World'})
    // statusCode = 200
    return NextResponse.json({body: responseBody, status: statusCode})
    // const emailCheck = await db.user.findUnique({
    //     where: {email}
    // })
}

'use server'
import { GeoDataManagerConfiguration, GeoDataManager } from 'dynamodb-geo-v3';
import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { NextResponse } from "next/server"

console.log('API Route: verify-location')
const ddb = new DynamoDB({
      region: 'us-west-2',
      credentials:{
         accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
      }
})
const geoConfig = new GeoDataManagerConfiguration(ddb, 'ProofOfAdventure_Locations')
const geoTableManager = new GeoDataManager(geoConfig)

export async function POST(req: Request, res: NextResponse) {
   let responseBody
   let statusCode 

   const data = await req.json()
   console.log('Raw Request Data: ', data)   

   const {Latitude, Longitude} = data
   console.log('Latitude: ', Latitude)
   console.log('Longitude: ', Longitude)

   try {
      console.log('Attempting geo query')

      const data = await geoTableManager.queryRadius({
         RadiusInMeter: 1000,
         CenterPoint: {
            latitude: Latitude,
            longitude: Longitude
         }
      })

      console.log('GeoData: ', data)

      if (data.length > 0) {
         responseBody = {
            message: 'Location Found',
            results: data[0]
         }
         statusCode = 200
      } else {
         responseBody = {
            message: 'Location Not Found',
            results: []
         }
         statusCode = 404
      }

   } catch (error) {
      responseBody = {
         message: 'Error calling API', 
         results: []
      }
      statusCode = 500
   }

   return NextResponse.json({ body: responseBody, status: statusCode })

}
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
 } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import { useSigner, useSignerStatus } from '@alchemy/aa-alchemy/react'
import { useRouter } from 'next/navigation'

export const ProfileButton = () => {
   const signer = useSigner()
   const { status } = useSignerStatus()
   const router = useRouter()


   const handleLogout = async () => {
      if (signer && status === 'CONNECTED') {
         await signer.disconnect()
         router.push('/')
      }
   }



   return (
      <div className='text-center'>
         <DropdownMenu>
            <DropdownMenuTrigger>
               <Avatar>
                  <AvatarImage src='/avatar-placeholder.png' />
                  <AvatarFallback>USR</AvatarFallback>
               </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
               <DropdownMenuLabel>My Profile</DropdownMenuLabel>
               <DropdownMenuSeparator />
               <DropdownMenuItem>Profile</DropdownMenuItem>
               <DropdownMenuItem>Settings</DropdownMenuItem>
               <DropdownMenuSeparator />
               <DropdownMenuItem>
                  <Button
                     onClick={handleLogout}
                     variant='link'
                     size='lg'
                     className='text-left'
                  >
                     Sign Out
                  </Button>
               </DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   )
}
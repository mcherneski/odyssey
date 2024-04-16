// Create Project
// View Communities / NFTs collected
// Edit Profile

export const UserPage = ({ params }: {params: { slug: string}}) => {

   return (
      <div>
         <h1>User Page</h1>
         <p>{params.slug}</p>
      </div>
   )
}

export default UserPage
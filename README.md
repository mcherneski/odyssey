# Stuff to do
- Figure out why 'login' flashes on page load
✅ Remove the orgid from the redirect from authentication
- Make sure user can't refresh after logout and get logged back in.
- Launch contract for end user
- Authentication
   - User Profiles
   - Administrative 

   
## Ideas: 
- Remove the need for users to pay for nft with crypto.


## Code Snippets

Conditional Rendering using Switch
``` Javascript
         {(() => {
            switch (step) {
               case 'auth': 
                  return <LoginForm />
               case 'setup': 
                  return <h1>Setup</h1>
               default: 
                  return null
            }
         }) ()
         }
```
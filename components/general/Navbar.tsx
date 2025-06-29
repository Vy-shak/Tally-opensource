import React, { use } from 'react'
import { Button } from '../export'
import { useUser } from '@clerk/nextjs'

const Navbar = () => {
  const {user,isSignedIn} = useUser();

  const handlePublish = ()=>{
     if (!isSignedIn) {
         
     }
  }

  console.log("user",user);
  return (
    <div className='w-full border-y-2 border-r-2 !border-blue-200  px-3 rounded-lg   top-0 flex h-16 justify-between items-center'>
      <div className='flex justify-center items-center w-fit'>
        <Button>Publish</Button>
      </div>
    </div>
  )
}

export default Navbar

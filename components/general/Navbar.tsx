import React, { use } from 'react'
import { Button } from '../export'
import { useUser } from '@clerk/nextjs'
import { usePopup,popuptype,status } from '@/lib/usePopup'
import SignupPopup from '../create/SignupPopup'

const Navbar = () => {
  const {user,isSignedIn} = useUser();
  const {updatePopup} = usePopup()

  const handlePublish = ()=>{
     if (!isSignedIn) {
         updatePopup({type:popuptype.signup,status:status.open})
     }
  }

  return (
    <div className='w-full border-y-2 border-r-2 !border-blue-200  px-3 rounded-lg   top-0 flex h-16 justify-between items-center'>
      <div></div>
      <div className='flex justify-center items-center w-fit'>
        <Button onClick={handlePublish}>Publish</Button>
      </div>
    </div>
  )
}

export default Navbar

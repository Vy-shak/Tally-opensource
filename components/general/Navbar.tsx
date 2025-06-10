import React from 'react'
import { Button } from '../export'

const Navbar = () => {
  return (
    <div className='w-full border-2 px-3 rounded-lg   top-0 flex h-16 justify-between items-center'>
      <div>

      </div>
      <div className='flex justify-center items-center w-fit'>
        <Button>Publish</Button>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Button } from '../export'

function Navbar() {
  return (
    <div className='w-full top-0 h-16 py-2'>
      <div className='w-full px-2 flex justify-between items-center h-full bg-white outline-1 rounded-lg'>
          <div></div>
          <div className='flex justify-center items-center'>
            <Button variant={"default"}>Publish</Button>
          </div>
      </div>
    </div>
  )
}

export default Navbar

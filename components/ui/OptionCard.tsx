import React from 'react'
import {Trash2,Copy} from "lucide-react"

function OptionCard() {
  return (
    <div className='w-40 absolute rounded p-6 bg-white flex flex-col items-start justify-start'>
      <div className='flex justify-center items-center'>
        <Trash2 />
        <span>Delete</span>
      </div>
      <div className='flex justify-center items-center'>
        <Copy  />
        <span>Copy</span>
      </div>
    </div>
  )
}

export default OptionCard

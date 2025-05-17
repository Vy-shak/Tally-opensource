import React from 'react'
import {Trash2,Copy} from "lucide-react"
import { X } from 'lucide-react'

interface optioonCardProps {
   ToggleOption:any
}

function OptionCard({ToggleOption}: optioonCardProps) { 

  const handleExit = ()=>{
      ToggleOption(false)
  }
  return (
    <div className='w-40 absolute rounded-lg border-2 z-10 border-neutral-200 gap-y-4 py-4 px-3  bg-white flex flex-col items-start justify-start'>
      <div  className='w-full flex justify-end items-center h-fit'>
        <X onClick={handleExit} size={18} color='grey' />
      </div>
      <div className='flex gap-x-1 justify-center items-center'>
        <Trash2 size={18} color='grey' />
        <span className='text-sm text-neutral-800 font-medium'>Delete</span>
      </div>
      <div className='flex gap-x-1 justify-center items-center'>
        <Copy size={18} color='grey' />
        <span className='text-sm text-neutral-800 font-medium'>Copy</span>
      </div>
    </div>
  )
}

export default OptionCard

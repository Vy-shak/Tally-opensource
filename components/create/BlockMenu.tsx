import React from 'react'
import { Dispatch,SetStateAction } from 'react'
interface BlockMenuProps {
    Onclick:()=>void
    icon: React.ReactNode,
    title: string,
    setOpen:Dispatch<SetStateAction<boolean>>
  }

function BlockMenu({ icon, title,Onclick,setOpen }: BlockMenuProps) {

  const handleclick= ()=>{
    Onclick()
    setOpen(false)
  }
  return (
    <div onClick={handleclick} className='w-fit px-2 py-1 bg-white border-2 rounded justify-start flex items-center'>
      {icon}
      <span className='text-xs'>{title}</span>
    </div>
  )
}

export default BlockMenu

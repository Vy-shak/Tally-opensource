import React from 'react'
interface BlockMenuProps {
    Onclick:()=>void
    icon: React.ReactNode,
    title: string,}

function BlockMenu({ icon, title,Onclick }: BlockMenuProps) {
  return (
    <div onClick={Onclick} className='w-fit px-2 py-1 bg-white border-2 rounded justify-start flex items-center'>
      {icon}
      <span className='text-xs'>{title}</span>
    </div>
  )
}

export default BlockMenu

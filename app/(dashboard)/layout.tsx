import React from 'react'
import Sidebar from '@/components/general/Sidebar'

function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='flex justify-start items-start h-screen'>
          <Sidebar />
          <div className='w-full h-screen overflow-y-scroll flex justify-start items-start'>
            <div className='w-full flex justify-start items-start'>
              {children}
            </div>
          </div>
    </div>
  )
}

export default layout

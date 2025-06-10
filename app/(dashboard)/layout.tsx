import React from 'react'
import Sidebar from '@/components/general/Sidebar'
import Navbar from '@/components/general/Navbar'

function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='flex w-full justify-start items-start h-screen'>
          <Sidebar />
          <div className='w-full flex-col h-screen overflow-y-scroll flex justify-start items-start'>
            <div className='w-full flex-col flex justify-start items-start'>
              {children}
            </div>
          </div>
    </div>
  )
}

export default layout

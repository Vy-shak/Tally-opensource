"use client"
import React, { ReactNode } from 'react'
import SidebarMenu from './SidebarMenu'
import {FileText, FilePenLine, PanelRight, Code  } from "lucide-react"
import { useState } from 'react';

export const sidebarItems = [
  { id: 1,
    label: 'My forms',
    icon: <FileText className='text-neutral-700 cursor-pointer w-5' />,
    route: '/myforms',
    href: '/myforms',
  },
  {
    id: 2,  
    label: 'Editor',
    icon:<Code className='text-neutral-700 cursor-pointer w-5' />,
    route: '/create',
    href: '/create',
  },
];


function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setIsCollapsed((prev)=>!prev);
  };
  return (
      <div className={`${isCollapsed?"w-fit":"w-48"} px-2 shrink-0 pt-12 h-screen bg-white border-r-1 border-blue-200`}>
        <div className='w-full flex px-2 justify-end items-center'>
          <PanelRight onClick={toggleCollapsed} className='text-neutral-700 cursor-pointer w-5' />
        </div>
        <div className='w-full pt-4 flex flex-col gap-y-2 justify-start items-start'>
                   {sidebarItems.map((item)=>(
          <SidebarMenu isCollapsed={isCollapsed} key={item.id} href={item.href} route={item.route} label={item.label} icon={item.icon} />
         ))}
        </div>
      </div>
  )
}

export default Sidebar

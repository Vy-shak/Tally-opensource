"use client"
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { usePathname } from 'next/navigation'
import React, { ReactElement }  from 'react'

interface sidebarMenu {
    icon:React.JSX.Element | undefined
    label:string
    route:string,
    href:string,
    isCollapsed:boolean
}

function SidebarMenu({icon,label,route,href,isCollapsed}:sidebarMenu) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith("/",href.length);
  return (
    <Link href={route} className={`flex justify-start  items-center  cursor-pointer gap-x-1 px-2 ${isActive?"bg-blue-700 text-white":"bg-blue-50 text-neutral-800"} py-1 w-full font-medium rounded-md h-fit`}>
        <div className='w-fit h-fit'>
            {icon}
        </div>
        <span className={`text-sm ${isCollapsed?"hidden":"flex"} whitespace-nowrap  font-medium`}>{label}</span>
    </Link>
  )
}

export default SidebarMenu
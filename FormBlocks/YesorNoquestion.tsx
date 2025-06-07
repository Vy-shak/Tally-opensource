"use client"
import React  from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import Toolbar from '../components/ui/Toolbar'
import useSetLabel from '@/Hooks/useSetLabel'
import YesorNoblock from '@/components/create/YesorNoblock'

interface yesorNoprops {
  id: string,
}

function YesorNoquesion({ id, }: yesorNoprops) {
  const [openToolBar, setOpenToolBar] = useState(false);
  const questionRef = useRef<HTMLInputElement>(null);
  
  useSetLabel({ labelRef: questionRef, id });

  return (
    <div onMouseLeave={() => setOpenToolBar(false)} onMouseOver={() => setOpenToolBar(true)} className='flex items-start max-w-lg justify-start'>
      <div className='flex justify-start items-start'>
          <Toolbar blockId={id} show={openToolBar} />  
      </div>
      <div className='flex flex-col justify-start items-start'>
        <input ref={questionRef}  placeholder='type your question here..' className='text-lg w-screen border-none outline-none font-semibold text-neutral-900' />
        <YesorNoblock id={id} />
      </div>
    </div>
  )
}

export default YesorNoquesion
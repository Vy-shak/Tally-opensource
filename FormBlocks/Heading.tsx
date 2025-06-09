"use client"
import React  from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import Toolbar from '../components/ui/Toolbar'
import useSetLabel from '@/Hooks/useSetLabel'
import { BlockType } from '@/types/formTypes'

interface ShortAnswerProps {
  id: string,
  type:BlockType
}

function Heading({ id,type }: ShortAnswerProps) {
  const [openToolBar, setOpenToolBar] = useState(false);
  const questionRef = useRef<HTMLInputElement>(null);
  
  useSetLabel({ labelRef: questionRef, id });

  return (
    <div onMouseLeave={() => setOpenToolBar(false)} onMouseOver={() => setOpenToolBar(true)} className='flex items-start max-w-lg justify-start'>
      <div className='flex justify-start items-start'>
          <Toolbar blockId={id} show={openToolBar} />  
      </div>
      <div className='flex flex-col justify-start items-start'>
        {type==BlockType.Heading1&&<input ref={questionRef}  placeholder='type your Heading' className='text-3xl w-screen border-none outline-none font-semibold text-neutral-900' />}
        {type==BlockType.Heading2&&<input ref={questionRef}  placeholder='type your Heading' className='text-xl w-screen border-none outline-none font-semibold text-neutral-900' />}
        {type==BlockType.Heading3&&<input ref={questionRef}  placeholder='type your Heading' className='text-md w-screen border-none outline-none font-semibold text-neutral-900' />}
      </div>
    </div>
  )
}

export default Heading

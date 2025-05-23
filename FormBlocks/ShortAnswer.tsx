"use client"
import React from 'react'
import { useState } from 'react'
import { Input } from '../components/export'
import { useRef } from 'react'
import Toolbar from '../components/ui/Toolbar'
import useSetLabel from '@/Hooks/useSetLabel'

interface ShortAnswerProps {
  id: number,
  question: string,
  required: boolean,
}

function ShortAnswer({ question,id }: ShortAnswerProps) {
  const [openToolBar, setOpenToolBar] = useState(false);
  const questionRef = useRef<HTMLInputElement>(null);

  useSetLabel({ labelRef: questionRef, id });

  return (
    <div onMouseLeave={() => setOpenToolBar(false)} onMouseOver={() => setOpenToolBar(true)} className='flex items-start justify-start'>
      <div className='flex justify-start items-start'>
          <Toolbar blockId={id} show={openToolBar} />  
      </div>
      <div className='flex flex-col justify-start items-start'>
        <input ref={questionRef}  placeholder='type your question here..' className='text-lg w-screen border-none outline-none font-semibold text-neutral-900' />
        <Input className='max-w-lg' />
      </div>
    </div>
  )
}

export default ShortAnswer

"use client"
import React  from 'react'
import { useState } from 'react'
import { Input,Textarea } from '../components/export'
import { useRef } from 'react'
import Toolbar from '../components/ui/Toolbar'
import useSetLabel from '@/Hooks/useSetLabel'

interface ShortAnswerProps {
  id: number,
  question: string,
  required: boolean,
}

function LongAnswer({ question,id }: ShortAnswerProps) {
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
        <Textarea placeholder='add your placeholder text here' className='min-h-32 max-w-lg text-start flex items-start justify-start placeholder:text-neutral-600' />
      </div>
    </div>
  )
}

export default LongAnswer
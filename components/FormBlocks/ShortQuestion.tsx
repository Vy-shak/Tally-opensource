"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Input } from '../export'
import { useRef } from 'react'
import Toolbar from '../ui/Toolbar'
import { useFormStore } from '@/lib/useFormData'

interface ShortQuestionprops {
  id: number,
  question: string,
  required: boolean,
}

function ShortQuestion({ question,id }: ShortQuestionprops) {
  const { updateFormData } = useFormStore();
  const [openToolBar, setOpenToolBar] = useState(false);
  const questionRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    if (questionRef.current) {
      updateFormData(id,questionRef.current.value);
    }
  },[questionRef.current?.value])

  return (
    <div onMouseLeave={() => setOpenToolBar(false)} onMouseOver={() => setOpenToolBar(true)} className='flex items-start justify-start'>
      <div className='flex justify-start items-start'>
          <Toolbar blockId={id} show={openToolBar} />  
      </div>
      <div className='flex flex-col justify-start items-start'>
        <input ref={questionRef} defaultValue={question} placeholder='type your question' className='text-lg w-screen border-none outline-none font-semibold text-neutral-900' />
        <Input />
      </div>
    </div>
  )
}

export default ShortQuestion

"use client"
import React from 'react'
import { useState } from 'react'
import { Input } from '../components/export'
import { useRef } from 'react'
import Toolbar from '../components/ui/Toolbar'
import useSetLabel from '@/Hooks/useSetLabel'
import { useSetplaceHolder } from '@/Hooks/useSetPlaceholder'

interface ShortAnswerProps {
  id: string,
  question: string,
  required: boolean,
}

function ShortAnswer({ question,id }: ShortAnswerProps) {
  const [openToolBar, setOpenToolBar] = useState(false);
  const questionRef = useRef<HTMLInputElement>(null);
  const placeHolderRef = useRef<HTMLInputElement>(null)

  useSetLabel({ labelRef: questionRef, id });
  useSetplaceHolder({placeholderRef:placeHolderRef,id});

  return (
    <div onMouseLeave={() => setOpenToolBar(false)} onMouseOver={() => setOpenToolBar(true)} className='flex items-start justify-start'>
      <div className='flex justify-start items-start'>
          <Toolbar blockId={id} show={openToolBar} />  
      </div>
      <div className='flex flex-col justify-start items-start'>
        <input ref={questionRef}  placeholder='type your question here..' className='text-lg max-w-lg border-none outline-none font-semibold text-neutral-900' />
        <Input  placeholder='write your placeholder here' ref={placeHolderRef} className='max-w-lg text-sm text-neutral-600' />
      </div>
    </div>
  )
}

export default ShortAnswer

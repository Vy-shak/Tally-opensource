"use client"
import React from 'react'
import { Input } from '../export'
import { useRef } from 'react'
import { GripVertical } from "lucide-react"

interface ShortQuestionprops {
  question: string,
}

function ShortQuestion({ question }: ShortQuestionprops) {
  const questionRef = useRef<HTMLInputElement>(null)
  return (
    <div className='flex items-center justify-center'>
      <GripVertical className='hover:opacity-100 opacity-0 ' color='grey' />
      <div className='flex flex-col justify-start items-start'>
        <input ref={questionRef} defaultValue={question} placeholder='type your question' className='text-lg w-screen border-none outline-none font-semibold text-neutral-900' />
        <Input />
      </div>
    </div>
  )
}

export default ShortQuestion

import React from 'react'
import { Input } from '../export'

interface ShortQuestionprops {
    question:string,
}

function ShortQuestion({question}:ShortQuestionprops) {
  return (
    <div className='flex flex-col justify-start items-start'>
      <span className='text-lg font-semibold text-neutral-900'>{question}</span>
      <Input/>
    </div>
  )
}

export default ShortQuestion

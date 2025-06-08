import React from 'react'
import { Toolbar,RatingBlock } from '@/components/export'
import { useRef, useState } from 'react'

interface Ratingprops {
  id: string,
}

function Rating({id}:Ratingprops) {
  const [openToolBar, setOpenToolBar] = useState(false);
  const questionRef = useRef<HTMLInputElement>(null);
  return (
    <div onMouseOver={() => setOpenToolBar(true)} className='flex items-start max-w-lg justify-start'>
      <div className='flex justify-start items-start'>
        <Toolbar blockId={id} show={openToolBar} />
      </div>
      <div className='flex flex-col justify-start items-start'>
        <input ref={questionRef} placeholder='type your question here..' className='text-lg w-screen border-none outline-none font-semibold text-neutral-900' />
        <RatingBlock rating={5} />
      </div>
    </div>
  )
}

export default Rating

import React from 'react'
import { ShortQuestion } from '../components/export'
import { BlockType } from '@/types/formTypes'
import { FormStore } from '@/types/formTypes'

interface BlockRenderprops {
    data: FormStore
}

function BlockRender({data}:BlockRenderprops) {
  return (
    <div className='flex flex-col items-start justify-start'>
        {data.map((block)=>{
            if (block.type==BlockType.ShortQuestion) {
                return <ShortQuestion id={block.id} key={block.id} question={block.label} required={block.required} />
            }
        })}
    </div>
  )
}

export default BlockRender

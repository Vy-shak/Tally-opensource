import React from 'react'
import {ShortAnswer,LongAnswer, Rating,CheckBoxes,YesorNoquesion, Heading} from "../FormBlocks/export"
import { BlockType } from '@/types/formTypes'
import { useFormStore } from '@/lib/useFormData'

function BlockRender() {
  const { formData } = useFormStore();

  console.log(formData);


  return (
    <div className='flex flex-col items-start gap-y-2 justify-start'>
        {formData.map((block)=>{
            if (block.type==BlockType.ShortQuestion) {
                return <ShortAnswer id={block.id} key={block.id} question={block.label} required={block.required} />
            }
            if (block.type==BlockType.LongQuestion) {
                return <LongAnswer id={block.id} key={block.id} question={block.label} required={block.required} />
            }
            if (block.type==BlockType.CheckBoxes) {
                return <CheckBoxes id={block.id} key={block.id} label={block.label} options={block.options} required={block.required} />
            }
            if (block.type==BlockType.YesorNo) {
                return <YesorNoquesion  id={block.id} key={block.id} />
            }
            if (block.type==BlockType.rating) {
                return <Rating key={block.id} id={block.id} />
            }
            if (block.type==BlockType.Heading1 || block.type == BlockType.Heading2 || block.type == BlockType.Heading3) {
                return <Heading type={block.type} key={block.id} id={block.id} />
            }
        })}
    </div>
  )
}

export default BlockRender

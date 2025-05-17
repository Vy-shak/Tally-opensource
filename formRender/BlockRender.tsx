import React from 'react'
import { ShortQuestion } from '../components/export'
import { BlockType } from '@/types/formTypes'
import { FormStore } from '@/types/formTypes'
import { useFormStore } from '@/lib/useFormData'

function BlockRender() {
  const { formData } = useFormStore();

  console.log(formData);


  return (
    <div className='flex flex-col items-start justify-start'>
        {formData.map((block)=>{
            if (block.type==BlockType.ShortQuestion) {
                return <ShortQuestion id={block.id} key={block.id} question={block.label} required={block.required} />
            }
        })}
    </div>
  )
}

export default BlockRender

import React from 'react'
import { ShortQuestion } from '../components/export'

interface BlockRenderprops {
    data:any[]
}

function BlockRender({data}:BlockRenderprops) {
  return (
    <div className='flex flex-col items-start justify-start'>
        {data.map((item)=>{
            if (item.type=="shortQtn") {
                return <ShortQuestion id={item.id} key={item.id} question={item.val1} />
            }
        })}
    </div>
  )
}

export default BlockRender

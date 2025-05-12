"use client"
import React from 'react'
import BlockRender from '@/formRender/BlockRender'
import { useState } from 'react'

function page() {
    const [formData,setFormdata] = useState([{id:1,type:"shortQtn",val1:"how is the josh"}])
  return (
    <div className='flex flex-col items-start justify-start'>
      <BlockRender data={formData} />
    </div>
  )
}

export default page

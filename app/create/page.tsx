"use client"
import React from 'react'
import BlockRender from '@/formRender/BlockRender'
import { Button } from '@/components/export'
import { useState } from 'react'

function page() {
   const [formData,setFormdata] = useState([{id:1,type:"shortQtn",val1:"how is the josh"}])
  return (
    <section className='flex flex-col px-20 pt-20 items-start justify-start'>
      <BlockRender data={formData} />
      <Button className='fixed bottom-12 right-8'>Create</Button>
    </section>
  )
}

export default page

"use client"
import React from 'react'
import BlockRender from '@/formRender/BlockRender'
import { Button,AddBlockpopup } from '@/components/export'
import { useState } from 'react'
import { useFormStore } from '@/lib/useFormData'

function page() {
  const [open,setOpen] = useState(false)  

  return (
    <section className='flex flex-col  items-start justify-start'>
      <BlockRender />
      <Button onClick={()=>setOpen(true)} className='fixed bottom-12 right-8'>Create</Button> 
      <AddBlockpopup setOpen = {setOpen} open={open} />
    </section>
  )
}

export default page

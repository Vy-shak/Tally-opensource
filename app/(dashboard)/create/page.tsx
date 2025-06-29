"use client"
import React from 'react'
import BlockRender from '@/formRender/BlockRender'
import { Button,AddBlockpopup } from '@/components/export'
import { useState } from 'react'
import Navbar from '@/components/general/Navbar'
import SignupPopup from '@/components/create/SignupPopup'

function page() {
  const [open,setOpen] = useState(false)  

  return (
    <section className='flex w-full flex-col  items-start justify-start'>
      <Navbar />
      <div className='flex w-full pt-16 flex-col  items-start justify-start'>
      <BlockRender />
      <Button onClick={()=>setOpen(true)} className='fixed bottom-12 right-8'>Create</Button> 
      <AddBlockpopup setOpen = {setOpen} open={open} />
      <SignupPopup />
      </div>
    </section>
  )
}

export default page

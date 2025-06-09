"use client"
import React from 'react'
import BlockRender from '@/formRender/BlockRender'
import { Button, AddBlockpopup, Navbar } from '@/components/export'
import { useState } from 'react'

function page() {
  const [open, setOpen] = useState(false)

  return (
    <section className='flex w-full flex-col h-full   px-8 items-start justify-start'>
      <Navbar />
      <div className='w-full flex flex-col pt-16 items-start justify-start'>
        <BlockRender />
        <Button onClick={() => setOpen(true)} className='fixed bottom-12 right-8'>Create</Button>
        <AddBlockpopup setOpen={setOpen} open={open} />
      </div>
    </section>
  )
}

export default page

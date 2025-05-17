"use client"
import React from 'react'
import BlockRender from '@/formRender/BlockRender'
import { Button } from '@/components/export'

function page() {
  return (
    <section className='flex flex-col px-20 pt-20 items-start justify-start'>
      <BlockRender />
      <Button className='fixed bottom-12 right-8'>Create</Button>
    </section>
  )
}

export default page

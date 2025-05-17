"use client"
import React from 'react'
import BlockRender from '@/formRender/BlockRender'
import { useFormStore } from '@/lib/useFormData'
import { Button } from '@/components/export'
import { useState } from 'react'

function page() {
   const { formData } = useFormStore();
  return (
    <section className='flex flex-col px-20 pt-20 items-start justify-start'>
      <BlockRender data={formData} />
      <Button className='fixed bottom-12 right-8'>Create</Button>
    </section>
  )
}

export default page

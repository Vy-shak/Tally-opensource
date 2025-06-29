"use client"
import React from 'react'
import Hero from '@/components/sections/Hero'
import Navbar from '@/components/landing.tsx/Navbar'

function page() {


  return (
    <section className='w-full  flex flex-col justify-center items-center'>
      <Navbar/>
      <section className='w-full py-12 px-4 sm:px-6 lg:flex-row  lg:py-16 lg:px-8'>
        <Hero/>
      </section>
    </section>
  )
}

export default page

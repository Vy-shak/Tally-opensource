import React from 'react'
import Link from 'next/link'
import { Button } from '../export'

function Hero() {
    return (
        <section className='w-full bg-white flex flex-col items-center justify-center '>
            <h1 className='text-center text-6xl font-bold'><span >Create Powerful Forms</span><br /><span>with us</span></h1>
            <div className='w-full py-6 flex justify-center items-center'>
                <Link href={"/create"}>
                <Button>Start Creating</Button></Link>
            </div>
        </section>
    )
}

export default Hero

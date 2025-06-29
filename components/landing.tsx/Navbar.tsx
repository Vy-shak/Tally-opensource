import React from 'react'
import { SignUpButton, SignInButton } from '@clerk/nextjs'
import { Button } from '../export'

function Navbar() {
    return (
        <div className='w-full px-3 fixed top-0 h-16 bg-white border-2 border-b-neutral-300 flex justify-between items-center'>
            <span className='text-xl font-bold'>Tally</span>
            <div className='flex items-center gap-x-4 justify-center w-fit'>
                <span>Pricing</span>
                <SignUpButton>
                    <Button>Sign Up</Button>
                </SignUpButton>
                <SignInButton>
                    <Button>Sign In</Button>
                </SignInButton>
            </div>
        </div>
    )
}

export default Navbar

import React from 'react'
import { Checkbox } from '../ui/checkbox'


interface CheckboxmenuProps {
    label: string,
}



function Checkboxmenu({ label }: CheckboxmenuProps) {
    return (
        <div className='flex gap-x-2 items-center justify-center w-fit'>
            <Checkbox/>
            <input type="text" placeholder={label} className='text-sm w-screen border-none outline-none font-semibold text-neutral-900' />  
        </div>
    )
}

export default Checkboxmenu

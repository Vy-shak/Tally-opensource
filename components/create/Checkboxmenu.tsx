import React from 'react'
import { Checkbox } from '../ui/checkbox'


interface CheckboxmenuProps {
    label: string,
}



function Checkboxmenu({ label }: CheckboxmenuProps) {
    return (
        <div className='flex gap-x-2 items-center justify-center w-fit'>
            <Checkbox/>
            <span className='font-normal text-sm text-neutral-600'>{label}</span>
        </div>
    )
}

export default Checkboxmenu

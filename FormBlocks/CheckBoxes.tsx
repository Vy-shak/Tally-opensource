import React from 'react'
import { Toolbar, Textarea, Checkboxmenu } from '../components/export'
import { useState } from 'react';
import { useRef } from 'react';
interface option {
    checked: boolean,
    label: string,
}

interface CheckBoxesProps {
    label: string,
    id: number,
    required: boolean,
    options: option[]
}

function CheckBoxes({ label, id, options }: CheckBoxesProps) {
    const [openToolBar, setOpenToolBar] = useState(false);
    const labelRef = useRef<HTMLInputElement>(null);


    return (
        <div onMouseLeave={() => setOpenToolBar(false)} onMouseOver={() => setOpenToolBar(true)} className='flex items-start justify-start w-full max-w-xl'>
            <div className='flex justify-start items-start'>
                <Toolbar blockId={id} show={openToolBar} />
            </div>
            <div className='flex flex-col gap-y-2 justify-start items-start'>
                <input ref={labelRef} placeholder='Write your query here' className='text-lg w-screen border-none outline-none font-semibold text-neutral-900' />
                <div className='flex flex-col justify-start items-start '>
                    {options.map((option, index) => (
                        <Checkboxmenu key={index} label={option.label} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CheckBoxes

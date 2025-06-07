import React from 'react'
import { Toolbar,  Checkboxmenu } from '../components/export'
import { useSetLabel } from '../Hooks/export';
import { useState } from 'react';
import { useRef } from 'react';


interface option {
    checkId: string, 
    checked: boolean,
    label: string,
}

interface CheckBoxesProps {
    label: string,
    id: string,
    required: boolean,
    options: option[]
}

function CheckBoxes({ label, id, options }: CheckBoxesProps) {
    const [openToolBar, setOpenToolBar] = useState(false);
    const labelRef = useRef<HTMLInputElement>(null);
    const checkBoxref = useRef<HTMLInputElement>(null);


    useSetLabel({ labelRef: labelRef, id });


    return (
        <div onMouseLeave={() => setOpenToolBar(false)} onMouseOver={() => setOpenToolBar(true)} className='flex items-start justify-start w-full max-w-xl'>
            <div className='flex justify-start items-start'>
                <Toolbar blockId={id} show={openToolBar} />
            </div>
            <div className='flex flex-col gap-y-2 justify-start items-start'>
                <input ref={labelRef} placeholder='Write your query here' className='text-lg w-screen border-none outline-none font-semibold text-neutral-900' />
                <div className='flex flex-col gap-y-1 justify-start items-start '>
                    {options.map((menu, index) => (
                        <Checkboxmenu id={id} checkId={menu.checkId} checkBoxref={checkBoxref} key={index} label={menu.label} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CheckBoxes

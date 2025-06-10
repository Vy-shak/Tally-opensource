"use client"
import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Copy, Trash2, Plus } from 'lucide-react'
import { useFormStore } from '@/lib/useFormData'
import { useRef } from 'react'

interface CheckboxmenuProps {
    id: string,
    checkId:string
    label: string,
    checkBoxref: React.RefObject<HTMLInputElement | null>
}




function Checkboxmenu({ label, id,checkId }: CheckboxmenuProps) {
    const { addCheckbox,updateCheckbox,deleteCheckbox} = useFormStore();
    const checkBoxref  = useRef<HTMLInputElement>(null)

    const addMoreCheckbox = ()=>{
        addCheckbox(id)
    }

    const handleupdate = ()=>{
        if (checkBoxref.current?.value) {
            updateCheckbox(id,checkId,checkBoxref.current?.value)
        }
    }

    const handleDelete = ()=>{
        deleteCheckbox(id,checkId)
    }

    return (
        <div className='flex items-center justify-start w-fit'>
            <div className='flex gap-x-2 items-center justify-center w-fit'>
                <Checkbox />
                <input onChange={handleupdate} ref={checkBoxref} type="text" placeholder={label} className='text-sm w-sm border-none outline-none font-semibold text-neutral-900' />
            </div>
            <div className='flex gap-x-2 items-center justify-center w-fit'>
                <div  className='flex items-center cursor-pointer hover:bg-neutral-100 rounded justify-center w-fit h-fit p-1'>
                    <Plus onClick={addMoreCheckbox} size={18} className='text-neutral-400' />
                </div>
                <div onClick={handleDelete} className='flex items-center cursor-pointer hover:bg-neutral-100 rounded justify-center w-fit h-fit p-1'>
                    <Trash2 size={18} className='text-neutral-400' />
                </div>
            </div>
        </div>
    )
}

export default Checkboxmenu

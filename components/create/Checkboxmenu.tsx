import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Copy, Trash2 } from 'lucide-react'
import { useFormStore } from '@/lib/useFormData'
import {BlockType} from '@/types/formTypes' 

interface CheckboxmenuProps {
    id:number,
    label: string,
    checkBoxref: React.RefObject<HTMLInputElement | null>
}




function Checkboxmenu({ label,id }: CheckboxmenuProps) {
    const { removeFormData, formData} = useFormStore();


    return (
        <div className='flex items-center justify-start w-fit'>
            <div className='flex gap-x-2 items-center justify-center w-fit'>
                <Checkbox />
                <input  type="text" placeholder={label} className='text-sm w-sm border-none outline-none font-semibold text-neutral-900' />
            </div>
            <div className='flex gap-x-2 items-center justify-center w-fit'>    
                <div className='flex items-center cursor-pointer hover:bg-neutral-100 rounded justify-center w-fit h-fit p-1'>
                    <Copy size={18} className='text-neutral-400' />
                </div>
                <div  className='flex items-center cursor-pointer hover:bg-neutral-100 rounded justify-center w-fit h-fit p-1'>
                    <Trash2 size={18} className='text-neutral-400'/> 
                </div> 
            </div>
        </div>
    )
}

export default Checkboxmenu

import React, { useState } from 'react'
import { GripVertical, Trash2, Plus } from "lucide-react"
import OptionCard from './OptionCard'
import { useFormStore } from '@/lib/useFormData'
import { BlockType } from '@/types/formTypes'

interface ToolbarProps {
    show: boolean,
    blockId:number
}

function Toolbar({ show, blockId }: ToolbarProps ) {
    const [Openoption, setOpenoption] = useState(false);
    const { removeFormData } = useFormStore();

    const handleClick = () => {
        setOpenoption((prev) => !prev)
    }

    const handleRemoveBlock = ()=>{
        removeFormData(blockId);
    }


    return (
        <div className='flex justify-start items-start'>
            {Openoption && <OptionCard ToggleOption={setOpenoption} />}
            <div className={`flex ${show ? "opacity-100" : "opacity-0"} w-fit h-fit relative top-1  cursor-pointer  justify-center items-center`}>
                <Trash2 onClick={handleRemoveBlock} className='w-fit p-1 h-fit hover:bg-neutral-100 rounded-sm' size={18} color='grey' />
                <Plus  className='w-fit p-1 h-fit hover:bg-neutral-100 rounded-sm' size={18} color='grey' />
                <GripVertical className='w-fit p-1 h-fit hover:bg-neutral-100 rounded-sm' onClick={handleClick} size={18} color='grey' />
            </div>
        </div>
    )
}

export default Toolbar

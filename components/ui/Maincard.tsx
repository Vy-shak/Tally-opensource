import React, { useState } from 'react'
import { GripVertical, Trash2, Plus } from "lucide-react"
import OptionCard from './OptionCard'

function Maincard() {
    const [Openoption, setOpenoption] = useState(false);

    const handleClick = () =>{
        setOpenoption((prev)=>!prev)
    }

    return (
        <div className='flex justify-start items-start'>
            {Openoption&&<OptionCard />}
            <div className='flex relative top-1 hover:opacity-100 cursor-pointer opacity-0 justify-center items-center'>
                <Trash2 size={18} color='grey' />
                <Plus size={18} color='grey' />
                <GripVertical onClick={handleClick} size={18} color='grey' />
            </div>
        </div>
    )
}

export default Maincard

import { Popup,BlockMenu } from "../export";
import { useState } from "react";   
import React  from 'react'
import { blockforms } from "@/constants/editor";
import { FormStore } from "@/types/formTypes"; 
import { useFormStore } from "@/lib/useFormData";  

interface AddBlockpopupProps {
    open:boolean}

export default function AddBlockpopup({open}:AddBlockpopupProps) { 
    const {formData} = useFormStore()

    const handleaddBlock = (item:FormStore) => {
            
    }
  return (
    <>
    {open&&<Popup>
      <div className="w-full pl-4 pt-6 bg-white h-full rounded-xl flex flex-col items-start justify-start">
        <div className="w-fit flex flex-col items-start justify-start gap-y-3">
          {blockforms.map((block) => (
            <BlockMenu Onclick={() => handleaddBlock(block.addItem)} key={block.id} icon={block.icon} title={block.title} />
          ))}
        </div>
      </div>
    </Popup>}
    </>
  )
}


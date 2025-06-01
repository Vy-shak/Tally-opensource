import { Popup, BlockMenu } from "../export";
import { Dispatch, useState } from "react";
import { SetStateAction } from "react";
import React from 'react'
import { blockforms } from "@/constants/editor";
import { FormStore } from "@/types/formTypes";
import { useFormStore } from "@/lib/useFormData";
import { Button } from "../export";
import { X } from "lucide-react";

interface AddBlockpopupProps {
  open: boolean,
  setOpen:Dispatch<SetStateAction<boolean>>
}

export default function AddBlockpopup({ open,setOpen }: AddBlockpopupProps) {
  const { formData,addFormData } = useFormStore()

  const handleaddBlock = (item: FormStore) => {
    addFormData(item)
  }
  return (
    <>
      {open && <Popup>
        <div className="flex w-full p-6 rounded-xl h-96 flex-col bg-white items-start justify-start">
          <div className="flex items-center justify-end w-full h-fit">
            <X onClick={()=>setOpen(false)} />
          </div>
          <div className="w-full pl-4 pt-6 bg-white h-full rounded-xl flex  items-start justify-start">
            <div className="w-fit flex flex-col items-start justify-start gap-y-3">
              {blockforms.map((block) => (
                <BlockMenu setOpen={setOpen} Onclick={() => handleaddBlock(block.addItem)} key={block.id} icon={block.icon} title={block.title} />
              ))}
            </div>
            <div className="w-full h-full">
            </div>
          </div>
          <div className="flex items-center justify-end w-full h-fit">
            <Button>add</Button>
          </div>
        </div>
      </Popup>}
    </>
  )
}


"use client"
import { Popup, BlockMenu } from "../export";
import { Dispatch, useState } from "react";
import { SetStateAction } from "react";
import React from 'react'
import { blockData } from "@/constants/editor";
import { FormStore } from "@/types/formTypes";
import { useFormStore } from "@/lib/useFormData";
import { Button } from "../export";
import { X } from "lucide-react";
import { BlockType } from "@/types/formTypes";
import { v4 as uuidv4 } from 'uuid';
import { usePopup,popuptype,status } from "@/lib/usePopup";

interface AddBlockpopupProps {
  open: boolean,
  setOpen:Dispatch<SetStateAction<boolean>>
}

export default function AddBlockpopup({ open,setOpen }: AddBlockpopupProps) {
  const { formData,addFormData } = useFormStore()
  const {popupstatus,updatePopup} = usePopup()

  const handleaddBlock = (item: FormStore) => {
    if (item.type == BlockType.ShortQuestion || BlockType.LongQuestion || BlockType.rating) {
          const id = uuidv4()
          const updatedItem = {...item,id:id}
          addFormData(updatedItem);
          updatePopup(null)
    }
    if (item.type === BlockType.CheckBoxes) {
       const id = uuidv4();
       const checkBoxes = item.options;
       updatePopup(null)
    }
  }

  if (popupstatus&&popupstatus.type!==popuptype.AddBlocks) return null


  return (
    <>
      {popupstatus?.status==status.open&&<Popup>
        <div className="flex w-full p-6 rounded-xl h-96 flex-col bg-white items-start justify-start">
          <div className="flex items-center justify-end w-full h-fit">
            <X onClick={()=>updatePopup(null)} />
          </div>
          <div className="w-full pl-4 overflow-y-scroll pt-6 bg-white h-full rounded-xl flex  items-start justify-start">
            <div className="w-fit  flex flex-col items-start justify-start gap-y-3">
              {blockData.map((block) => (
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

